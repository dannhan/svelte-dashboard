<script lang="ts">
  import { TableRow, TableCell } from '$lib/components/ui/table';
  import DataTableEditableCell from './data-table-editable-cell.svelte';
  import type { Data } from '../data';
  import type { Writable } from 'svelte/store';

  export let type: 'fisik' | 'biaya';
  export let lastFourData: Data[];
  export let tableData: Writable<Data[]>;
</script>

<TableRow class={$$restProps.class}>
  <TableCell
    class="sticky left-0 top-0 whitespace-nowrap border border-t-0 bg-card px-3 py-0 uppercase"
  >
    progress {type}
  </TableCell>

  {#each lastFourData as row}
    <TableCell class="w-[10%] min-w-10 border border-l-0 border-t-0 px-1 py-0">
      <DataTableEditableCell id={row.id} {type} value={row[type]} bind:data={$tableData} />
    </TableCell>
  {/each}

  <TableCell class="w-[5%] min-w-8  whitespace-nowrap border-y py-6" />
</TableRow>
