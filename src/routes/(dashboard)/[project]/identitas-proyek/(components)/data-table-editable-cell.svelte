<script lang="ts">
  import { BodyRow, DataColumn } from 'svelte-headless-table';

  type Item = $$Generic;

  export let row: BodyRow<Item>;
  export let column: DataColumn<Item>;
  export let value: string;
  export let onUpdateValue: (
    event: Event,
    rowDataId: string,
    columnId: string,
    newValue: string
  ) => void;

  let form: HTMLFormElement;

  const handleSubmit = (event: Event) => {
    if (row.isData()) {
      onUpdateValue(event, row.dataId, column.id, value);
    }
  };
</script>

{#if column.id === 'id'}
  <form
    on:submit|preventDefault={handleSubmit}
    bind:this={form}
    class="h-full rounded-md dark:focus-within:bg-accent"
  >
    <input
      type="text"
      bind:value
      on:blur={() => form.requestSubmit()}
      class="auto h-full w-12 cursor-default truncate border-transparent bg-transparent px-2 py-3 text-center focus:outline-none"
      autocomplete="off"
    />
  </form>
{:else}
  <form
    on:submit|preventDefault={handleSubmit}
    bind:this={form}
    class="h-full w-auto rounded-md dark:focus-within:bg-accent"
  >
    <input
      id={column.id === 'key' ? row.id : `value-${row.id + 1}`}
      type="text"
      bind:value
      on:blur={() => form.requestSubmit()}
      class="h-full w-fit min-w-full cursor-default truncate border-transparent bg-transparent px-4 py-3 focus:outline-none"
      autocomplete="off"
    />
  </form>
{/if}

<style>
  form:focus-within {
    backdrop-filter: none;
    position: relative;
    max-width: calc(-24px + 100vw);
    box-shadow:
      rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
      rgba(15, 15, 15, 0.1) 0px 3px 6px,
      rgba(15, 15, 15, 0.2) 0px 9px 24px;
    overflow: visible;
    display: flex;
    flex-direction: column;
  }
</style>
