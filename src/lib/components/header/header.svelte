<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { ModeToggle } from '$lib/components';
  import { Hamburger } from '$lib/components/icons';

  export let isMobileOpen: boolean;
</script>

<header class={$$restProps.class}>
  <Button
    on:click={() => (isMobileOpen = true)}
    variant="ghost"
    class="inline-flex h-fit items-center rounded-lg p-2 text-sm"
  >
    <Hamburger class="h-5 w-5" />
    <span class="ms-3">Menu</span>
  </Button>

  <ModeToggle class="inline-flex" />
</header>
