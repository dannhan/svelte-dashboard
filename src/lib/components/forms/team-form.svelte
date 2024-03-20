<script lang="ts">
  import { getContext } from 'svelte';

  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { postAssignmentSchema } from '$lib/schema';

  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';
  import { Card } from '$lib/components/ui/card';
  import CardContent from '../ui/card/card-content.svelte';
  import CardFooter from '../ui/card/card-footer.svelte';

  const projectForm = <SuperValidated<Infer<typeof postAssignmentSchema>>>getContext('projectForm');
  const form = superForm(projectForm, { validators: zodClient(postAssignmentSchema) });
  const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
  <Card class="mx-auto max-w-screen-xl border-none">
    <CardContent class="space-y-4 p-6">
      <Form.Field
        {form}
        name="pekerjaan"
        class="flex flex-col md:flex-row md:items-center md:gap-4"
      >
        <Form.Control let:attrs>
          <Form.Label class="text-sm font-medium md:w-1/6 md:text-right">Pekerjaan</Form.Label>
          <Input {...attrs} bind:value={$formData.pekerjaan} autocomplete="off" />
        </Form.Control>
      </Form.Field>
      <Form.Field {form} name="spk" class="flex flex-col md:flex-row md:items-center md:gap-4">
        <Form.Control let:attrs>
          <Form.Label class="text-sm font-medium md:w-1/6 md:text-right">SPK</Form.Label>
          <Input {...attrs} bind:value={$formData.spk} autocomplete="off" />
        </Form.Control>
      </Form.Field>
      <Form.Field
        {form}
        name="pelaksana"
        class="flex flex-col md:flex-row md:items-center md:gap-4"
      >
        <Form.Control let:attrs>
          <Form.Label class="text-sm font-medium md:w-1/6 md:text-right">Pelaksana</Form.Label>
          <Input {...attrs} bind:value={$formData.pelaksana} autocomplete="off" />
        </Form.Control>
      </Form.Field>
      <Form.Field {form} name="gambar" class="flex flex-col md:flex-row md:items-center md:gap-4">
        <Form.Control let:attrs>
          <Form.Label class="text-sm font-medium md:w-1/6 md:text-right">Gambar</Form.Label>
          <input
            {...attrs}
            bind:value={$formData.gambar}
            class="block h-9 w-full rounded-md border text-xs file:mr-2 file:h-full file:cursor-pointer file:border-none file:bg-secondary file:px-3 file:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            id="file_input"
            type="file"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field {form} name="status" class="flex flex-col md:flex-row md:items-center md:gap-4">
        <Form.Control let:attrs>
          <Form.Label class="text-sm font-medium md:w-1/6 md:text-right">Status</Form.Label>
          <Input {...attrs} bind:value={$formData.status} autocomplete="off" />
        </Form.Control>
      </Form.Field>
    </CardContent>

    <CardFooter class="flex justify-end gap-4">
      <Button href="../tim-pelaksana" variant="outline" class="bg-transparent">Batalkan</Button>
      <Button type="submit">Submit</Button>
    </CardFooter>
  </Card>
</form>
