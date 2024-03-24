<script lang="ts">
  import { getContext } from 'svelte';
  import { page } from '$app/stores';

  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { deleteAuthenticationSchema } from '$lib/schema';

  import { FormButton } from '$lib/components/ui/form';
  import { LogOut, Spinner } from '$lib/components/icons';

  const logoutForm = getContext<SuperValidated<Infer<typeof deleteAuthenticationSchema>>>('logoutForm');
  const { delayed, enhance } = superForm(logoutForm, {
    validators: zodClient(deleteAuthenticationSchema)
  });
</script>

<form method="POST" action="/{$page.params.project}?/logout" use:enhance>
  <FormButton
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
  </FormButton>
</form>
