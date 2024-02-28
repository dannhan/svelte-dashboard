<!-- todo: implement fetching api, dropdown and dynamic routes -->
<script lang="ts">
	import { page } from '$app/stores';
	import Sidebar from './(components)/sidebar.svelte';
	import Header from './(components)/header.svelte';

	let isMobileOpen = false;
</script>

<Sidebar bind:isMobileOpen pathname={$page.url.pathname} />
<Header bind:isMobileOpen />
<main
	id="main-content"
	class="px-6 py-6 sm:ml-52 md:ml-56 lg:ml-60 lg:px-12 lg:py-10 xl:ml-64"
	class:pointer-events-none={isMobileOpen}
	class:opacity-50={isMobileOpen}
>
	<slot />
</main>
