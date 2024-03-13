<script lang="ts">
  import type { LngLatLike } from 'svelte-maplibre';
  import { onDestroy } from 'svelte';
  import { mapContext } from '../context';

  export let defaultStyling = true;
  export let position: maplibregl.ControlPosition = 'top-right';
  let classNames: string | undefined = undefined;
  export { classNames as class };
  export let lngLat: LngLatLike;

  const { map } = mapContext();

  let el: HTMLDivElement;
  let control = {
    onAdd() {
      return el;
    },
    onRemove() {
      el?.parentNode?.removeChild(el);
    }
  };

  $: if ($map && el) {
    $map.addControl(control, position);
  }

  let timer: any;
  const debounce = (lngLat: LngLatLike) => {
    clearTimeout(timer);

    timer = setTimeout(async () => {
      $map?.flyTo({ center: lngLat });
    }, 250);
  };

  $: {
    // $map?.flyTo({ center: lngLat, zoom: 12 });
    // todo: make debounce as utils
    debounce(lngLat);
  }

  onDestroy(() => {
    $map?.removeControl(control);
  });
</script>

<div
  bind:this={el}
  class={classNames}
  class:maplibregl-ctrl={defaultStyling}
  class:maplibregl-ctrl-group={defaultStyling}
>
  <button
    class="maplibregl-ctrl-geolocate"
    type="button"
    title="Find my location"
    aria-label="Find my location"
    on:click={() => $map?.flyTo({ center: lngLat, zoom: 15 })}
  >
    <span class="maplibregl-ctrl-icon" aria-hidden="true"></span>
  </button>
</div>
