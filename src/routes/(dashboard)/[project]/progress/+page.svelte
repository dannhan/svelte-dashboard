<script lang="ts">
  import { page } from '$app/stores';
  import { ModeToggle } from '$lib/components';
  import { error } from '@sveltejs/kit';
  import DataTable from './(components)/data-table.svelte';
  // import { data } from './data';

  export let data;
  const params = $page.params.project;
  const project = data.projects?.find((project) => project.name === params);

  if (!project) throw error(404);
</script>

<div class="mb-4 flex items-end">
  <h1 class="text-xl font-semibold">Progress Proyek</h1>
  <ModeToggle />
</div>

<DataTable data={project.progress} />
