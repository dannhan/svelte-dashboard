<script lang="ts">
  import { page } from '$app/stores';

  import { ModeToggle } from '$lib/components';
  import DataTable from './(components)/data-table.svelte';

  export let data;

  $: project = data.projects?.find((project) => project.name === $page.params.project);
  $: identity = project?.identity;
</script>

<div class="mb-4 flex items-end">
  <h1 class="text-xl font-semibold">Identitas Proyek</h1>
  <ModeToggle />
</div>

<DataTable data={identity || []} />
