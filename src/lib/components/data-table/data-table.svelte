<script lang="ts">
  import type { Column, Table } from 'svelte-headless-table';
  import type { AnyPlugins } from 'svelte-headless-table/plugins';
  import DataTableRoot from './data-table-root.svelte';

  type T = $$Generic
  export let table: Table<T, AnyPlugins>;
  export let columns: Column<T, AnyPlugins>[];
</script>

<div class={$$restProps.class}>
  <DataTableRoot {table} {columns} />
</div>
