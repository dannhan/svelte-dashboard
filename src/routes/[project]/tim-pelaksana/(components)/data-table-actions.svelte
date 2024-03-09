<!-- todo: implement edit data page -->
<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';

	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Edit } from '$lib/icons';
	import { cn } from '$lib/utils';
</script>

<Dialog.Root>
	<Dialog.Trigger
		class={cn(
			buttonVariants({ variant: 'ghost' }),
			'relative h-auto w-fit p-0.5 hover:bg-transparent'
		)}
	>
		<span class="sr-only">Open menu</span>
		<Edit class="h-[14px]" />
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Edit Data</Dialog.Title>
		</Dialog.Header>
		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
