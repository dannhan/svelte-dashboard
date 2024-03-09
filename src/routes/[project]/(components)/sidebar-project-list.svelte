<script lang="ts">
	import { goto, invalidate, invalidateAll } from '$app/navigation';

	import { cn } from '$lib/utils';
	import { Check } from 'radix-icons-svelte';
	import { Trash } from '$lib/icons';
	import { CommandItem } from '$lib/components/ui/command';
	import { Button } from '$lib/components/ui/button';

	export let projects: string[];
	export let formattedPathname: string;
	export let open: boolean;

	let value = '';
	let isDeleting = false;

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
			onSelect={(value) => {
				if (isDeleting) {
					isDeleting = false;
					return;
				}

				open = false;
				goto(`/${value}/identitas-proyek`);
			}}
		>
			<span class="flex h-full flex-1 cursor-default items-center pl-2">
				<Check class={cn('mr-2 h-4 w-4', formattedPathname !== project.toLowerCase() && 'text-transparent')} />
				<span class="flex-1 truncate">{project}</span>
			</span>

			<!-- todo -->
			<form on:submit|preventDefault={removeProject} method="POST" action="/api/projects/">
				<input type="hidden" name="project" value={project} />
				<Button
					variant="ghost"
					size="sm"
					class="hover:bg-transparent hover:text-destructive"
					type="submit"
					on:click={async () => (isDeleting = true)}
				>
					<Trash class="h-3.5 w-3.5" />
				</Button>
			</form>
		</CommandItem>
	{/if}
{/each}
