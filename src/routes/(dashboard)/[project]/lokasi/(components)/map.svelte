<script lang="ts">
	import {
		type LngLatLike,
		MapLibre,
		DefaultMarker,
		NavigationControl,
		FullscreenControl,
		ScaleControl,
		Popup
	} from 'svelte-maplibre';
	import { mode } from 'mode-watcher';
	import LocateControl from './locateControl.svelte';

	export let lngLat: LngLatLike;
	const staticLngLat = lngLat;

	$: style = `${
		$mode === 'dark'
			? 'https://api.maptiler.com/maps/49f63854-b0c2-414b-9b03-7db05ff33738/style.json?key=pCvzMcEFa2VIKsE1kbGn'
			: 'https://api.maptiler.com/maps/507eef78-4030-433b-aecf-3cb65c91e1b5/style.json?key=pCvzMcEFa2VIKsE1kbGn'
	}`;
</script>

<!-- todo: add loading state -->
<MapLibre
	center={staticLngLat}
	zoom={8}
	standardControls={false}
	attributionControl={false}
	{style}
	class={$$restProps.class}
>
	<NavigationControl position="top-left" />
	<LocateControl position="top-left" bind:lngLat />
	<FullscreenControl position="top-left" />
	<ScaleControl />

	<DefaultMarker bind:lngLat draggable>
		<Popup offset={[0, -10]}>
			<div class="text-lg font-bold text-black">{lngLat}</div>
		</Popup>
	</DefaultMarker>
</MapLibre>

<style>
	:global(.maplibregl-canvas) {
		border-radius: var(--radius);
	}
</style>
