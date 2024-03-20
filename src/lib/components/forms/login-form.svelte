<script lang="ts">
  import { navigating } from '$app/stores';

  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { postAuthenticationSchema } from '$lib/schema';

  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { Spinner } from '$lib/components/icons';

  export let data: SuperValidated<Infer<typeof postAuthenticationSchema>>;

  const form = superForm(data, {
    validators: zodClient(postAuthenticationSchema),
    delayMs: 150
  });
  const { form: formData, enhance, delayed } = form;
</script>

<form method="POST" use:enhance>
  <Form.Field {form} name="password">
    <Form.Control let:attrs>
      <Form.Label>Password</Form.Label>
      <Input
        {...attrs}
        bind:value={$formData.password}
        type="password"
        class="dark:bg-accent"
      />
    </Form.Control>
    <Form.Description class="sr-only">Enter the password to login.</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button class="mt-2 w-full focus-visible:ring-2" disabled={$delayed || !!$navigating}>
    {#if $delayed || $navigating}
      <Spinner class="mr-2 h-4 w-4 animate-spin" />
      Loading
    {:else}
      Masuk
    {/if}
  </Form.Button>
</form>
