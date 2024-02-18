<!-- todo: implement fetching api, dropdown and dynamic routes -->
<script lang="ts">
	import { HamburgerMenu } from 'radix-icons-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Info, Progress, Umbrella } from '$lib/icons';
	import Sidebar from '../(components)/sidebar.svelte';
	import ModeToggle from '../(components)/mode-toggle.svelte';

	let isMobileOpen = false;
	let data = [
		{
			Icon: Info,
			label: 'Identitas Project',
			href: '/dashboard'
		},
		{
			Icon: Progress,
			label: 'Progress',
			href: '/'
		},
		{
			Icon: Umbrella,
			label: 'Curah Hujan',
			href: '/'
		}
	];
</script>

<Sidebar bind:isMobileOpen {data} />

<div
	class="space-y-4 p-4 sm:ml-52 md:ml-56 lg:ml-60 xl:ml-64"
	class:pointer-events-none={isMobileOpen}
	class:opacity-50={isMobileOpen}
>
	<div class="flex items-center">
		<Button
			on:click={() => (isMobileOpen = true)}
			variant="outline"
			class="inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 sm:hidden"
		>
			<span class="sr-only">Open sidebar</span>
			<HamburgerMenu class="h-6 w-6" />
		</Button>

		<h1 class="ms-3 text-lg font-semibold sm:ms-0">Identitas Project</h1>

		<ModeToggle variant="outline" class="ml-auto inline-flex items-center rounded-lg p-2" />
	</div>

	<slot />
</div>
