<script lang="ts">
	import { readable } from 'svelte/store';
	import { Render, Subscribe, createRender, createTable } from 'svelte-headless-table';
	import {
		addColumnFilters,
		addHiddenColumns,
		addPagination,
		addSortBy,
		addTableFilter
	} from 'svelte-headless-table/plugins';
	import * as Table from '$lib/components/ui/table';
	import DataTableToolbar from './data-table-toolbar.svelte';
	import DataTableActions from './data-table-actions.svelte';
	import DataTablePagination from './data-table-pagination.svelte';
	import DataTableColumnHeader from './data-table-column-header.svelte';
	import DataTableTitleCell from './data-table-title-cell.svelte';

	type Data = {
		id: string;
		title: string;
		status: string;
		label: string;
		priority: string;
	};
	export let data: Data[];

	const table = createTable(readable(data), {
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLowerCase())
		}),
		sort: addSortBy({ toggleOrder: ['asc', 'desc'] }),
		page: addPagination(),
		colFilter: addColumnFilters(),
		hide: addHiddenColumns()
	});

	const columns = table.createColumns([
		table.column({ accessor: 'id', header: 'Task', id: 'task' }),
		table.column({
			accessor: 'title',
			header: 'Title',
			cell: ({ value }) => createRender(DataTableTitleCell, { value })
		}),
		table.column({ accessor: 'status', header: 'Status' }),
		table.column({ accessor: 'label', header: 'Label' }),
		table.column({ accessor: 'priority', header: 'Priority' }),
		table.column({
			accessor: ({ id }) => id,
			header: '',
			cell: ({ value }) => createRender(DataTableActions, { id: value })
		})
	]);

	const tableModel = table.createViewModel(columns);
	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } = tableModel;
</script>

<div class="relative overflow-hidden rounded-lg border bg-white shadow-md dark:bg-card">
	<DataTableToolbar {tableModel} />

	<Table.Root {...$tableAttrs}>
		<Table.Header class="bg-accent">
			{#each $headerRows as headerRow}
				<Subscribe rowAttrs={headerRow.attrs()}>
					<Table.Row>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
								<Table.Head {...attrs} class="px-4 py-0">
									<DataTableColumnHeader {props}>
										<Render of={cell.render()} />
									</DataTableColumnHeader>
								</Table.Head>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Header>

		<Table.Body {...$tableBodyAttrs}>
			{#each $pageRows as row (row.id)}
				<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
					<Table.Row {...rowAttrs}>
						{#each row.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<Table.Cell {...attrs} class="px-4 py-3">
									{#if cell.id === 'task'}
										<div class="w-[80px]">
											<Render of={cell.render()} />
										</div>
									{:else}
										<Render of={cell.render()} />
									{/if}
								</Table.Cell>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Body>
	</Table.Root>

	<DataTablePagination pagePluginState={pluginStates.page} />
</div>
