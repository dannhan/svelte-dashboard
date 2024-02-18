<script>
	import '@fontsource-variable/roboto-flex';
	import '@fontsource-variable/inter';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import TailwindIndicator from './(components)/tailwind-indicator.svelte';
</script>

<!-- todo: change the title and description -->
<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="Dashboard" />
</svelte:head>
<!-- todo: change the title and description -->

<slot />
<ModeWatcher />
<TailwindIndicator />

<style>
	:global(body) {
		/* font-family: 'Roboto Flex Variable'; */
		font-family: 'Inter Variable';
	}
</style>
