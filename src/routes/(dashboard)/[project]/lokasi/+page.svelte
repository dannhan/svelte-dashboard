<script lang="ts">
  import type { LngLatLike } from 'svelte-maplibre';
  import { ModeToggle } from '$lib/components';
  import SearchLocation from './(components)/searchLocation.svelte';
  import Map from './(components)/map.svelte';
  // import Weather from './(components)/weather.svelte';

  let lngLat: LngLatLike = [109.44302165, -7.0597536];
</script>

<div class="mb-4 flex items-end">
  <h1 class="text-xl font-semibold">Lokasi</h1>
  <ModeToggle />
</div>

<SearchLocation bind:lngLat class="relative mb-4 w-full overflow-visible lg:max-w-[50%]" />
<div class="flex max-h-[720px] w-full gap-4">
  <!-- todo: create ui for this -->
  <!-- <Weather bind:lngLat class="hidden w-1/2 overflow-auto border-none p-4" /> -->

  <Map bind:lngLat class="min-h-[480px] w-full rounded-lg border shadow-md" />
</div>
