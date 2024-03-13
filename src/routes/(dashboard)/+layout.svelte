<script lang="ts">
  import { cn } from '$lib/utils';
  import Sidebar from './sidebar.svelte';
  import Header from './header.svelte';

  export let data;

  let isMobileOpen = false;
</script>

<Sidebar
  {data}
  bind:isMobileOpen
  class="fixed left-0 top-0 z-40 h-screen w-64 max-w-[80%] -translate-x-full border-r bg-navbar shadow-md transition-transform duration-300 dark:border-none md:translate-x-0"
/>
<Header
  bind:isMobileOpen
  class="sticky top-0 z-10 flex items-center px-2 py-1.5 shadow backdrop-blur md:hidden md:px-4"
/>

<main id="main-content" class="p-4 sm:p-6 md:ml-64">
  <button
    class={cn(
      'invisible fixed inset-0 z-30 block bg-background/80 opacity-0 backdrop-blur-sm transition-all duration-300',
      isMobileOpen && 'visible opacity-100'
    )}
    on:click={() => (isMobileOpen = false)}
  >
  </button>

  <slot />
</main>
