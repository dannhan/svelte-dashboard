<script lang="ts">
	import type { Writable } from 'svelte/store';
	import type { TableViewModel } from 'svelte-headless-table';
	import { MagnifyingGlass, ChevronDown } from 'radix-icons-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Filter, Printer } from '$lib/icons';
	import DataTablePrint from './data-table-print.svelte';

	import type { Data } from '../data';
	import { data } from '../data';

	export let tableModel: TableViewModel<Data>;

	const { pluginStates, flatColumns } = tableModel;
	const { hiddenColumnIds } = pluginStates.hide;
	const { filterValue }: { filterValue: Writable<string> } = pluginStates.filter;

	const ids = flatColumns.map((col: { id: string }) => col.id);

	const hidableCols = ['spk', 'pelaksana', 'status'];

	let hideForId = Object.fromEntries(ids.map((id: string) => [id, true]));

	$: $hiddenColumnIds = Object.entries(hideForId)
		.filter(([, hide]) => !hide)
		.map(([id]) => id);
</script>

<div
	class="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0"
>
	<div class="w-full md:w-1/2">
		<form class="flex items-center">
			<label for="simple-search" class="sr-only">Search</label>
			<div class="relative w-full">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<MagnifyingGlass class="h-5 w-5 text-muted-foreground" />
				</div>
				<Input
					type="text"
					id="simple-search"
					class="bg-muted pl-10 text-sm"
					placeholder="Search"
					required
					bind:value={$filterValue}
				/>
			</div>
		</form>
	</div>
	<div
		class="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0"
	>
		<div class="flex w-full items-center space-x-3 md:w-auto">
			<Button
				size="lg"
				class="w-full px-4 md:w-auto"
				type="button"
				on:click={() => {
          console.log(data)
					window.print();
				}}
			>
        <Printer class="-ml-0.5 mr-2 h-4 w-4" />
        Print Data
			</Button>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button
						size="lg"
						variant="outline"
						class="w-full bg-transparent px-4 text-muted-foreground md:w-auto"
						type="button"
						builders={[builder]}
					>
						<Filter class="mr-2 h-4 w-4 text-gray-400" />
						Filter
						<ChevronDown class="-mr-1 ml-1.5 h-5 w-5" />
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Label>Toggle columns</DropdownMenu.Label>
					<DropdownMenu.Separator />
					{#each flatColumns as col}
						{#if hidableCols.includes(col.id)}
							<DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
								{col.header}
							</DropdownMenu.CheckboxItem>
						{/if}
					{/each}
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</div>

<div class="fixed left-0 top-0 invisible w-full p-6 print:visible" id="section-to-print">
	<DataTablePrint {data} />
</div>

<style>
	@page {
		size: auto;
		margin: 0mm;
	}
	@media print {
		:global(body) {
			visibility: hidden;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}
	}
</style>
