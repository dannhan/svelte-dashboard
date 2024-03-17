<script lang="ts">
  import { page } from '$app/stores';
  import type { Data } from '../data';

  let form: HTMLFormElement;

  export let data: Data[];
  export let value: string;
  export let id: number;
  export let type: string;

  const handleSubmit = async (event: Event) => {
    const originalItem = data[id - 1];
    const newItem = { ...data[id - 1], id, [type]: value };
    data[id - 1] = newItem;

    // server handler
    if (JSON.stringify(originalItem) !== JSON.stringify(newItem)) {
      const formEl = event.target as HTMLFormElement;
      await fetch(formEl.action, {
        method: 'POST',
        credentials: 'same-origin', // include, *same-origin, omit
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ params: $page.params.project, originalItem, newItem })
      });
    }
  };
</script>

<form
  on:submit|preventDefault={handleSubmit}
  bind:this={form}
  class="h-full w-fit rounded-md dark:focus-within:bg-accent"
>
  <input
    type="text"
    bind:value
    on:blur={() => form.requestSubmit()}
    class="h-full w-full min-w-20 max-w-full cursor-pointer truncate border-transparent bg-transparent px-4 py-3 text-center focus:outline-none"
    autocomplete="off"
  />
</form>

<style>
  form:focus-within {
    backdrop-filter: none;
    position: relative;
    max-width: calc(-24px + 100vw);
    box-shadow:
      rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
      rgba(15, 15, 15, 0.1) 0px 3px 6px,
      rgba(15, 15, 15, 0.2) 0px 8px 24px;
    overflow: visible;
    display: flex;
    flex-direction: column;
  }
</style>
