<script script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';

	import { cn } from '$lib/utils';
	import { Check } from 'radix-icons-svelte';
	import { Trash } from '$lib/icons';

	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { CommandItem } from '$lib/components/ui/command';
	import { Button } from '$lib/components/ui/button';

	export let projects: string[];
	export let formattedPathname: string;
	export let open: boolean;

	export let value = '';
	let isDeleting = true;

	async function removeProject(event: Event) {
		const formEl = event.target as HTMLFormElement;
		const data = new FormData(formEl);

		await fetch(formEl.action, {
			method: 'DELETE',
			body: data
		});

		invalidateAll();
	}
</script>

{#each projects as project}
	{#if project.startsWith(value.toLowerCase())}
		<CommandItem
			class="flex h-10 p-0 capitalize"
			value={project}
			onSelect={(value) => {
				if (isDeleting) {
					return;
				}

				isDeleting = true;
				goto(`/${value}/identitas-proyek`);
				open = false;
			}}
		>
			<button
				class="flex h-full flex-1 cursor-default items-center pl-2 text-left capitalize"
				on:click={() => (isDeleting = false)}
			>
				<Check
					class={cn(
						'mr-2 h-4 w-4',
						formattedPathname !== project.toLowerCase() && 'text-transparent'
					)}
				/>
				<span class="flex-1 truncate">{project}</span>
			</button>

			<AlertDialog.Root>
				<AlertDialog.Trigger asChild let:builder>
					<Button
						variant="ghost"
						size="sm"
						type="submit"
						class="hover:bg-transparent hover:text-destructive"
						builders={[builder]}
					>
						<Trash class="h-3.5 w-3.5" />
					</Button>
				</AlertDialog.Trigger>

        <!-- todo: change this to indonesian -->
				<AlertDialog.Content class="bg-card">
					<AlertDialog.Header>
						<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
						<AlertDialog.Description>
							This action cannot be undone. This will permanently delete the project.
						</AlertDialog.Description>
					</AlertDialog.Header>
					<AlertDialog.Footer>
						<AlertDialog.Cancel class="bg-transparent">Cancel</AlertDialog.Cancel>
						<form method="POST" action="/api/projects/" on:submit|preventDefault={removeProject}>
							<input type="hidden" name="project" value={project} />
							<AlertDialog.Action
								type="submit"
								class="w-full bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
								>Continue</AlertDialog.Action
							>
						</form>
					</AlertDialog.Footer>
				</AlertDialog.Content>
			</AlertDialog.Root>
		</CommandItem>
	{/if}
{/each}
