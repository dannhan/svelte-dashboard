<script lang="ts">
  import { writable } from 'svelte/store';
  import { createTable } from 'svelte-headless-table';
  import { data } from './data';

  import DataTable from '$lib/components/data-table/data-table.svelte';

  const table = createTable(writable(data));
  const columns = table.createColumns([
    table.column({ accessor: 'id', header: 'No', id: 'id' }),
    table.column({ accessor: 'key', header: 'Key', id: 'key' }),
    table.column({ accessor: 'value', header: 'Value', id: 'Value' })
  ]);
</script>

<DataTable {table} {columns} class="relative overflow-hidden rounded-lg bg-card shadow-md" />
