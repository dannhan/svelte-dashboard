<script script lang="ts">
  import { page } from '$app/stores';
  import type { LayoutData } from './$types';

  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { logoutSchema } from '$lib/schema';

  import { sidebarItems } from '$lib';
  import * as Form from '$lib/components/ui/form';
  import { Button } from '$lib/components/ui/button';
  import { Separator } from '$lib/components/ui/separator';
  import { LogOut, Spinner } from '$lib/icons';

  import SidebarCombobox from './sidebar-combobox.svelte';

  export let data: LayoutData;
  export let isMobileOpen: boolean;

  let value = '';

  const form = superForm(data.logoutForm, { validators: zodClient(logoutSchema), delayMs: 250 });
  const { delayed, enhance } = form;

  $: params = $page.params.project;
</script>

<aside class={$$restProps.class} class:translate-x-0={isMobileOpen}>
  <nav class="space-y-2 py-6">
    <!-- todo -->
    <!-- <div class="mb-2 flex items-center px-2 py-2 gap-4 invisible"> -->
    <!--   <img -->
    <!--     src="/cropped-light.svg" -->
    <!--     height={30} -->
    <!--     width={30} -->
    <!--     alt="logo" -->
    <!--   /> -->
    <!--   <span class="text-lg font-semibold capitalize">{params}</span> -->
    <!-- </div> -->

    <div class="relative mb-4 flex w-full flex-col gap-2 px-2">
      <SidebarCombobox type="konstruksi" bind:params bind:value {data} />
      <SidebarCombobox type="renovasi" bind:params bind:value {data} />
    </div>

    <ul class="space-y-1 px-2 font-medium">
      {#each sidebarItems as { Icon, label, href } (label)}
        <li>
          <Button
            href="/{params}/{href}"
            variant={$page.url.pathname.endsWith(href) ? 'default' : 'ghost'}
            on:click={() => (isMobileOpen = false)}
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
