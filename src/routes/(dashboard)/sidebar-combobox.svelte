<script lang="ts">
  import * as Popover from '$lib/components/ui/popover';
  import * as Command from '$lib/components/ui/command';
  import { Button } from '$lib/components/ui/button';
  import { CaretSort, ChevronDown } from 'svelte-radix';
  import type { LayoutData } from './$types';

  import SidebarProjectDialog from './sidebar-project-dialog.svelte';
  import SidebarProjectList from './sidebar-project-list.svelte';

  export let value = '';
  export let data: LayoutData;
  export let params: string;
  export let type: 'konstruksi' | 'renovasi';

  let open: boolean = false;
  $: filteredData = data.projects?.filter((v) => v.type === type) || [];
</script>

<Popover.Root bind:open>
  <Popover.Trigger asChild let:builder>
    <Button
      builders={[builder]}
      variant="outline"
      role="combobox"
      aria-expanded={open}
      class="w-full justify-between capitalize text-foreground"
    >
      {type}
      <CaretSort class="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
          projects={filteredData}
          deleteProjectForm={data.deleteProjectForm}
        />

        <Command.Separator class="my-1" />

        {#if value === ''}
          <Command.Item class="flex h-8 bg-accent p-0">
            <SidebarProjectDialog
              {params}
              bind:type
              projectForm={data.projectForm}
              class="flex h-full flex-1 cursor-pointer items-center justify-center rounded-md p-0"
            />
          </Command.Item>
        {/if}
      </Command.Group>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
