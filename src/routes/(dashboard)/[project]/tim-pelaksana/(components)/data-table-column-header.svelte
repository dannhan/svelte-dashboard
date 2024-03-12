<script lang="ts">
	import { ArrowDown, ArrowUp, CaretSort } from 'svelte-radix';
	import { Button } from '$lib/components/ui/button';

	export let props: {
		sort: {
			order: 'desc' | 'asc' | undefined;
			toggle: (event: Event) => void;
			clear: () => void;
			disabled: boolean;
		};
	};
</script>

{#if !props.sort.disabled}
	<div class="flex items-center">
		<Button
			variant="ghost"
			on:click={(e) => props.sort.toggle(e)}
			class="h-8 p-0 text-xs font-bold uppercase text-muted-foreground hover:bg-transparent data-[state=open]:bg-accent"
		>
			<slot />
			{#if props.sort.order === 'desc'}
				<ArrowDown class="ml-2 h-4 w-4" />
			{:else if props.sort.order === 'asc'}
				<ArrowUp class="ml-2 h-4 w-4" />
			{:else}
				<CaretSort class="ml-2 h-4 w-4" />
			{/if}
		</Button>
	</div>
{:else}
	<slot />
{/if}
