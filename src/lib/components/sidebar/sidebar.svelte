<script script lang="ts">
  import type { Project } from '$lib/types';
  import { sidebarItems } from '$lib';
  import { Separator } from '$lib/components/ui/separator';
  import LogoutForm from '$lib/components/forms/logout-form.svelte';

  import SidebarCombobox from './sidebar-combobox.svelte';
  import SidebarMenuLink from './sidebar-menu-link.svelte';

  export let projects: Project[];
  export let isMobileOpen: boolean;

  $: projects;
</script>

<aside class={$$restProps.class} class:translate-x-0={isMobileOpen}>
  <nav class="space-y-2 py-6">
    <div class="relative mb-4 flex w-full flex-col gap-2 px-2">
      <SidebarCombobox type="konstruksi" {projects} />
      <SidebarCombobox type="renovasi" {projects} />
    </div>

    <ul class="space-y-1 px-2 font-medium">
      {#each sidebarItems as { Icon, label, href } (label)}
        <li>
          <SidebarMenuLink
            {href}
            bind:isMobileOpen
            class="flex w-full rounded-full px-6 focus-visible:ring-2"
          >
            <Icon class="h-5 w-5" />
            <span class="ms-4 flex flex-1 items-center truncate">{label}</span>
          </SidebarMenuLink>
        </li>
      {/each}
    </ul>

    <div class="px-2">
      <Separator />
    </div>

    <div class="px-2">
      <LogoutForm />
    </div>
  </nav>
</aside>
