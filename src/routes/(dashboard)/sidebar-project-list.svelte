<script script lang="ts">
  import { goto } from '$app/navigation';

  import type { Project } from '$lib/types';
  import { cn } from '$lib/utils';
  import { Check } from 'svelte-radix';
  import { Trash } from '$lib/icons';

  import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
  import * as Form from '$lib/components/ui/form';
  import { CommandItem } from '$lib/components/ui/command';
  import { Button } from '$lib/components/ui/button';

  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { deleteProjectSchema, type DeleteProjectSchema } from '$lib/schema';
  import { zodClient } from 'sveltekit-superforms/adapters';

  export let deleteProjectForm: SuperValidated<Infer<DeleteProjectSchema>>;
  export let projects: Project[];
  export let open: boolean;
  export let params: string;
  export let value: string;

  let isDeleting = true;

  const form = superForm(deleteProjectForm, { validators: zodClient(deleteProjectSchema) });
  const { form: formData, enhance } = form;
</script>

{#each projects as project}
  <!-- search -->
  {#if project.name.startsWith(value.toLowerCase())}
    <CommandItem
      class="flex h-10 p-0 capitalize"
      value={project.name}
      onSelect={(value) => {
        if (isDeleting) {
          return;
        }

        isDeleting = true;
        goto(`/${value}/identitas-proyek`);
        open = false;
      }}
    >
      <button
        class="flex h-full flex-1 cursor-default items-center pl-2 text-left capitalize"
        on:click={() => (isDeleting = false)}
      >
        <Check class={cn('mr-2 h-4 w-4', params !== project.name && 'text-transparent')} />
        <span class="flex-1 truncate">{project.name}</span>
      </button>

      <AlertDialog.Root>
        <AlertDialog.Trigger asChild let:builder>
          <Button
            variant="ghost"
            size="sm"
            type="submit"
            class="hover:bg-transparent hover:text-destructive"
            builders={[builder]}
            disabled={project.name === params}
          >
            <Trash class="h-3.5 w-3.5" />
          </Button>
        </AlertDialog.Trigger>

        <!-- todo: change this to indonesian -->
        <AlertDialog.Content class="bg-card">
          <AlertDialog.Header>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete the project.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel class="bg-transparent">Cancel</AlertDialog.Cancel>
            <form method="POST" action="/{params}?/delete" use:enhance>
              <Form.Field {form} name="name" class="hidden">
                <Form.Control let:attrs>
                  <input {...attrs} bind:value={project.name} autocomplete="off" />
                </Form.Control>
              </Form.Field>

              <AlertDialog.Action
                type="submit"
                on:click={() => ($formData.name = project.name)}
                class="w-full bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
              >
                Continue
              </AlertDialog.Action>
            </form>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </CommandItem>
  {/if}
{/each}
