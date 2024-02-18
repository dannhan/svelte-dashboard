<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import { Moon, Sun } from 'radix-icons-svelte';
	import { Button } from '$lib/components/ui/button';

	type $$Props = {
		class?: string;
		variant?: 'default' | 'destructive' | 'ghost' | 'link' | 'outline' | 'secondary';
	};
	export let variant: $$Props['variant'] = 'default';
</script>

<Button on:click={toggleMode} {variant} class={$$restProps.class}>
	<Sun
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
