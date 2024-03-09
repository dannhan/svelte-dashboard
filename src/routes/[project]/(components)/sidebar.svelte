<script script lang="ts">
	import { page } from '$app/stores';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { logoutSchema, type LogoutSchema, type ProjectSchema } from '$lib/schema';

	import { ChevronDown } from 'radix-icons-svelte';
	import { LogOut, Spinner } from '$lib/icons';
	import { sidebarItems } from '$lib';
	import * as Popover from '$lib/components/ui/popover';
	import * as Command from '$lib/components/ui/command';
	import * as Form from '$lib/components/ui/form';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';

	import SidebarProjectDialog from './sidebar-project-dialog.svelte';
	import SidebarProjectList from './sidebar-project-list.svelte';

	export let isMobileOpen: boolean;
	export let projects: string[];
	export let projectForm: SuperValidated<Infer<ProjectSchema>>;
	export let logoutForm: SuperValidated<Infer<LogoutSchema>>;

	let value = '';
	let open = false;

	const form = superForm(logoutForm, { validators: zodClient(logoutSchema), delayMs: 250 });
	const { delayed, enhance } = form;

	// todo: what happened on edit page???
	const getLastItem = (pathname: string) => pathname.substring(pathname.lastIndexOf('/') + 1);

	$: formattedPathname = $page.url.pathname.split('/')[1].replace(/%20/g, ' ');
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
						{formattedPathname}
						<ChevronDown />
					</Button>
				</Popover.Trigger>

				<Popover.Content class="w-60 rounded-lg bg-card p-0">
					<Command.Root class="rounded-lg bg-card p-0 shadow-lg" shouldFilter={false}>
						<Command.Input placeholder="Cari Proyek..." class="h-10" bind:value />
						<Command.Separator alwaysRender={true} />
						<Command.Empty>No project found.</Command.Empty>
						<Command.Group class="max-h-[70vh] overflow-y-auto">
							<SidebarProjectList bind:open bind:projects bind:formattedPathname />

							<Command.Item class="mt-2 flex h-8 bg-accent p-0">
								<SidebarProjectDialog
									{projectForm}
									class="flex h-full flex-1 cursor-pointer items-center justify-center rounded-md p-0"
								/>
							</Command.Item>
						</Command.Group>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>
		</div>

		<ul class="space-y-1 px-2 font-medium">
			{#each sidebarItems as { Icon, label, href } (label)}
				<li>
					<Button
						{href}
						on:click={() => (isMobileOpen = false)}
						variant={href === getLastItem($page.url.pathname) ? 'default' : 'ghost'}
						class="flex w-full rounded-2xl px-6 focus-visible:ring-2"
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
			<form method="POST" action="/?/logout" use:enhance>
				<Form.Button
					variant="ghost"
					class="flex w-full rounded-2xl px-6 focus-visible:ring-2"
					disabled={$delayed}
				>
					{#if $delayed}
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
