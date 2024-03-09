<script lang="ts">
	import type { LngLatLike } from 'svelte-maplibre';
	import { Card } from '$lib/components/ui/card';

	const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
	const API_KEY = 'fa22f817fbc1414430baa5404c8cc8ed';

	export let lngLat: LngLatLike = [110.44302165, -7.0597536];
	let data: any;
	let error: any;

	const fetchWeatherData = async (lngLat: LngLatLike) => {
		try {
			let [lng, lat] = lngLat as [number, number];
			let url = `${API_URL}?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
			const res = await fetch(url);
			data = await res.json();
		} catch (error: any) {
			error = error;
		}
	};

	$: {
		fetchWeatherData(lngLat);
	}
</script>

<Card class={$$restProps.class}>
	{#if error}
		<pre>{error.message}</pre>
	{:else if data}
		<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
		<div class="flex justify-between">
			<div class="flex flex-row items-center gap-1">
				<img
					src={`/weather-icons/${data.weather[0].icon}@2x.png`}
					alt="Weather Icon"
					height="80"
					width="80"
					class="-ms-2 rounded-lg"
					style="aspectRatio: 64/64; objectFit: cover;"
				/>
				<div class="flex flex-row gap-1">
					<h2 class="text-5xl font-medium">
						{Math.floor(data.main.temp)}
					</h2>
					<span class="text-xl">°C</span>
				</div>
				<ul class="flex flex-col gap-1 pl-1 pt-1 text-xs text-muted-foreground">
					<li class="leading-none">Feels Like: {data.main.feels_like}%</li>
					<li class="leading-none">Humidity: {data.main.humidity}%</li>
					<li class="leading-none">Wind: {data.wind.speed}m/s</li>
				</ul>
			</div>

			<div class="flex flex-col gap-2 pt-5 text-right">
				<h1 class="text-xl leading-none">Weather</h1>
				<h2 class="text-xl capitalize leading-none text-muted-foreground">
					{data.weather[0].description}
				</h2>
			</div>
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
</Card>
