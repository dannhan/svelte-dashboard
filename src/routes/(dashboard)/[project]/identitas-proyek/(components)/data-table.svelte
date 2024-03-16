<script lang="ts">
  import { page } from '$app/stores';
  import { writable } from 'svelte/store';
  import {
    Render,
    Subscribe,
    createTable,
    createRender,
    type DataLabel
  } from 'svelte-headless-table';
  import { addSortBy, addTableFilter } from 'svelte-headless-table/plugins';
  import * as Table from '$lib/components/ui/table';
  import DataTableToolbar from './data-table-toolbar.svelte';
  import DataTableEditableCell from './data-table-editable-cell.svelte';
  import type { Data } from '../data';
  import Plus from '$lib/icons/plus.svelte';

  export let data: Data[];

  const tableData = writable(data);
  $: $tableData = data;

  const updateData = async (
    event: Event,
    rowDataId: string,
    columnId: string,
    newValue: string
  ) => {
    const index = parseInt(rowDataId);
    const key = columnId;
    const originalItem = $tableData[index];
    const newItem = { ...originalItem, [key]: newValue };

    if (newItem?.new && newItem.key === '' && newItem.value === '') {
      $tableData.pop();
      $tableData = $tableData;

      return;
    }

    delete newItem?.new;
    $tableData[index] = newItem;
    $tableData = $tableData;

    // server Handler
    const formEl = event.target as HTMLFormElement;

    if (JSON.stringify(originalItem) !== JSON.stringify(newItem)) {
      await fetch(formEl.action, {
        method: 'POST',
        credentials: 'same-origin', // include, *same-origin, omit
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ params: $page.params.project, originalItem, newItem })
      });
    }
  };

  const EditableCellLabel: DataLabel<any> = ({ column, row, value }) =>
    createRender(DataTableEditableCell, {
      row,
      column,
      value,
      onUpdateValue: updateData
    });

  const table = createTable(tableData, {
    filter: addTableFilter({
      fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLowerCase())
    }),
    sort: addSortBy({ initialSortKeys: [{ id: 'id', order: 'asc' }] })
  });

  const columns = table.createColumns([
    table.column({ accessor: 'id', header: '', cell: EditableCellLabel, id: 'id' }),
    table.column({ accessor: 'key', header: '', cell: EditableCellLabel, id: 'key' }),
    table.column({ accessor: 'value', header: '', cell: EditableCellLabel, id: 'value' })
  ]);

  const tableModel = table.createViewModel(columns);
  const { pageRows, tableAttrs, tableBodyAttrs } = tableModel;
</script>

<div class="relative mx-auto overflow-hidden rounded-lg bg-card shadow-md">
  <DataTableToolbar
    {tableModel}
    data={$tableData}
    class="flex flex-col items-center justify-between space-y-3 rounded-t-lg p-4 md:flex-row md:space-x-4 md:space-y-0"
  />

  <Table.Root {...$tableAttrs} class="border-collapse text-left">
    <Table.Body {...$tableBodyAttrs}>
      {#each $pageRows as row (row.id)}
        <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
          <Table.Row {...rowAttrs}>
            {#each row.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs>
                {#if cell.id === 'id'}
                  <Table.Cell {...attrs} class="w-10 whitespace-nowrap border border-l-0 px-0 py-0">
                    <Render of={cell.render()} />
                  </Table.Cell>
                {:else}
                  <Table.Cell {...attrs} class="whitespace-nowrap border border-r-0 px-2 py-0">
                    <Render of={cell.render()} />
                  </Table.Cell>
                {/if}
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}

      <Table.Row>
        <Table.Cell class="span col-span-3 whitespace-nowrap border-y p-0" colspan={3}>
          <button
            class="flex w-full cursor-pointer gap-2 px-4 py-3"
            on:click={async () => {
              const id = $tableData.length;
              $tableData.push({ id: id + 1, key: '', value: '', new: true });
              $tableData = $tableData;

              await new Promise((resolve) => setTimeout(resolve, 100));
              document.getElementById(id.toString())?.focus();
            }}
          >
            <Plus class="h-5 w-5 text-muted-foreground opacity-80" />
            <span class="text-muted-foreground">Add Data</span>
          </button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>

  <div class="p-3"></div>
</div>
