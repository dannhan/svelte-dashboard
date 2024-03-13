<script>
  import '@fontsource-variable/inter';
  import '../app.pcss';
  import { ModeWatcher } from 'mode-watcher';
  import { ProgressBar } from '@prgm/sveltekit-progress-bar';
  import TailwindIndicator from './tailwind-indicator.svelte';
</script>

<svelte:head>
  <title>Ria Busana</title>
  <meta name="description" content="Ria Busana Konstruksi" />
</svelte:head>

<ProgressBar class="text-blue-500" zIndex={99} />

<slot />

<ModeWatcher />
<TailwindIndicator />

<style>
  :global(body) {
    font-family: 'Inter Variable';
  }
</style>
