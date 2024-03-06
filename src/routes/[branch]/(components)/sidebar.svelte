<script script lang="ts">
	import { page } from '$app/stores';
	import { clickOutside } from 'svelte-use-click-outside';
	import { sidebarItems } from '$lib';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { LogOut } from '$lib/icons';
	import Dropdown from './dropdown.svelte';

	export let isMobileOpen: boolean;
	export let branches: string[];
	// todo: what happened on edit page???
	const getLastItem = (pathname: string) => pathname.substring(pathname.lastIndexOf('/') + 1);
</script>

<aside
	use:clickOutside={() => (isMobileOpen = false)}
	class={$$restProps.class}
	class:translate-x-0={isMobileOpen}
>
	<nav class="space-y-2 py-6">
		<Dropdown {branches} class="relative mb-4 w-full px-2" />

		<ul class="space-y-1 px-2 font-medium">
			{#each sidebarItems as { Icon, label, href } (label)}
				<li>
					<Button
						{href}
						on:click={() => (isMobileOpen = false)}
						variant={href === getLastItem($page.url.pathname) ? 'default' : 'ghost'}
						class="w-full rounded-2xl px-6 focus-visible:ring-2"
					>
						<Icon class="h-5 w-5" />
						<span class="ms-4 flex-1 truncate">{label}</span>
					</Button>
				</li>
			{/each}
		</ul>

		<div class="px-2">
			<Separator />
		</div>

		<div class="px-2">
			<Button href="/" variant="ghost" class="w-full rounded-2xl px-6 focus-visible:ring-2">
				<LogOut class="h-5 w-5" />
				<span class="ms-4 flex-1 truncate">Log Out</span>
			</Button>
		</div>
	</nav>
</aside>
