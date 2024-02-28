<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Hamburger } from '$lib/icons';
  import ModeToggle from '../../(components)/mode-toggle.svelte';

  export let isMobileOpen: boolean;
</script>

<header class="sticky top-0 z-40 flex items-center border-b px-4 py-2 backdrop-blur-sm sm:hidden">
	<Button
		on:click={() => (isMobileOpen = true)}
		variant="ghost"
		class="inline-flex items-center rounded-lg p-2 text-sm sm:hidden"
	>
		<Hamburger class="h-6 w-6" />
		<span class="ms-3">Menu</span>
	</Button>

	<ModeToggle variant="ghost" class="ml-auto inline-flex items-center rounded-lg p-2" />
</header>

