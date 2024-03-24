<script lang="ts">
  import { setContext } from 'svelte';
  import { error } from '@sveltejs/kit';
  import { page } from '$app/stores';
  import { ModeToggle } from '$lib/components';
  import AssignmentForm from '$lib/components/forms/assignment-form.svelte';

  export let data;
  const params = $page.params.project;
  const project = data.projects?.find((project) => project.name === params);

  if (!project) throw error(404);

  setContext('postAssignmentForm', data.postAssignmentForm);
</script>

<div class="mb-4 flex items-end">
  <h1 class="text-xl font-semibold">Tim Pelaksana</h1>
  <ModeToggle />
</div>

<AssignmentForm
  id={(project.assignment?.length || 0) + 1}
  data={project.assignment[data.updateDataId - 1]}
/>
