<script lang="ts">
  import { error } from '@sveltejs/kit';
  import { page } from '$app/stores';
  import { ModeToggle } from '$lib/components';
  import DataTable from './(components)/data-table.svelte';

  export let data;
  const params = $page.params.project;
  const project = data.projects?.find((project) => project.name === params);

  if (!project) throw error(404);
</script>

<div class="mb-4 flex items-end">
  <h1 class="text-xl font-semibold">Tim Pelaksana</h1>
  <ModeToggle />
</div>

<!-- todo: change the variable name -->
<DataTable data={project.assignment || []} />
