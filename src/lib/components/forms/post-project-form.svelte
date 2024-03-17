<script lang="ts">
  import { getContext } from 'svelte';

  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { postProjectSchema } from '$lib/schema';

  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';

  export let params: string;
  export let type: string;
  export let open: boolean;

  const projectForm = <SuperValidated<Infer<typeof postProjectSchema>>>getContext('projectForm');
  const form = superForm(projectForm, { validators: zodClient(postProjectSchema) });
  const { form: formData, enhance } = form;

  $: disabled = $formData.name?.length <= 0;
</script>

<form
  method="POST"
  action="/{params}?/create"
  use:enhance
  class="space-y-4"
  on:submit={() => (open = false)}
>
  <Form.Field {form} name="name">
    <Form.Control let:attrs>
      <Form.Label>Nama Proyek</Form.Label>
      <Input {...attrs} bind:value={$formData.name} autocomplete="off" />
    </Form.Control>
  </Form.Field>

  <Form.Field {form} name="type" class="sr-only">
    <Form.Control let:attrs>
      <Form.Label>Tipe</Form.Label>
      <input bind:value={type} name={attrs.name} />
    </Form.Control>
  </Form.Field>

  <div class="flex justify-end gap-2 pt-10">
    <Button variant="outline" class="bg-transparent" on:click={() => (open = false)}>
      Batalkan
    </Button>
    <Form.Button class="text-secondary" bind:disabled>Tambah Proyek</Form.Button>
  </div>
</form>
