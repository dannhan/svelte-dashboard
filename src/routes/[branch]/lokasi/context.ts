import type { Map as MapLibre, MapMouseEvent, Marker } from 'maplibre-gl';
import { getContext, setContext } from 'svelte';
import { readable, writable, type Readable, type Writable } from 'svelte/store';
import type { ClusterOptions, MarkerClickInfo } from './types';

// Choose current time instead of 0 to avoid possible reuse during HMR.
export let nextId = Date.now();
/** Return an ID to use for a source or layer, in case you don't care about
 * the name. */
export function getId(prefix: string) {
  return `${prefix}-${nextId++}`;
}

export interface LayerInfo {
  interactive: boolean;
}

export interface MapContext {
  map: Readable<MapLibre | null>;
  source: Readable<string | null>;
  layer: Readable<string | null>;
  cluster: Writable<ClusterOptions | undefined>;
  popupTarget: Readable<Marker | string | null>;
  /** A list of images that have been successfully loaded. */
  loadedImages: Writable<Set<string>>;
  minzoom: Writable<number>;
  maxzoom: Writable<number>;

  // Information about every layer in the system.
  layerInfo: Map<string, LayerInfo>;

  eventTopMost: (event: MapMouseEvent) => string;

  layerEvent: Writable<LayerEvent | null>;
}

export type MarkerMouseEvent = MarkerClickInfo & { layerType: 'marker'; type: string };

export interface DeckGlMouseEvent<DATA = unknown> {
  layerType: 'deckgl';
  type: 'click' | 'mouseenter' | 'mouseleave';
  coordinate: [number, number];
  object?: DATA;
  index: number;
  picked: boolean;
  color: Uint8Array | null;
  pixel: [number, number];
  x: number;
  y: number;
}

export type LayerEvent = DeckGlMouseEvent<unknown> | MarkerMouseEvent;

const MAP_CONTEXT_KEY = Symbol.for('svelte-maplibre');

export function mapContext(): MapContext {
  return getContext(MAP_CONTEXT_KEY);
}

export function setMapContext(context: MapContext): MapContext {
  return setContext(MAP_CONTEXT_KEY, context);
}

function eventTopMost(layerInfo: Map<string, LayerInfo>): (event: MapMouseEvent) => string {
  const tracker = new WeakMap<Event, string | undefined>();
  return (event: MapMouseEvent) => {
    const id = tracker.get(event.originalEvent);
    if (id !== undefined) {
      return id;
    }

    const features = event.target.queryRenderedFeatures(event.point);
    const topId = features.find((f) => layerInfo.get(f.layer.id)?.interactive)?.layer.id;

    tracker.set(event.originalEvent, topId);

    return topId || "Error Occurred From Context.ts";
  };
}

export function createMapContext(): MapContext {
  const layerInfo = new Map();
  return setContext(MAP_CONTEXT_KEY, {
    map: writable<MapLibre | null>(null),
    source: readable(null),
    layer: readable(null),
    popupTarget: readable(null),
    cluster: writable(),
    loadedImages: writable(new Set()),
    minzoom: writable(0),
    maxzoom: writable(24),
    layerEvent: writable(null),
    layerInfo,
    eventTopMost: eventTopMost(layerInfo),
  });
}

/** Make sure inner components can't accidentally change their parent stores. */
function readableFromWritable<T>(writable: Readable<T>): Readable<T> {
  return {
    subscribe: writable.subscribe,
  };
}

export interface UpdatedContext<TYPE> extends MapContext {
  self: Writable<TYPE | null>;
}

interface UpdatedContextOptions {
  key: 'source' | 'layer' | 'popupTarget';
  setPopupTarget?: boolean;
  setCluster?: boolean;
  setMouseEvent?: boolean;
}

/** Replace one or more elements of the map context with a new store. */
function updatedContext<T extends string | Marker>({
  key,
  setPopupTarget = false,
  setCluster = false,
  setMouseEvent = false,
}: UpdatedContextOptions): UpdatedContext<T> {
  const currentContext = mapContext();

  const newValue = writable<T | null>(null);
  const ctxValue = readableFromWritable(newValue);
  const newCtx = {
    ...currentContext,
    [key]: readableFromWritable(newValue),
  };

  if (setPopupTarget) {
    // This type also becomes a popup target in addition to whatever else it was.
    newCtx.popupTarget = ctxValue;
  }

  if (setMouseEvent) {
    const layerEvent = writable(null);
    newCtx.layerEvent = layerEvent;
    currentContext.layerEvent = layerEvent;
  }

  if (setCluster) {
    newCtx.cluster = writable();
  }

  setContext(MAP_CONTEXT_KEY, newCtx);

  return {
    ...currentContext,
    self: newValue,
  };
}

export function updatedSourceContext(): UpdatedContext<string> {
  return updatedContext<string>({ key: 'source', setCluster: true });
}

export function updatedLayerContext(interactive = true): UpdatedContext<string> {
  return updatedContext<string>({
    key: 'layer',
    setPopupTarget: interactive,
    setMouseEvent: interactive,
  });
}

export function updatedDeckGlContext(): UpdatedContext<string> {
  return updatedContext<string>({ key: 'layer', setMouseEvent: true });
}

export function updatedMarkerContext(): UpdatedContext<Marker> {
  return updatedContext<Marker>({ key: 'popupTarget', setPopupTarget: true, setMouseEvent: true });
}

export function updatedZoomRangeContext(
  initialMinZoom: number | undefined,
  initialMaxZoom: number | undefined
) {
  const currentContext = mapContext();
  const minzoom = writable(initialMinZoom);
  const maxzoom = writable(initialMaxZoom);
  setContext(MAP_CONTEXT_KEY, {
    ...currentContext,
    minzoom: readableFromWritable(minzoom),
    maxzoom: readableFromWritable(maxzoom),
  });
  return {
    originalMinZoom: currentContext.minzoom,
    originalMaxZoom: currentContext.maxzoom,
    minzoom,
    maxzoom,
  };
}

export function isDeckGlMouseEvent(
  event: MapMouseEvent | DeckGlMouseEvent
): event is DeckGlMouseEvent<unknown> {
  return 'layerType' in event && event.layerType === 'deckgl';
}
