<script>
	import { Button } from '$lib/components/ui/button';
	export let pagePluginState;
	const { hasNextPage, hasPreviousPage, pageIndex } = pagePluginState;
</script>

<div
	class="flex flex-col items-start justify-end gap-4 space-y-3 border-t p-4 md:flex-row md:items-center md:space-y-0"
>
	<Button
		variant="outline"
		size="sm"
		on:click={() => ($pageIndex = $pageIndex - 1)}
		disabled={!$hasPreviousPage}>Previous</Button
	>
	<Button
		variant="outline"
		size="sm"
		disabled={!$hasNextPage}
		on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
	>
</div>
