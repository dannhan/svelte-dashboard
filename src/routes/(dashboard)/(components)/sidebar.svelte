<script script lang="ts">
	import { navigating, page } from '$app/stores';
	import type { LayoutData } from '../$types';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { logoutSchema } from '$lib/schema';

	import { ChevronDown } from 'svelte-radix';
	import { sidebarItems } from '$lib';
	import * as Popover from '$lib/components/ui/popover';
	import * as Command from '$lib/components/ui/command';
	import * as Form from '$lib/components/ui/form';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { LogOut, Spinner } from '$lib/icons';

	import SidebarProjectDialog from './sidebar-project-dialog.svelte';
	import SidebarProjectList from './sidebar-project-list.svelte';

	export let data: LayoutData;
	export let isMobileOpen: boolean;

	let value = '';
	let open = false;

	const form = superForm(data.logoutForm, { validators: zodClient(logoutSchema), delayMs: 250 });
	const { delayed, enhance } = form;

	$: params = $page.params.project;
</script>

<aside class={$$restProps.class} class:translate-x-0={isMobileOpen}>
	<nav class="space-y-2 py-6">
		<div class="relative mb-4 w-full px-2">
			<Popover.Root bind:open>
				<Popover.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						variant="outline"
						class="w-full items-center justify-between rounded-sm border-none px-4 capitalize text-foreground focus-visible:ring-2"
					>
						{params}
						<ChevronDown />
					</Button>
				</Popover.Trigger>

				<!-- Popover Content -->
				<Popover.Content class="w-60 rounded-lg bg-card p-0">
					<Command.Root shouldFilter={false} class="rounded-lg bg-card p-0 shadow-lg">
						<Command.Input bind:value placeholder="Cari Proyek..." class="h-10" />
						<Command.Separator alwaysRender={true} />
						<Command.Empty>No project found.</Command.Empty>
						<Command.Group class="max-h-[70vh] overflow-y-auto">
							<SidebarProjectList
								bind:value
								bind:open
								{params}
								projects={data.projects || []}
								deleteProjectForm={data.deleteProjectForm}
							/>

							<Command.Separator class="my-1" />

							{#if value === ''}
								<Command.Item class="flex h-8 bg-accent p-0">
									<SidebarProjectDialog
										{params}
										projectForm={data.projectForm}
										class="flex h-full flex-1 cursor-pointer items-center justify-center rounded-md p-0"
									/>
								</Command.Item>
							{/if}
						</Command.Group>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>
		</div>

		<ul class="space-y-1 px-2 font-medium">
			{#each sidebarItems as { Icon, label, href } (label)}
				<li>
					<Button
						on:click={() => (isMobileOpen = false)}
						{href}
						variant={$page.url.pathname.endsWith(href) ? 'default' : 'ghost'}
						class="flex w-full rounded-full px-6 focus-visible:ring-2"
					>
						<Icon class="h-5 w-5" />
						<span class="ms-4 flex flex-1 items-center truncate">{label}</span>
					</Button>
				</li>
			{/each}
		</ul>

		<div class="px-2">
			<Separator />
		</div>

		<div class="px-2">
			<form method="POST" action="/{params}?/logout" use:enhance>
				<Form.Button
					variant="ghost"
					class="flex w-full rounded-full px-6 focus-visible:ring-2"
					disabled={$delayed}
				>
					{#if $delayed || $navigating}
						<Spinner class="h-5 w-5 animate-spin" />
					{:else}
						<LogOut class="h-5 w-5" />
					{/if}
					<span class="ms-4 flex flex-1 items-center truncate">Log Out</span>
				</Form.Button>
			</form>
		</div>
	</nav>
</aside>
