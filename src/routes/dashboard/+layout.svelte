<script lang="ts">
	import { clickOutside } from 'svelte-use-click-outside';
	import { HamburgerMenu } from 'radix-icons-svelte';
	import { Button } from '$lib/components/ui/button';
	import Sidebar from '../(components)/sidebar.svelte';

	let isMobileOpen = false;
</script>

<main class="relative">
	<Button
		on:click={() => (isMobileOpen = true)}
		variant="ghost"
		class="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 sm:hidden"
	>
		<span class="sr-only">Open sidebar</span>
		<HamburgerMenu class="h-6 w-6" />
	</Button>

	<aside
		class="fixed left-0 top-0 z-40 h-screen w-64 max-w-[80%] -translate-x-full border-r transition-transform sm:translate-x-0"
		class:translate-x-0={isMobileOpen}
		use:clickOutside={() => (isMobileOpen = false)}
	>
		<Sidebar />
	</aside>

	<div
		class="p-4 sm:ml-64"
		class:opacity-25={isMobileOpen}
		class:pointer-events-none={isMobileOpen}
	>
		<slot />
	</div>
</main>
