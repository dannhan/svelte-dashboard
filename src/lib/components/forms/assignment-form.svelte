<script lang="ts">
  import { getContext } from 'svelte';

  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { postAssignmentSchema } from '$lib/schema';

  import * as Form from '$lib/components/ui/form';
  import * as Select from '$lib/components/ui/select';
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardFooter } from '$lib/components/ui/card';

  import AssignmentFormInputWithLabel from './assignment-form-input-with-label.svelte';

  const projectForm = <SuperValidated<Infer<typeof postAssignmentSchema>>>getContext('projectForm');
  const form = superForm(projectForm, { validators: zodClient(postAssignmentSchema) });
  const { form: formData, enhance } = form;

  export let id = 99;
  export let data: Infer<typeof postAssignmentSchema>;
  console.log({ data });

  $formData.id = id;

  if (data) {
    $formData = data;
  }
  $: selectedStatus = $formData.status
    ? {
        label: $formData.status,
        value: $formData.status
      }
    : undefined;
</script>

<form method="POST" enctype="multipart/form-data" spellcheck="false" use:enhance>
  <Card class="mx-auto max-w-screen-xl rounded-lg border-none">
    <CardContent class="space-y-4 p-6">
      <AssignmentFormInputWithLabel {form} name="id" class="hidden" value={$formData.id} />
      <AssignmentFormInputWithLabel {form} name="pekerjaan" bind:value={$formData.pekerjaan} />
      <AssignmentFormInputWithLabel {form} name="spk" bind:value={$formData.spk} />
      <AssignmentFormInputWithLabel {form} name="pelaksana" bind:value={$formData.pelaksana} />

      <AssignmentFormInputWithLabel {form} name="gambar" let:attrs>
        <input
          {...attrs}
          id="file_input"
          type="file"
          name="file"
          accept=".svg, .jpg, .jpeg, .png, .webp"
          bind:value={$formData.gambar}
          class="block h-9 w-full rounded-md border text-xs file:mr-2 file:h-full file:cursor-pointer file:border-none file:bg-secondary file:px-3 file:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </AssignmentFormInputWithLabel>

      <AssignmentFormInputWithLabel {form} name="status" let:attrs>
        <Select.Root
          selected={selectedStatus}
          onSelectedChange={(v) => {
            v && ($formData.status = v.value);
          }}
        >
          <Select.Trigger {...attrs}>
            <Select.Value placeholder="Pilih Status" />
          </Select.Trigger>
          <Select.Content class="bg-card">
            <Select.Item value="On Progress" label="On Progress" />
            <Select.Item value="Finish" label="Finish" />
          </Select.Content>
        </Select.Root>
        <input hidden bind:value={$formData.status} name={attrs.name} />
      </AssignmentFormInputWithLabel>
    </CardContent>

    <CardFooter class="flex justify-end gap-4">
      <Button href="../tim-pelaksana" variant="outline" class="bg-transparent">Batalkan</Button>
      <Form.Button>Submit</Form.Button>
    </CardFooter>
  </Card>
</form>
