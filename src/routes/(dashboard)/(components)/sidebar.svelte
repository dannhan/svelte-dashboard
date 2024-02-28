<script script lang="ts">
	import { clickOutside } from 'svelte-use-click-outside';
	import { Exit } from 'radix-icons-svelte';
  import { sidebarItems } from '$lib';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
  import Dropdown from './dropdown.svelte';

	export let isMobileOpen: boolean;
	export let pathname: string;
</script>

<!-- todo -->
<!-- let pathname = $page.url.pathname; -->

<aside
	use:clickOutside={() => (isMobileOpen = false)}
	class="fixed left-0 top-0 z-50 h-screen w-64 max-w-[80%] -translate-x-full border-r bg-card transition-transform duration-500 sm:w-52 sm:translate-x-0 md:w-56 lg:w-60 xl:w-64"
	class:translate-x-0={isMobileOpen}
>
	<nav class="space-y-2 py-10">
    <Dropdown />

		<ul class="space-y-2 px-4 font-medium">
			{#each sidebarItems as { Icon, label, href } (label)}
				<li>
					<Button
						{href}
            on:click={() => (isMobileOpen = false)}
						variant={href === pathname ? 'default' : 'ghost'}
						class="w-full rounded-2xl focus-visible:ring-2"
					>
						<Icon class="h-5 w-5" />
						<span class="ms-4 flex-1 truncate">{label}</span>
					</Button>
				</li>
			{/each}
		</ul>

		<Separator />

		<div class="px-4">
			<Button href="/" variant="ghost" class="w-full rounded-2xl focus-visible:ring-2">
				<Exit class="h-5 w-5" />
				<span class="ms-4 flex-1 truncate">Log Out</span>
			</Button>
		</div>
	</nav>
</aside>
