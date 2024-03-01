<!-- todo: implement fetching api, dropdown and dynamic routes -->
<script lang="ts">
	// USE THIS:
	import { navigating } from '$app/stores';

	// ...
	import { page } from '$app/stores';
	import Sidebar from './(components)/sidebar.svelte';
	import Header from './(components)/header.svelte';
	import { cn } from '$lib/utils';

	let isMobileOpen = false;
</script>

<Sidebar bind:isMobileOpen pathname={$page.url.pathname} />
<Header bind:isMobileOpen />
<main id="main-content" class="px-6 py-6 sm:ml-52 md:ml-56 lg:ml-60 lg:px-12 lg:py-10 xl:ml-64">
	<div
		class={cn(
			'invisible fixed inset-0 z-40 bg-background/80 opacity-0 backdrop-blur-sm transition-all duration-300',
			isMobileOpen && 'visible opacity-100'
		)}
	></div>

	<slot />
</main>
