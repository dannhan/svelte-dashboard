<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from '$lib/components/ui/button';

  export let href: string;
  export let isMobileOpen: boolean;
</script>

<Button
  href="/{$page.params.project}/{href}"
  variant={$page.url.pathname.endsWith(href) ? 'default' : 'ghost'}
  class={$$restProps.class}
  on:click={() => (isMobileOpen = false)}
>
  <slot />
</Button>
