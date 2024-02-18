<!-- todo: implement fetching api, dropdown and dynamic routes -->
<script lang="ts">
	import { HamburgerMenu } from 'radix-icons-svelte';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { Info, Progress, Umbrella, Flask } from '$lib/icons';
	import Sidebar from '../(components)/sidebar.svelte';
	import ModeToggle from '../(components)/mode-toggle.svelte';

	let isMobileOpen = false;
	let data = [
		{
			Icon: Info,
			label: 'Identitas Project',
			href: '/project'
		},
		{
			Icon: Progress,
			label: 'Progress',
			href: '/progress'
		},
		{
			Icon: Umbrella,
			label: 'Curah Hujan',
			href: '/rainfall'
		},
		{
			Icon: Flask,
			label: 'Experiments',
			href: '/experiments'
		}
	];
</script>

<Sidebar bind:isMobileOpen pathname={$page.url.pathname} {data} />

<main
	id="main-content"
	class="space-y-4 px-4 py-6 sm:ml-52 md:ml-56 lg:ml-60 lg:px-12 lg:py-10 xl:ml-64"
	class:pointer-events-none={isMobileOpen}
	class:opacity-50={isMobileOpen}
>
	<div class="flex items-center">
		<Button
			on:click={() => (isMobileOpen = true)}
			variant="ghost"
			class="inline-flex items-center rounded-lg p-2 sm:hidden"
		>
			<span class="sr-only">Open sidebar</span>
			<HamburgerMenu class="h-5 w-5" />
		</Button>
		<h1 class="ms-3 text-xl font-semibold sm:ms-0">
			{data.find((item) => item.href === $page.url.pathname)?.label}
		</h1>

		<ModeToggle variant="ghost" class="ml-auto inline-flex items-center rounded-lg p-2" />
	</div>

	<slot />
</main>
