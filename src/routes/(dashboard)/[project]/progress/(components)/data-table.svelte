<script lang="ts">
  import { writable } from 'svelte/store';
  import * as Table from '$lib/components/ui/table';
  import type { Data } from '../data';
  import { Plus } from '$lib/components/icons';
  import DataTableEditableHeader from './data-table-editable-header.svelte';
  import DataTableBodyRow from './data-table-body-row.svelte';

  export let data: Data[];

  const tableData = writable(data);
  $: $tableData = data.sort((a, b) => a.id - b.id);

  let lastFourData = $tableData.slice(Math.max($tableData.length - 4, 0));
  $: lastFourData = $tableData.slice(Math.max($tableData.length - 4, 0));
</script>

<div class="relative mx-auto overflow-hidden bg-card shadow-md">
  <Table.Root class="border-separate border-spacing-0 text-left">
    <Table.Header class="bg-muted">
      <Table.Head
        class="sticky left-0 top-0 border bg-muted p-3 font-bold uppercase text-black dark:text-white"
      >
        minggu ke
      </Table.Head>

      {#each lastFourData as row}
        <Table.Head
          class="border border-l-0 p-3 text-center font-bold uppercase text-black hover:bg-accent dark:text-white"
        >
          w{row.id}
          <DataTableEditableHeader />
        </Table.Head>
      {/each}

      <Table.Head class="min-w-5 max-w-[5%] whitespace-nowrap border-y p-0 py-3 hover:bg-accent">
        <button class="h-10 min-h-full w-full">
          <Plus class="mx-auto h-5 w-5 text-muted-foreground" />
        </button>
      </Table.Head>
    </Table.Header>

    <Table.Body>
      <DataTableBodyRow {lastFourData} {tableData} type="fisik" class="hover:bg-card" />
      <DataTableBodyRow type="biaya" {lastFourData} {tableData} class="hover:bg-card" />
    </Table.Body>
  </Table.Root>
</div>
