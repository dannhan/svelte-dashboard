<script lang="ts">
	import { ModeToggle } from '$lib/components';

	export let data;
  const projects = data.projects || [];
</script>

<div class="mb-4 flex items-center">
	<h1 class="text-3xl font-semibold">Expremients</h1>
	<ModeToggle />
</div>

<ul>
	{#each projects as project}
		<li>{project.name}</li>
	{/each}
</ul>
