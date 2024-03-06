<script lang="ts">
	import { ModeToggle } from '$lib/components';

	const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
	const API_KEY = 'fa22f817fbc1414430baa5404c8cc8ed';

	export let lngLat = [110.44302165, -7.0597536];
	let [lng, lat] = lngLat;
	let url: string;

	const fetchWeatherData = async () => {
		try {
			url = `${API_URL}?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
      const res = await fetch(url);
			const data = await res.json();
			return data;
		} catch (error: any) {
			return error;
		}
	};
</script>

<div class="mb-4 flex items-center">
	<h1 class="text-3xl font-semibold">Expremients</h1>
	<ModeToggle variant="outline" class="ml-auto hidden items-center rounded-lg p-2 md:inline-flex" />
</div>

{#await fetchWeatherData()}
	<p>Loading...</p>
{:then weather}
	<pre>{JSON.stringify(weather, null, 2)}</pre>
{:catch error}
	<p>{error.message}</p>
{/await}
