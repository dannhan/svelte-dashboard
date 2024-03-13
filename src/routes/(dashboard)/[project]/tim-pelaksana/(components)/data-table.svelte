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
  import type { Data } from '../data';
  import DataTableStatus from './data-table-status.svelte';

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
    table.column({ accessor: 'id', header: 'No', id: 'no' }),
    table.column({ accessor: 'pekerjaan', header: 'Pekerjaan' }),
    table.column({ accessor: 'spk', header: 'SPK' }),
    table.column({ accessor: 'pelaksana', header: 'Pelaksana' }),
    table.column({
      accessor: 'status',
      header: 'Status',
      cell: ({ value }) => createRender(DataTableStatus, { status: value })
    }),
    table.column({ accessor: 'gambar', header: 'Gambar' }),
    table.column({
      accessor: ({ id }) => id,
      header: '',
      cell: ({ value }) => createRender(DataTableActions, { id: value }),
      plugins: {
        sort: {
          disable: true
        }
      }
    })
  ]);

  const tableModel = table.createViewModel(columns);
  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = tableModel;
</script>

<div class="relative overflow-hidden rounded-lg bg-card shadow-md">
  <DataTableToolbar {tableModel} />

  <Table.Root {...$tableAttrs} class="text-left">
    <Table.Header class="border-t bg-tertiary">
      {#each $headerRows as headerRow}
        <Subscribe rowAttrs={headerRow.attrs()}>
          <Table.Row>
            {#each headerRow.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
                <Table.Head {...attrs} class="px-4">
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
                <Table.Cell {...attrs} class="whitespace-nowrap px-4 py-3">
                  {#if cell.id === 'task'}
                    <Render of={cell.render()} />
                  {:else if cell.id === ''}
                    <div class="flex justify-end">
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

  <DataTablePagination {tableModel} />
</div>
