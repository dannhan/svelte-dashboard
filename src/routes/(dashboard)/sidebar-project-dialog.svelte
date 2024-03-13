<script lang="ts">
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { projectSchema, type ProjectSchema } from '$lib/schema';

  import { Plus } from '$lib/icons';
  import * as Dialog from '$lib/components/ui/dialog';
  import * as Select from '$lib/components/ui/select';
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { Button } from '$lib/components/ui/button';

  export let projectForm: SuperValidated<Infer<ProjectSchema>>;
  export let params: string;

  let open = false;

  const form = superForm(projectForm, { validators: zodClient(projectSchema) });
  const { form: formData, enhance } = form;

  $: selectedType = $formData.type ? { label: $formData.type, value: $formData.type } : undefined;
  $: disabled =
    ($formData.type !== 'renovasi' && $formData.type !== 'konstruksi') ||
    $formData.name?.length <= 0;
</script>

<Dialog.Root
  closeOnEscape={false}
  closeOnOutsideClick={false}
  bind:open
  onOpenChange={() => {
    $formData.name = '';
    $formData.type = '';
  }}
>
  <Dialog.Trigger class={$$restProps.class}>
    <Plus class="h-4 w-4" />
  </Dialog.Trigger>
  <Dialog.Overlay class="fixed inset-0 z-30 bg-background/50 " />

  <Dialog.Content class="z-[60] w-screen border-none bg-card px-8 py-6">
    <!------------------------------form content ---------------------------->
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

      <Form.Field {form} name="type">
        <Form.Control let:attrs>
          <Form.Label>Tipe</Form.Label>
          <Select.Root
            selected={selectedType}
            onSelectedChange={(v) => {
              v && ($formData.type = v.value);
            }}
          >
            <Select.Trigger {...attrs}>
              <Select.Value placeholder="Select Type" class="capitalize" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="konstruksi" label="Konstruksi">Konstruksi</Select.Item>
              <Select.Item value="renovasi" label="Renovasi">Renovasi</Select.Item>
            </Select.Content>
          </Select.Root>
          <input hidden bind:value={$formData.type} name={attrs.name} />
        </Form.Control>
      </Form.Field>

      <div class="flex justify-end gap-2 pt-10">
        <Button variant="outline" class="bg-transparent" on:click={() => (open = false)}>
          Batalkan
        </Button>
        <Form.Button class="text-secondary" bind:disabled>Tambah Proyek</Form.Button>
      </div>
    </form>
    <!------------------------------end form content ---------------------------->
  </Dialog.Content>
</Dialog.Root>
