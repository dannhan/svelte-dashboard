<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
	import TailwindIndicator from './(components)/tailwind-indicator.svelte';
</script>

<svelte:head>
	<title>Ria Busana</title>
	<meta name="description" content="Ria Busana Login Page" />
</svelte:head>

<slot />
<ModeWatcher />
<TailwindIndicator />
