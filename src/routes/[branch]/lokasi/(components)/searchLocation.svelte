<script lang="ts">
	import type { LngLatLike } from 'svelte-maplibre';
	import * as Command from '$lib/components/ui/command';
	import { cn } from '$lib/utils';
	import LoadingSpinner from './loadingSpinner.svelte';
	import { MagnifyingGlass } from 'radix-icons-svelte';

	export let lngLat: LngLatLike;

	let timer: string | number | NodeJS.Timeout | undefined;
	// todo: add types for this
	let foundedCities: any[] = [];
	let value = '';
	let isFetching = false;
	let isShowingResult = false; // Used for showing nice ui, the value is set to true when data is retrieved despite the data being an empty array

	const debounce = (val: string) => {
		clearTimeout(timer);

		timer = setTimeout(async () => {
			isFetching = true;

			const apiUrl = `https://nominatim.openstreetmap.org/search?format=geojson&accept-language=id&countrycodes=id&limit=5&q=${val}`;
			const data = await fetch(apiUrl)
				.then((res) => res.json())
				.catch(() => console.log('An exception occurred'));
			foundedCities = data?.features;

			isFetching = false;
			isShowingResult = true;
		}, 500);
	};

	$: {
		isShowingResult = false;
		if (value.length > 1) {
			debounce(value);
		}
	}
</script>

<div class={$$restProps.class}>
	<Command.Root
		class={cn(
			'w-full rounded-lg border border-b-0 bg-card shadow',
			isShowingResult && 'rounded-lg focus-within:rounded-b-none'
		)}
		shouldFilter={false}
	>
		<Command.Input
			placeholder="Search location..."
			bind:value
			class="peer rounded-none"
			on:focus={() => (isShowingResult = foundedCities.length > 0 && value.length > 1)}
		/>

		{#if isFetching}
			<LoadingSpinner class="absolute right-2 top-1/2 -translate-y-1/2" />
		{/if}

		{#if isShowingResult}
			<Command.List
				class="invisible absolute left-0 top-10 z-10 box-border w-full rounded-b-lg border bg-card shadow hover:visible peer-focus-within:visible"
			>
				<Command.Empty>Not Found.</Command.Empty>

				<Command.Group>
					{#each foundedCities as city}
						<Command.Item
							onSelect={() => {
								// todo
								lngLat = city.geometry.coordinates;
								isShowingResult = false;
							}}
						>
							<MagnifyingGlass class="mr-2 h-4 w-4 shrink-0 opacity-50" />
							<span class="truncate">{city.properties.display_name}</span>
							<span class="hidden">{city.properties.place_id}</span>
						</Command.Item>
					{/each}
				</Command.Group>
			</Command.List>
		{/if}
	</Command.Root>
</div>
