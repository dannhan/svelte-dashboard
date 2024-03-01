<!-- todo -->
<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Dialog from '$lib/components/ui/dialog';

	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Edit } from '$lib/icons';
	import { cn } from '$lib/utils';

	export let id: number;
</script>

<!-- <DropdownMenu.Root> -->
<!-- 	<DropdownMenu.Trigger asChild let:builder> -->
<!-- 		<Button -->
<!-- 			variant="ghost" -->
<!-- 			builders={[builder]} -->
<!-- 			size="icon" -->
<!-- 			class="relative h-auto w-fit py-0.5 hover:bg-transparent" -->
<!-- 		> -->
<!-- 			<span class="sr-only">Open menu</span> -->
<!-- 			<Edit class="h-[14px]" /> -->
<!-- 		</Button> -->
<!-- 	</DropdownMenu.Trigger> -->
<!-- 	<DropdownMenu.Content> -->
<!-- 		<DropdownMenu.Group> -->
<!-- 			<DropdownMenu.Label>Actions</DropdownMenu.Label> -->
<!-- 			<DropdownMenu.Item on:click={() => navigator.clipboard.writeText(id.toString())}> -->
<!-- 				Copy payment ID -->
<!-- 			</DropdownMenu.Item> -->
<!-- 		</DropdownMenu.Group> -->
<!-- 		<DropdownMenu.Separator /> -->
<!-- 		<DropdownMenu.Item>View customer</DropdownMenu.Item> -->
<!-- 		<DropdownMenu.Item>View payment details</DropdownMenu.Item> -->
<!-- 	</DropdownMenu.Content> -->
<!-- </DropdownMenu.Root> -->

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
		<div class="grid gap-4 py-4">
			<!-- <div class="grid grid-cols-4 items-center gap-4"> -->
			<!-- 	<Label for="name" class="text-right">Name</Label> -->
			<!-- 	<Input id="name" value="Pedro Duarte" class="col-span-3" /> -->
			<!-- </div> -->
			<!-- <div class="grid grid-cols-4 items-center gap-4"> -->
			<!-- 	<Label for="username" class="text-right">Username</Label> -->
			<!-- 	<Input id="username" value="@peduarte" class="col-span-3" /> -->
			<!-- </div> -->
		</div>
		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
