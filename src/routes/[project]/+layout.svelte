<script lang="ts">
	import { cn } from '$lib/utils';
	import Sidebar from './(components)//sidebar.svelte';
	import Header from './(components)/header.svelte';

	export let data;

	let projects: string[];
	let { projectForm, logoutForm } = data;
	let isMobileOpen = false;

	$: {
		projects = data.projects;
	}
</script>

<Sidebar
	{projectForm}
	{logoutForm}
	bind:projects
	bind:isMobileOpen
	class="fixed left-0 top-0 z-40 h-screen w-64 max-w-[80%] -translate-x-full border-r bg-navbar shadow-md transition-transform duration-300 dark:border-none md:translate-x-0"
/>
<Header
	bind:isMobileOpen
	class="sticky top-0 z-10 flex items-center px-4 py-1.5 shadow backdrop-blur md:hidden"
/>

<main id="main-content" class="px-6 py-6 md:ml-64">
	<button
		class={cn(
			'invisible fixed inset-0 z-30 block bg-background/80 opacity-0 backdrop-blur-sm transition-all duration-300',
			isMobileOpen && 'visible opacity-100'
		)}
		on:click={() => (isMobileOpen = false)}
	>
	</button>

	<slot />
</main>
