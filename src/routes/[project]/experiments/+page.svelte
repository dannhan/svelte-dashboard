<script lang="ts">
	import { ModeToggle } from '$lib/components';

	export let data;
</script>

<div class="mb-4 flex items-center">
	<h1 class="text-3xl font-semibold">Expremients</h1>
	<ModeToggle variant="outline" class="ml-auto hidden items-center rounded-lg p-2 md:inline-flex" />
</div>

<ul>
	{#each data.projects as project}
		<li>{project}</li>
	{/each}
</ul>
