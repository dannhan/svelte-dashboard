<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Hamburger } from '$lib/icons';
	import { ModeToggle } from '$lib/components';

	export let isMobileOpen: boolean;
</script>

<!-- todo: make this used when the screen is large -->
<header class={$$restProps.class}>
	<Button
		on:click={() => (isMobileOpen = true)}
		variant="ghost"
		class="inline-flex items-center rounded-lg text-sm h-fit py-2"
	>
		<Hamburger class="h-5 w-5" />
		<span class="ms-3">Menu</span>
	</Button>

	<ModeToggle variant="ghost" class="ml-auto inline-flex items-center rounded-lg py-2" />
</header>
