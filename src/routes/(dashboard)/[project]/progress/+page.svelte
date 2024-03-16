<script lang="ts">
  import { ModeToggle } from '$lib/components';
  import DataTable from './(components)/data-table.svelte';
  import { data } from './data';
</script>

<div class="mb-4 flex items-end">
  <h1 class="text-xl font-semibold">Progress Proyek</h1>
  <ModeToggle />
</div>

<DataTable data={data} />
