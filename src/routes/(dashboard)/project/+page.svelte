<script lang="ts">
	import ModeToggle from '../../(components)/mode-toggle.svelte';
	import DataTable from './(components)/data-table.svelte';
	import { data } from './data';
</script>

<div class="mb-4 flex items-center">
	<h1 class="text-xl font-semibold">Identitas Project</h1>
	<ModeToggle variant="ghost" class="ml-auto hidden items-center rounded-lg p-2 sm:inline-flex" />
</div>

<DataTable {data} />
