import { c as create_ssr_component, s as spread, d as escape_object, a as add_attribute, v as validate_component, f as each, e as escape } from "../../../../../chunks/ssr.js";
import { M as Mode_toggle } from "../../../../../chunks/mode-toggle.js";
import { c as compute_rest_props, a as subscribe, g as getContext, s as setContext, b as createEventDispatcher, d as set_store_value, o as onDestroy, n as null_to_empty, e as compute_slots } from "../../../../../chunks/lifecycle.js";
import { e as getCtx, g as getState, i as isHTMLElement, a as Command, b as Command_input, c as Command_empty, d as Command_group, C as Command_item } from "../../../../../chunks/command-input.js";
import "dequal";
import { j as cn } from "../../../../../chunks/index3.js";
import { M as MagnifyingGlass } from "../../../../../chunks/MagnifyingGlass.js";
import maplibregl from "maplibre-gl";
import flush from "just-flush";
import { w as writable, r as readable } from "../../../../../chunks/index2.js";
import compare from "just-compare";
import "pmtiles";
import { d as derivedMode } from "../../../../../chunks/stores.js";
const CommandList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["el", "asChild"]);
  let $$unsubscribe_state;
  const { ids } = getCtx();
  const state = getState();
  $$unsubscribe_state = subscribe(state, (value) => value);
  let { el = void 0 } = $$props;
  let { asChild = false } = $$props;
  function sizerAction(node) {
    let animationFrame;
    const listEl = node.closest("[data-cmdk-list]");
    if (!isHTMLElement(listEl)) {
      return;
    }
    const observer = new ResizeObserver(() => {
      animationFrame = requestAnimationFrame(() => {
        const height = node.offsetHeight;
        listEl.style.setProperty("--cmdk-list-height", height.toFixed(1) + "px");
      });
    });
    observer.observe(node);
    return {
      destroy() {
        cancelAnimationFrame(animationFrame);
        observer.unobserve(node);
      }
    };
  }
  const listAttrs = {
    "data-cmdk-list": "",
    role: "listbox",
    "aria-label": "Suggestions",
    id: ids.list,
    "aria-labelledby": ids.input
  };
  const sizerAttrs = { "data-cmdk-list-sizer": "" };
  const list = { attrs: listAttrs };
  const sizer = { attrs: sizerAttrs, action: sizerAction };
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $$unsubscribe_state();
  return `${asChild ? `${slots.default ? slots.default({ list, sizer }) : ``}` : `<div${spread([escape_object(listAttrs), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}><div${spread([escape_object(sizerAttrs)], {})}>${slots.default ? slots.default({}) : ``}</div></div>`}`;
});
const Command_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(CommandList, "CommandPrimitive.List").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const LoadingSpinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<div${add_attribute("class", $$restProps.class, 0)}><svg aria-hidden="true" class="h-5 w-5 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg> <span class="sr-only" data-svelte-h="svelte-1wtojot">Loading...</span></div>`;
});
const SearchLocation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["lngLat"]);
  let { lngLat } = $$props;
  let timer;
  let foundedCities = [];
  let value = "";
  let isFetching = false;
  let isShowingResult = false;
  const debounce = (val) => {
    clearTimeout(timer);
    timer = setTimeout(
      async () => {
        isFetching = true;
        const apiUrl = `https://nominatim.openstreetmap.org/search?format=geojson&accept-language=id&countrycodes=id&limit=5&q=${val}`;
        const data = await fetch(apiUrl).then((res) => res.json()).catch(() => console.error("An exception occurred"));
        foundedCities = data?.features;
        isFetching = false;
        isShowingResult = true;
      },
      500
    );
  };
  if ($$props.lngLat === void 0 && $$bindings.lngLat && lngLat !== void 0)
    $$bindings.lngLat(lngLat);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        isShowingResult = false;
        if (value.length > 1) {
          debounce(value);
        }
      }
    }
    $$rendered = `<div${add_attribute("class", $$restProps.class, 0)}>${validate_component(Command, "Command.Root").$$render(
      $$result,
      {
        class: cn("w-full rounded-lg border border-b-0 bg-card shadow", isShowingResult && "rounded-lg focus-within:rounded-b-none"),
        shouldFilter: false
      },
      {},
      {
        default: () => {
          return `${validate_component(Command_input, "Command.Input").$$render(
            $$result,
            {
              placeholder: "Search location...",
              class: "peer rounded-none",
              value
            },
            {
              value: ($$value) => {
                value = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${isFetching ? `${validate_component(LoadingSpinner, "LoadingSpinner").$$render(
            $$result,
            {
              class: "absolute right-2 top-1/2 -translate-y-1/2"
            },
            {},
            {}
          )}` : ``} ${isShowingResult ? `${validate_component(Command_list, "Command.List").$$render(
            $$result,
            {
              class: "invisible absolute left-0 top-10 z-10 box-border w-full rounded-b-lg border bg-card shadow hover:visible peer-focus-within:visible"
            },
            {},
            {
              default: () => {
                return `${validate_component(Command_empty, "Command.Empty").$$render($$result, {}, {}, {
                  default: () => {
                    return `Not Found.`;
                  }
                })} ${validate_component(Command_group, "Command.Group").$$render($$result, {}, {}, {
                  default: () => {
                    return `${each(foundedCities, (city) => {
                      return `${validate_component(Command_item, "Command.Item").$$render(
                        $$result,
                        {
                          onSelect: () => {
                            lngLat = city.geometry.coordinates;
                            isShowingResult = false;
                          }
                        },
                        {},
                        {
                          default: () => {
                            return `${validate_component(MagnifyingGlass, "MagnifyingGlass").$$render(
                              $$result,
                              {
                                class: "mr-2 h-4 w-4 shrink-0 opacity-50"
                              },
                              {},
                              {}
                            )} <span class="truncate">${escape(city.properties.display_name)}</span> <span class="hidden">${escape(city.properties.place_id)}</span> `;
                          }
                        }
                      )}`;
                    })}`;
                  }
                })}`;
              }
            }
          )}` : ``}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const MAP_CONTEXT_KEY$1 = Symbol.for("svelte-maplibre");
function mapContext$1() {
  return getContext(MAP_CONTEXT_KEY$1);
}
function eventTopMost(layerInfo) {
  let tracker = /* @__PURE__ */ new WeakMap();
  return (event) => {
    let id = tracker.get(event.originalEvent);
    if (id !== void 0) {
      return id;
    }
    let features = event.target.queryRenderedFeatures(event.point);
    let topId = features.find((f) => layerInfo.get(f.layer.id)?.interactive)?.layer.id;
    tracker.set(event.originalEvent, topId);
    return topId;
  };
}
function createMapContext() {
  let layerInfo = /* @__PURE__ */ new Map();
  return setContext(MAP_CONTEXT_KEY$1, {
    map: writable(null),
    source: readable(null),
    layer: readable(null),
    popupTarget: readable(null),
    cluster: writable(),
    loadedImages: writable(/* @__PURE__ */ new Set()),
    minzoom: writable(0),
    maxzoom: writable(24),
    layerEvent: writable(null),
    layerInfo,
    eventTopMost: eventTopMost(layerInfo)
  });
}
function readableFromWritable(writable2) {
  return {
    subscribe: writable2.subscribe
  };
}
function updatedContext({ key, setPopupTarget = false, setCluster = false, setMouseEvent = false }) {
  let currentContext = mapContext$1();
  let newValue = writable(null);
  let ctxValue = readableFromWritable(newValue);
  let newCtx = {
    ...currentContext,
    [key]: readableFromWritable(newValue)
  };
  if (setPopupTarget) {
    newCtx.popupTarget = ctxValue;
  }
  if (setMouseEvent) {
    let layerEvent = writable(null);
    newCtx.layerEvent = layerEvent;
    currentContext.layerEvent = layerEvent;
  }
  if (setCluster) {
    newCtx.cluster = writable();
  }
  setContext(MAP_CONTEXT_KEY$1, newCtx);
  return {
    ...currentContext,
    self: newValue
  };
}
function updatedMarkerContext() {
  return updatedContext({ key: "popupTarget", setPopupTarget: true, setMouseEvent: true });
}
function isDeckGlMouseEvent(event) {
  return "layerType" in event && event.layerType === "deckgl";
}
const DefaultMarker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $layerEvent, $$unsubscribe_layerEvent;
  let $marker, $$unsubscribe_marker;
  let $map, $$unsubscribe_map;
  let { lngLat } = $$props;
  let { class: classNames = void 0 } = $$props;
  let { draggable = false } = $$props;
  let { feature = null } = $$props;
  let { offset = void 0 } = $$props;
  let { rotation = 0 } = $$props;
  let { opacity = 1 } = $$props;
  const dispatch = createEventDispatcher();
  const { map, layerEvent, self: marker } = updatedMarkerContext();
  $$unsubscribe_map = subscribe(map, (value) => $map = value);
  $$unsubscribe_layerEvent = subscribe(layerEvent, (value) => $layerEvent = value);
  $$unsubscribe_marker = subscribe(marker, (value) => $marker = value);
  const dragStartListener = () => sendEvent("dragstart");
  const dragListener = () => {
    propagateLngLatChange();
    sendEvent("drag");
  };
  const dragEndListener = () => {
    propagateLngLatChange();
    sendEvent("dragend");
  };
  set_store_value(
    marker,
    $marker = new maplibregl.Marker(flush({
      draggable,
      rotation,
      className: classNames,
      offset,
      opacity: opacity.toString()
    })).setLngLat(lngLat).addTo($map),
    $marker
  );
  if (draggable) {
    $marker.on("dragstart", dragStartListener);
    $marker.on("drag", dragListener);
    $marker.on("dragend", dragEndListener);
  }
  onDestroy(() => $marker?.remove());
  function propagateLngLatChange() {
    let newPos = $marker?.getLngLat();
    if (!newPos) {
      return;
    }
    if (Array.isArray(lngLat)) {
      lngLat = [newPos.lng, newPos.lat];
    } else if (lngLat && "lon" in lngLat) {
      lngLat = { lon: newPos.lng, lat: newPos.lat };
    } else {
      lngLat = newPos;
    }
  }
  function sendEvent(eventName) {
    let loc = $marker?.getLngLat();
    if (!loc) {
      return;
    }
    const lngLat2 = [loc.lng, loc.lat];
    let data = {
      map: $map,
      marker: $marker,
      lngLat: lngLat2,
      features: [
        {
          type: "Feature",
          properties: feature?.properties ?? {},
          geometry: { type: "Point", coordinates: lngLat2 }
        }
      ]
    };
    set_store_value(
      layerEvent,
      $layerEvent = {
        ...data,
        layerType: "marker",
        type: eventName
      },
      $layerEvent
    );
    dispatch(eventName, data);
  }
  if ($$props.lngLat === void 0 && $$bindings.lngLat && lngLat !== void 0)
    $$bindings.lngLat(lngLat);
  if ($$props.class === void 0 && $$bindings.class && classNames !== void 0)
    $$bindings.class(classNames);
  if ($$props.draggable === void 0 && $$bindings.draggable && draggable !== void 0)
    $$bindings.draggable(draggable);
  if ($$props.feature === void 0 && $$bindings.feature && feature !== void 0)
    $$bindings.feature(feature);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  {
    $marker?.setLngLat(lngLat);
  }
  {
    $marker?.setOffset(offset ?? [0, 0]);
  }
  {
    $marker?.setRotation(rotation);
  }
  {
    $marker?.setOpacity(opacity.toString());
  }
  $$unsubscribe_layerEvent();
  $$unsubscribe_marker();
  $$unsubscribe_map();
  return `${slots.default ? slots.default({}) : ``}`;
});
const FullscreenControl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $map, $$unsubscribe_map;
  const { map } = mapContext$1();
  $$unsubscribe_map = subscribe(map, (value) => $map = value);
  let { position = "top-left" } = $$props;
  let { container = void 0 } = $$props;
  let control = null;
  onDestroy(() => {
    if ($map?.loaded() && control) {
      $map.removeControl(control);
    }
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  {
    if ($map && !control) {
      let containerEl;
      if (typeof container === "string") {
        containerEl = document.querySelector(container) ?? void 0;
      } else {
        containerEl = container;
      }
      control = new maplibregl.FullscreenControl({ container: containerEl });
      $map.addControl(control, position);
    }
  }
  $$unsubscribe_map();
  return ``;
});
const GeolocateControl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $map, $$unsubscribe_map;
  const { map } = mapContext$1();
  $$unsubscribe_map = subscribe(map, (value) => $map = value);
  let { position = "top-left" } = $$props;
  let { positionOptions = void 0 } = $$props;
  let { fitBoundsOptions = void 0 } = $$props;
  let { trackUserLocation = false } = $$props;
  let { showAccuracyCircle = true } = $$props;
  let { showUserLocation = true } = $$props;
  let control = null;
  onDestroy(() => {
    if ($map?.loaded() && control) {
      $map.removeControl(control);
    }
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.positionOptions === void 0 && $$bindings.positionOptions && positionOptions !== void 0)
    $$bindings.positionOptions(positionOptions);
  if ($$props.fitBoundsOptions === void 0 && $$bindings.fitBoundsOptions && fitBoundsOptions !== void 0)
    $$bindings.fitBoundsOptions(fitBoundsOptions);
  if ($$props.trackUserLocation === void 0 && $$bindings.trackUserLocation && trackUserLocation !== void 0)
    $$bindings.trackUserLocation(trackUserLocation);
  if ($$props.showAccuracyCircle === void 0 && $$bindings.showAccuracyCircle && showAccuracyCircle !== void 0)
    $$bindings.showAccuracyCircle(showAccuracyCircle);
  if ($$props.showUserLocation === void 0 && $$bindings.showUserLocation && showUserLocation !== void 0)
    $$bindings.showUserLocation(showUserLocation);
  {
    if ($map && !control) {
      control = new maplibregl.GeolocateControl({
        positionOptions,
        fitBoundsOptions,
        trackUserLocation,
        showAccuracyCircle,
        showUserLocation
      });
      $map.addControl(control, position);
    }
  }
  $$unsubscribe_map();
  return ``;
});
const NavigationControl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $map, $$unsubscribe_map;
  const { map } = mapContext$1();
  $$unsubscribe_map = subscribe(map, (value) => $map = value);
  let { position = "top-left" } = $$props;
  let { showCompass = true } = $$props;
  let { showZoom = true } = $$props;
  let { visualizePitch = false } = $$props;
  let control = null;
  onDestroy(() => {
    if ($map?.loaded() && control) {
      $map.removeControl(control);
    }
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.showCompass === void 0 && $$bindings.showCompass && showCompass !== void 0)
    $$bindings.showCompass(showCompass);
  if ($$props.showZoom === void 0 && $$bindings.showZoom && showZoom !== void 0)
    $$bindings.showZoom(showZoom);
  if ($$props.visualizePitch === void 0 && $$bindings.visualizePitch && visualizePitch !== void 0)
    $$bindings.visualizePitch(visualizePitch);
  {
    if ($map && !control) {
      control = new maplibregl.NavigationControl({ showCompass, showZoom, visualizePitch }), $map.addControl(control, position);
    }
  }
  $$unsubscribe_map();
  return ``;
});
const ScaleControl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $map, $$unsubscribe_map;
  const { map } = mapContext$1();
  $$unsubscribe_map = subscribe(map, (value) => $map = value);
  let { position = "bottom-left" } = $$props;
  let { maxWidth = void 0 } = $$props;
  let { unit = "metric" } = $$props;
  let control = null;
  onDestroy(() => {
    if ($map?.loaded() && control) {
      $map.removeControl(control);
    }
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.maxWidth === void 0 && $$bindings.maxWidth && maxWidth !== void 0)
    $$bindings.maxWidth(maxWidth);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  {
    if ($map && !control) {
      control = new maplibregl.ScaleControl({ maxWidth, unit });
      $map.addControl(control, position);
    }
  }
  $$unsubscribe_map();
  return ``;
});
const css$1 = {
  code: ".expand-map.svelte-p00lfq{position:absolute;top:0;bottom:0;left:0;right:0}",
  map: null
};
const MapLibre = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let standardControlsPosition;
  let allImagesLoaded;
  let $mapInstance, $$unsubscribe_mapInstance;
  let $loadedImages, $$unsubscribe_loadedImages;
  let { map = null } = $$props;
  let { class: classNames = void 0 } = $$props;
  let { style } = $$props;
  let { diffStyleUpdates = false } = $$props;
  let { center = void 0 } = $$props;
  let { zoom = void 0 } = $$props;
  let { pitch = 0 } = $$props;
  let { bearing = 0 } = $$props;
  let { bounds = void 0 } = $$props;
  let { hash = false } = $$props;
  let { loaded = false } = $$props;
  let { minZoom = 0 } = $$props;
  let { maxZoom = 22 } = $$props;
  let { zoomOnDoubleClick = true } = $$props;
  let { locale = void 0 } = $$props;
  let { interactive = true } = $$props;
  let { attributionControl = true } = $$props;
  let { cooperativeGestures = false } = $$props;
  let { preserveDrawingBuffer = false } = $$props;
  let { maxBounds = void 0 } = $$props;
  let { images = [] } = $$props;
  let { standardControls = false } = $$props;
  let { filterLayers = void 0 } = $$props;
  let { transformRequest = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  const { map: mapInstance, loadedImages } = createMapContext();
  $$unsubscribe_mapInstance = subscribe(mapInstance, (value) => $mapInstance = value);
  $$unsubscribe_loadedImages = subscribe(loadedImages, (value) => $loadedImages = value);
  let loadingImages = /* @__PURE__ */ new Set();
  async function loadImage(image) {
    if (!$mapInstance?.loaded()) {
      return;
    }
    if ("url" in image) {
      loadingImages.add(image.id);
      try {
        let imageData = await $mapInstance.loadImage(image.url);
        $mapInstance?.addImage(image.id, imageData.data, image.options);
        $loadedImages.add(image.id);
        loadedImages.set($loadedImages);
      } catch (e) {
        dispatch("error", e);
      } finally {
        loadingImages.delete(image.id);
      }
    } else {
      $mapInstance.addImage(image.id, image.data, image.options);
      $loadedImages.add(image.id);
      loadedImages.set($loadedImages);
    }
  }
  let lastStyle = style;
  if ($$props.map === void 0 && $$bindings.map && map !== void 0)
    $$bindings.map(map);
  if ($$props.class === void 0 && $$bindings.class && classNames !== void 0)
    $$bindings.class(classNames);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.diffStyleUpdates === void 0 && $$bindings.diffStyleUpdates && diffStyleUpdates !== void 0)
    $$bindings.diffStyleUpdates(diffStyleUpdates);
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.pitch === void 0 && $$bindings.pitch && pitch !== void 0)
    $$bindings.pitch(pitch);
  if ($$props.bearing === void 0 && $$bindings.bearing && bearing !== void 0)
    $$bindings.bearing(bearing);
  if ($$props.bounds === void 0 && $$bindings.bounds && bounds !== void 0)
    $$bindings.bounds(bounds);
  if ($$props.hash === void 0 && $$bindings.hash && hash !== void 0)
    $$bindings.hash(hash);
  if ($$props.loaded === void 0 && $$bindings.loaded && loaded !== void 0)
    $$bindings.loaded(loaded);
  if ($$props.minZoom === void 0 && $$bindings.minZoom && minZoom !== void 0)
    $$bindings.minZoom(minZoom);
  if ($$props.maxZoom === void 0 && $$bindings.maxZoom && maxZoom !== void 0)
    $$bindings.maxZoom(maxZoom);
  if ($$props.zoomOnDoubleClick === void 0 && $$bindings.zoomOnDoubleClick && zoomOnDoubleClick !== void 0)
    $$bindings.zoomOnDoubleClick(zoomOnDoubleClick);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.attributionControl === void 0 && $$bindings.attributionControl && attributionControl !== void 0)
    $$bindings.attributionControl(attributionControl);
  if ($$props.cooperativeGestures === void 0 && $$bindings.cooperativeGestures && cooperativeGestures !== void 0)
    $$bindings.cooperativeGestures(cooperativeGestures);
  if ($$props.preserveDrawingBuffer === void 0 && $$bindings.preserveDrawingBuffer && preserveDrawingBuffer !== void 0)
    $$bindings.preserveDrawingBuffer(preserveDrawingBuffer);
  if ($$props.maxBounds === void 0 && $$bindings.maxBounds && maxBounds !== void 0)
    $$bindings.maxBounds(maxBounds);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.standardControls === void 0 && $$bindings.standardControls && standardControls !== void 0)
    $$bindings.standardControls(standardControls);
  if ($$props.filterLayers === void 0 && $$bindings.filterLayers && filterLayers !== void 0)
    $$bindings.filterLayers(filterLayers);
  if ($$props.transformRequest === void 0 && $$bindings.transformRequest && transformRequest !== void 0)
    $$bindings.transformRequest(transformRequest);
  $$result.css.add(css$1);
  standardControlsPosition = typeof standardControls === "boolean" ? void 0 : standardControls;
  map = $mapInstance;
  {
    if (loaded && $mapInstance?.loaded()) {
      for (let image of images) {
        if (!loadingImages.has(image.id) && !$mapInstance.hasImage(image.id)) {
          loadImage(image);
        }
      }
    }
  }
  allImagesLoaded = images.every((image) => $loadedImages.has(image.id));
  {
    if ($mapInstance && !compare(style, lastStyle)) {
      $mapInstance.getStyle();
      lastStyle = style;
      $mapInstance.setStyle(style, { diff: diffStyleUpdates });
    }
  }
  {
    if (center && !compare(center, $mapInstance?.getCenter()))
      $mapInstance?.panTo(center);
  }
  {
    if (zoom && !compare(zoom, $mapInstance?.getZoom()))
      $mapInstance?.zoomTo(zoom);
  }
  {
    if (bounds && !compare(bounds, $mapInstance?.getBounds()))
      $mapInstance?.fitBounds(bounds);
  }
  {
    zoomOnDoubleClick ? $mapInstance?.doubleClickZoom.enable() : $mapInstance?.doubleClickZoom.disable();
  }
  $$unsubscribe_mapInstance();
  $$unsubscribe_loadedImages();
  return `<div class="${[
    escape(null_to_empty(classNames), true) + " svelte-p00lfq",
    !classNames ? "expand-map" : ""
  ].join(" ").trim()}">${$mapInstance && loaded ? `${standardControls ? `${validate_component(NavigationControl, "NavigationControl").$$render($$result, { position: standardControlsPosition }, {}, {})} ${validate_component(GeolocateControl, "GeolocateControl").$$render(
    $$result,
    {
      position: standardControlsPosition,
      fitBoundsOptions: { maxZoom: 12 }
    },
    {},
    {}
  )} ${validate_component(FullscreenControl, "FullscreenControl").$$render($$result, { position: standardControlsPosition }, {}, {})} ${validate_component(ScaleControl, "ScaleControl").$$render($$result, { position: standardControlsPosition }, {}, {})}` : ``} ${slots.default ? slots.default({
    map: $mapInstance,
    loadedImages: $loadedImages,
    allImagesLoaded
  }) : ``}` : ``} </div>`;
});
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actualCloseButton;
  let hoveringOnLayer;
  let $$slots = compute_slots(slots);
  let $map, $$unsubscribe_map;
  let $layerEvent, $$unsubscribe_layerEvent;
  let $popupTarget, $$unsubscribe_popupTarget;
  let $layer, $$unsubscribe_layer;
  let { closeButton = void 0 } = $$props;
  let { closeOnClickOutside = true } = $$props;
  let { closeOnClickInside = false } = $$props;
  let { closeOnMove = false } = $$props;
  let { openOn = "click" } = $$props;
  let { openIfTopMost = true } = $$props;
  let { focusAfterOpen = true } = $$props;
  let { anchor = void 0 } = $$props;
  let { offset = void 0 } = $$props;
  let { popupClass = void 0 } = $$props;
  let { maxWidth = void 0 } = $$props;
  let { lngLat = void 0 } = $$props;
  let { html = void 0 } = $$props;
  let { open = false } = $$props;
  const { map, popupTarget, layerEvent, layer, eventTopMost: eventTopMost2 } = mapContext$1();
  $$unsubscribe_map = subscribe(map, (value) => $map = value);
  $$unsubscribe_popupTarget = subscribe(popupTarget, (value) => $popupTarget = value);
  $$unsubscribe_layerEvent = subscribe(layerEvent, (value) => $layerEvent = value);
  $$unsubscribe_layer = subscribe(layer, (value) => $layer = value);
  const clickEvents = ["click", "dblclick", "contextmenu"];
  let popup;
  let hoveringOnPopup = false;
  let popupElement;
  function setPopupClickHandler() {
    if (!popup) {
      return;
    }
    let el = popup.getElement();
    if (!el || el === popupElement) {
      return;
    }
    popupElement = el;
    if (openOn === "hover") {
      popupElement.style.pointerEvents = "none";
    }
    popupElement.addEventListener(
      "mouseenter",
      () => {
        hoveringOnPopup = true;
      },
      { passive: true }
    );
    popupElement.addEventListener(
      "mouseleave",
      () => {
        hoveringOnPopup = false;
      },
      { passive: true }
    );
    popupElement.addEventListener(
      "click",
      () => {
        if (closeOnClickInside) {
          open = false;
        }
      },
      { passive: true }
    );
  }
  function skipHandlingEvent(e) {
    if (!openIfTopMost) {
      return false;
    }
    return !("marker" in e) && !isDeckGlMouseEvent(e) && eventTopMost2(e) !== $layer;
  }
  let features = null;
  function handleLayerClick(e) {
    if (e.type !== openOn) {
      return;
    }
    if (skipHandlingEvent(e)) {
      return;
    }
    if ("layerType" in e) {
      if (e.layerType === "deckgl") {
        lngLat = e.coordinate;
        features = e.object ? [e.object] : null;
      } else {
        lngLat = e.lngLat;
        features = e.features ?? [];
      }
    } else {
      lngLat = e.lngLat;
      features = e.features ?? [];
    }
    setTimeout(() => open = true);
  }
  onDestroy(() => {
    if ($map && popup?.isOpen()) {
      popup.remove();
    }
  });
  let popupEl;
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  if ($$props.closeOnClickOutside === void 0 && $$bindings.closeOnClickOutside && closeOnClickOutside !== void 0)
    $$bindings.closeOnClickOutside(closeOnClickOutside);
  if ($$props.closeOnClickInside === void 0 && $$bindings.closeOnClickInside && closeOnClickInside !== void 0)
    $$bindings.closeOnClickInside(closeOnClickInside);
  if ($$props.closeOnMove === void 0 && $$bindings.closeOnMove && closeOnMove !== void 0)
    $$bindings.closeOnMove(closeOnMove);
  if ($$props.openOn === void 0 && $$bindings.openOn && openOn !== void 0)
    $$bindings.openOn(openOn);
  if ($$props.openIfTopMost === void 0 && $$bindings.openIfTopMost && openIfTopMost !== void 0)
    $$bindings.openIfTopMost(openIfTopMost);
  if ($$props.focusAfterOpen === void 0 && $$bindings.focusAfterOpen && focusAfterOpen !== void 0)
    $$bindings.focusAfterOpen(focusAfterOpen);
  if ($$props.anchor === void 0 && $$bindings.anchor && anchor !== void 0)
    $$bindings.anchor(anchor);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.popupClass === void 0 && $$bindings.popupClass && popupClass !== void 0)
    $$bindings.popupClass(popupClass);
  if ($$props.maxWidth === void 0 && $$bindings.maxWidth && maxWidth !== void 0)
    $$bindings.maxWidth(maxWidth);
  if ($$props.lngLat === void 0 && $$bindings.lngLat && lngLat !== void 0)
    $$bindings.lngLat(lngLat);
  if ($$props.html === void 0 && $$bindings.html && html !== void 0)
    $$bindings.html(html);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  actualCloseButton = closeButton ?? (!closeOnClickOutside && !closeOnClickInside);
  {
    if (!popup) {
      popup = new maplibregl.Popup({
        closeButton: actualCloseButton,
        // We handle this ourselves to improve behavior on mobile.
        closeOnClick: false,
        closeOnMove,
        focusAfterOpen,
        maxWidth,
        className: popupClass,
        anchor,
        offset
      });
      popupElement = popup.getElement();
      popup.on("open", () => {
        open = true;
        setPopupClickHandler();
      });
      popup.on("close", (e) => {
        open = false;
      });
    }
  }
  {
    if (popup && $popupTarget instanceof maplibregl.Marker) {
      if (openOn === "click") {
        $popupTarget.setPopup(popup);
      } else if ($popupTarget.getPopup() === popup) {
        $popupTarget.setPopup(void 0);
      }
    }
  }
  {
    if (clickEvents.includes(openOn) && $layerEvent?.type === openOn) {
      handleLayerClick($layerEvent);
      set_store_value(layerEvent, $layerEvent = null, $layerEvent);
    }
  }
  hoveringOnLayer = openOn === "hover" && ($layerEvent?.type === "mousemove" || $layerEvent?.type === "mouseenter");
  {
    if (openOn === "hover" && layerEvent) {
      if (hoveringOnLayer && $layerEvent) {
        if ($layerEvent.layerType === "deckgl") {
          lngLat = $layerEvent.coordinate;
          features = $layerEvent.object ? [$layerEvent.object] : null;
        } else {
          lngLat = $layerEvent.lngLat;
          features = $layerEvent.features ?? [];
        }
      }
      open = (hoveringOnLayer || hoveringOnPopup) ?? false;
    }
  }
  {
    if (html) {
      popup.setHTML(html);
    }
  }
  {
    if (lngLat)
      popup.setLngLat(lngLat);
  }
  {
    if ($map) {
      let isOpen = popup.isOpen();
      if (open && !isOpen) {
        popup.addTo($map);
      } else if (!open && isOpen) {
        popup.remove();
      }
    }
  }
  $$unsubscribe_map();
  $$unsubscribe_layerEvent();
  $$unsubscribe_popupTarget();
  $$unsubscribe_layer();
  return `${$$slots.default ? `<div${add_attribute("this", popupEl, 0)}>${features || $popupTarget instanceof maplibregl.Marker ? `${slots.default ? slots.default({
    features,
    data: features?.[0],
    map: $map,
    close: () => open = false
  }) : ``}` : ``}</div>` : ``}`;
});
const MAP_CONTEXT_KEY = Symbol.for("svelte-maplibre");
function mapContext() {
  return getContext(MAP_CONTEXT_KEY);
}
const LocateControl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $map, $$unsubscribe_map;
  let { defaultStyling = true } = $$props;
  let { position = "top-right" } = $$props;
  let { class: classNames = void 0 } = $$props;
  let { lngLat } = $$props;
  const { map } = mapContext();
  $$unsubscribe_map = subscribe(map, (value) => $map = value);
  let el;
  let control = {
    onAdd() {
      return el;
    },
    onRemove() {
    }
  };
  let timer;
  const debounce = (lngLat2) => {
    clearTimeout(timer);
    timer = setTimeout(
      async () => {
        $map?.flyTo({ center: lngLat2 });
      },
      250
    );
  };
  onDestroy(() => {
    $map?.removeControl(control);
  });
  if ($$props.defaultStyling === void 0 && $$bindings.defaultStyling && defaultStyling !== void 0)
    $$bindings.defaultStyling(defaultStyling);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.class === void 0 && $$bindings.class && classNames !== void 0)
    $$bindings.class(classNames);
  if ($$props.lngLat === void 0 && $$bindings.lngLat && lngLat !== void 0)
    $$bindings.lngLat(lngLat);
  {
    if ($map && el) {
      $map.addControl(control, position);
    }
  }
  {
    {
      debounce(lngLat);
    }
  }
  $$unsubscribe_map();
  return `<div class="${[
    escape(classNames, true),
    (defaultStyling ? "maplibregl-ctrl" : "") + " " + (defaultStyling ? "maplibregl-ctrl-group" : "")
  ].join(" ").trim()}"${add_attribute("this", el, 0)}><button class="maplibregl-ctrl-geolocate" type="button" title="Find my location" aria-label="Find my location" data-svelte-h="svelte-19qxjw5"><span class="maplibregl-ctrl-icon" aria-hidden="true"></span></button></div>`;
});
const css = {
  code: ".maplibregl-canvas{border-radius:var(--radius)}",
  map: null
};
const Map$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let $$restProps = compute_rest_props($$props, ["lngLat"]);
  let $mode, $$unsubscribe_mode;
  $$unsubscribe_mode = subscribe(derivedMode, (value) => $mode = value);
  let { lngLat } = $$props;
  const staticLngLat = lngLat;
  if ($$props.lngLat === void 0 && $$bindings.lngLat && lngLat !== void 0)
    $$bindings.lngLat(lngLat);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    style = `${$mode === "dark" ? "https://api.maptiler.com/maps/49f63854-b0c2-414b-9b03-7db05ff33738/style.json?key=pCvzMcEFa2VIKsE1kbGn" : "https://api.maptiler.com/maps/507eef78-4030-433b-aecf-3cb65c91e1b5/style.json?key=pCvzMcEFa2VIKsE1kbGn"}`;
    $$rendered = ` ${validate_component(MapLibre, "MapLibre").$$render(
      $$result,
      {
        center: staticLngLat,
        zoom: 8,
        standardControls: false,
        attributionControl: false,
        style,
        class: $$restProps.class
      },
      {},
      {
        default: () => {
          return `${validate_component(NavigationControl, "NavigationControl").$$render($$result, { position: "top-left" }, {}, {})} ${validate_component(LocateControl, "LocateControl").$$render(
            $$result,
            { position: "top-left", lngLat },
            {
              lngLat: ($$value) => {
                lngLat = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(FullscreenControl, "FullscreenControl").$$render($$result, { position: "top-left" }, {}, {})} ${validate_component(ScaleControl, "ScaleControl").$$render($$result, {}, {}, {})} ${validate_component(DefaultMarker, "DefaultMarker").$$render(
            $$result,
            { draggable: true, lngLat },
            {
              lngLat: ($$value) => {
                lngLat = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(Popup, "Popup").$$render($$result, { offset: [0, -10] }, {}, {
                  default: () => {
                    return `<div class="text-lg font-bold text-black">${escape(lngLat)}</div>`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_mode();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lngLat = [110.44302165, -7.0597536];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="mb-4 flex items-center"><h1 class="text-xl font-semibold" data-svelte-h="svelte-wfgxf5">Lokasi</h1> ${validate_component(Mode_toggle, "ModeToggle").$$render($$result, {}, {}, {})}</div> ${validate_component(SearchLocation, "SearchLocation").$$render(
      $$result,
      {
        class: "relative mb-4 w-full lg:max-w-[50%] overflow-visible",
        lngLat
      },
      {
        lngLat: ($$value) => {
          lngLat = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex max-h-[720px] w-full gap-4">  ${validate_component(Map$1, "Map").$$render(
      $$result,
      {
        class: "min-h-[480px] w-full rounded-lg border shadow-md",
        lngLat
      },
      {
        lngLat: ($$value) => {
          lngLat = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
