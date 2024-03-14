<script lang="ts">
  import { ModeToggle } from '$lib/components';
  import DataTable from './(components)/data-table.svelte';
  import { data, type Data } from './data';
</script>

<div class="mb-4 flex items-center">
  <h1 class="text-xl font-semibold">Identitas Proyek</h1>
  <ModeToggle />
</div>

<!-- todo: change the variable name -->
<DataTable {data} />
