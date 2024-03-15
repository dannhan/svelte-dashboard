<script lang="ts">
  import type { Writable } from 'svelte/store';
  import type { TableViewModel } from 'svelte-headless-table';
  import { MagnifyingGlass } from 'svelte-radix';
  import { Plus } from '$lib/icons';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Printer } from '$lib/icons';

  import type { Data } from '../data';

  export let tableModel: TableViewModel<Data, any>;

  const { pluginStates, flatColumns } = tableModel;
  const { hiddenColumnIds } = pluginStates.hide;
  const { filterValue }: { filterValue: Writable<string> } = pluginStates.filter;

  const ids = flatColumns.map((col: { id: string }) => col.id);

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
          class="bg-tertiary pl-10 text-sm transition-none focus-visible:ring-2"
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
        variant="default"
        class="w-full items-center focus-visible:ring-2 md:w-auto"
        type="button"
        on:click={() => window.print()}
      >
        <Printer class="-ml-0.5 mr-2 h-4 w-4" />
        Print Data
      </Button>

      <!-- todo: implement add data page -->
      <Button
        variant="secondary"
        class="w-full items-center focus-visible:ring-2 md:w-auto"
        type="button"
        on:click={() => alert()}
      >
        <Plus class="-ml-1 mr-1.5 h-4 w-4" />
        Add Data
      </Button>
    </div>
  </div>
</div>

<div class="invisible fixed left-0 top-0 w-full p-6 print:visible" id="section-to-print">
  <!-- <DataTablePrint {data} /> -->
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
