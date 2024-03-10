<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import { Moon, Sun } from 'radix-icons-svelte';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	on:click={toggleMode}
	variant="outline"
	class={cn("ml-auto hidden items-center rounded-lg p-2 md:inline-flex", $$restProps.class)}
>
	<Sun
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
