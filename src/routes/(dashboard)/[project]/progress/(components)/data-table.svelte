<script lang="ts">
  import { writable } from 'svelte/store';
  import * as Table from '$lib/components/ui/table';
  import DataTableEditableCell from './data-table-editable-cell.svelte';
  import type { Data } from '../data';
  import Plus from '$lib/icons/plus.svelte';
  import DataTableEditableHeader from './data-table-editable-header.svelte';
  import DataTableBodyRow from './data-table-body-row.svelte';

  export let data: Data[];

  const tableData = writable(data);
  $: $tableData = data;

  let lastFourData = $tableData.slice(Math.max($tableData.length - 4, 0));
  $: lastFourData = $tableData.slice(Math.max($tableData.length - 4, 0));
</script>

<div class="relative mx-auto max-w-4xl overflow-hidden bg-card shadow-md">
  <Table.Root class="border-separate border-spacing-0 text-left">
    <Table.Header class="bg-muted">
      <Table.Head
        class="sticky left-0 top-0 border bg-muted px-2 py-4 font-bold uppercase text-black dark:text-white "
      >
        Minggu Ke
      </Table.Head>

      {#each lastFourData as row}
        <Table.Head class="border border-l-0 p-2 text-center font-bold text-black dark:text-white">
          W{row.id}
          <DataTableEditableHeader />
        </Table.Head>
      {/each}

      <Table.Head class="max-w-[5%] min-w-5 whitespace-nowrap border-y p-0">
        <button class="h-10 min-h-full w-full">
          <Plus class="mx-auto h-5 w-5 text-muted-foreground" />
        </button>
      </Table.Head>
    </Table.Header>


    <Table.Body>
      <DataTableBodyRow type="fisik" {lastFourData} {tableData} />
      <DataTableBodyRow type="biaya" {lastFourData} {tableData} />
    </Table.Body>
  </Table.Root>
</div>
