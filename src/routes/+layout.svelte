<script>
	import '@fontsource-variable/inter';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
  import { ProgressBar } from "@prgm/sveltekit-progress-bar";
	import TailwindIndicator from './(components)/tailwind-indicator.svelte';
</script>


<!-- todo: change the title and description -->
<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="Dashboard Svelte" />
</svelte:head>

<ProgressBar class="text-blue-500" zIndex={100} />

<slot />

<ModeWatcher />
<TailwindIndicator />

<style>
	:global(body) {
		font-family: 'Inter Variable';
	}
</style>
