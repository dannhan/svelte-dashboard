<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog';
  import { Plus } from '$lib/components/icons';
  import PostProjectForm from '$lib/components/forms/post-project-form.svelte';

  export let params: string;
  export let type: string;

  let open = false;
</script>

<Dialog.Root closeOnEscape={false} closeOnOutsideClick={false} bind:open>
  <Dialog.Trigger class={$$restProps.class}>
    <Plus class="h-4 w-4" />
  </Dialog.Trigger>
  <Dialog.Overlay class="fixed inset-0 z-30 bg-background/50 " />

  <Dialog.Content class="z-[60] w-screen border-none bg-card px-8 py-6">
    <PostProjectForm {params} {type} bind:open />
  </Dialog.Content>
</Dialog.Root>
