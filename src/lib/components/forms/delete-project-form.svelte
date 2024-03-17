<script lang="ts">
  import { getContext } from 'svelte';

  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { deleteProjectSchema } from '$lib/schema';

  import * as Form from '$lib/components/ui/form';
  import { AlertDialogAction } from '$lib/components/ui/alert-dialog';

  import type { Project } from '$lib/types';

  export let params: string;
  export let project: Project;

  const deleteProjectForm = getContext<SuperValidated<Infer<typeof deleteProjectSchema>>>('deleteProjectForm');
  const form = superForm(deleteProjectForm, { validators: zodClient(deleteProjectSchema) });
  const { form: formData, enhance } = form;
</script>

<form method="POST" action="/{params}?/delete" use:enhance>
  <Form.Field {form} name="name" class="hidden">
    <Form.Control let:attrs>
      <input {...attrs} bind:value={project.name} autocomplete="off" />
    </Form.Control>
  </Form.Field>

  <AlertDialogAction
    type="submit"
    on:click={() => ($formData.name = project.name)}
    class="w-full bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
  >
    Continue
  </AlertDialogAction>
</form>
