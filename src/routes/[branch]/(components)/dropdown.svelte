<script lang="ts">
	import { page } from '$app/stores';
	import { ChevronDown, Check } from 'radix-icons-svelte';
	import { cn } from '$lib/utils';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Trash } from '$lib/icons';
	import { Plus } from '$lib/icons';

	export let branches: string[];

	let open = false;
	let isHovering = false;
	let value: string = '';

	$: formattedPathname = $page.url.pathname.split('/')[1].replace(/%20/g, ' ');
</script>

<div class={$$restProps.class}>
	<Popover.Root bind:open>
		<Popover.Trigger asChild let:builder>
			<Button
				builders={[builder]}
				variant="outline"
				class="w-full items-center justify-between rounded-sm border-none px-4 capitalize text-foreground focus-visible:ring-2"
				on:click={() => (isHovering = false)}
			>
				{formattedPathname}
				<ChevronDown />
			</Button>
		</Popover.Trigger>

		<Popover.Content class="w-60 bg-card p-0.5">
			<ul class="grid gap-0 overflow-hidden">
				<!-- todo: make sure every city is unique -->
				{#each branches as branch (branch)}
					<li
						class={cn(
							'inline-flex items-center justify-end rounded-md hover:bg-accent',
							branch === formattedPathname && !isHovering && 'bg-accent'
						)}
					>
						<Button
							href={`/${branch}/identitas-proyek`}
							variant="ghost"
							class="relative w-full items-center justify-start capitalize focus-visible:ring-0"
							on:mouseenter={() => (isHovering = true)}
							on:click={() => (open = false)}
						>
							{#if formattedPathname === branch}
								<Check class="absolute left-2" />
							{/if}

							<span class="absolute left-8">{branch}</span>
						</Button>

						<Button
							variant="ghost"
							size="sm"
							class="hover-red absolute right-1 flex items-center justify-center hover:bg-transparent hover:text-destructive"
							on:click={() => alert('Method not implemented')}
						>
							<Trash class="h-3.5 w-3.5" />
						</Button>
					</li>
				{/each}
			</ul>

      <!-- todo: ini bikin modal aja -->
			<div class="relative mt-2 inline-flex w-full items-center justify-between">
				<Input
					id="new-branch"
					class={cn(
						'peer absolute bottom-0 left-0 box-border h-8 w-[80%] items-center border-2 bg-tertiary opacity-0 outline-none transition-all',
						'focus:h-8 focus:border focus:border-ring focus:py-0 focus:opacity-100 focus-visible:ring-0',
						value.length > 0 && 'border opacity-100'
					)}
					bind:value
				/>
				<Button
					variant="secondary"
					class={cn(
						'absolute bottom-0 right-0 box-border h-8 w-[17.5%] items-center opacity-0 transition-all',
						'peer-focus:opacity-100',
						value.length > 0 && 'border opacity-100'
					)}
				>
					<Check class="h-8 w-8" />
				</Button>

				<Button
					variant="tertiary"
					size="sm"
					class={cn(
						'relative h-8 w-full items-center justify-center transition-all focus-visible:ring-0',
						'peer-focus:pointer-events-none peer-focus:opacity-0',
						value.length > 0 && 'opacity-0'
					)}
					on:click={() => document.getElementById('new-branch')?.focus()}
				>
					<Plus class="h-4 w-4" />
				</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
</div>
