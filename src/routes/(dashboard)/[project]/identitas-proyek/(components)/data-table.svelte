<script lang="ts">
  import { readable } from 'svelte/store';
  import { Render, Subscribe, createTable } from 'svelte-headless-table';
  import {
    addColumnFilters,
    addHiddenColumns,
    addPagination,
    addSortBy,
    addTableFilter
  } from 'svelte-headless-table/plugins';
  import * as Table from '$lib/components/ui/table';
  import DataTablePagination from './data-table-pagination.svelte';
  import DataTableToolbar from './data-table-toolbar.svelte';
  import type { Data } from '../data';

  export let data: Data[];

  const table = createTable(readable(data), {
    filter: addTableFilter({
      fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLowerCase())
    }),
    sort: addSortBy({ toggleOrder: ['asc', 'desc'] }),
    // todo: set this to localStorage
    page: addPagination({ initialPageSize: 9 }),
    colFilter: addColumnFilters(),
    hide: addHiddenColumns()
  });

  const columns = table.createColumns([
    table.column({ accessor: 'id', header: '', id: 'no' }),
    table.column({ accessor: 'key', header: '', id: 'key' }),
    table.column({ accessor: 'value', header: '', id: 'value' })
  ]);

  const tableModel = table.createViewModel(columns);
  const { pageRows, tableAttrs, tableBodyAttrs } = tableModel;
</script>

<div class="relative overflow-hidden rounded rounded-b-md bg-card shadow-md">
  <DataTableToolbar
    {tableModel}
    class="flex flex-col items-center justify-between space-y-3 rounded-t-lg border border-b-0 p-4 md:flex-row md:space-x-4 md:space-y-0"
  />

  <Table.Root {...$tableAttrs} class="border-collapse border text-left">
    <Table.Body {...$tableBodyAttrs}>
      {#each $pageRows as row (row.id)}
        <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
          <Table.Row {...rowAttrs}>
            {#each row.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs>
                {#if cell.id === 'no'}
                  <Table.Cell {...attrs} class="w-10 whitespace-nowrap border px-4 py-3">
                    <Render of={cell.render()} />
                  </Table.Cell>
                {:else}
                  <Table.Cell {...attrs} class="whitespace-nowrap border px-4 py-3">
                    <Render of={cell.render()} />
                  </Table.Cell>
                {/if}
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Body>
  </Table.Root>

  <DataTablePagination
    {tableModel}
    class="flex flex-col items-center justify-between gap-4 rounded-b-lg border border-t-0 p-4 min-[420px]:flex-row"
  />
</div>
