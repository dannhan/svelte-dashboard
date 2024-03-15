<script lang="ts">
  import type { TableViewModel } from 'svelte-headless-table';
  import { ChevronRight, ChevronLeft } from 'svelte-radix';
  import { cn } from '$lib/utils';
  import * as Select from '$lib/components/ui/select';
  import { Button } from '$lib/components/ui/button';
  import type { Data } from '../data';

  export let tableModel: TableViewModel<Data, any>;

  const { pluginStates } = tableModel;

  const { hasNextPage, hasPreviousPage, pageIndex, pageCount, pageSize } = pluginStates.page;
</script>

<div class={$$restProps.class}>
  <div class="flex w-full flex-1 items-center justify-between text-sm text-muted-foreground">
    <div class="flex items-center justify-center text-sm font-medium">
      Page {$pageIndex + 1} of {$pageCount}
    </div>

    <div class="flex items-center space-x-2">
      <p class="sr-only text-sm font-medium">Rows per page</p>
      <Select.Root
        onSelectedChange={(selected) => pageSize.set(Number(selected?.value))}
        selected={{ value: '25', label: '25' }}
      >
        <Select.Trigger class="w-[80px]">
          <Select.Value placeholder="Select page size" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="10">10</Select.Item>
          <Select.Item value="25">25</Select.Item>
          <Select.Item value="50">50</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  </div>

  <ul class="inline-flex items-stretch -space-x-px">
    <li>
      <Button
        variant="outline"
        class="rounded-r-none bg-transparent px-3 py-1.5"
        disabled={!$hasPreviousPage}
        on:click={() => ($pageIndex = $pageIndex - 1)}
      >
        <span class="sr-only">Previous</span>
        <ChevronLeft class="h-4 w-4" />
      </Button>
    </li>

    {#each { length: $pageCount } as _, i}
      <li>
        <Button
          variant="ghost"
          class={cn('rounded-none border px-3.5 py-2', $pageIndex === i && 'bg-accent')}
          on:click={() => ($pageIndex = i)}
          disabled={$pageIndex === i}
        >
          {i + 1}
        </Button>
      </li>
    {/each}

    <li>
      <Button
        variant="outline"
        class="rounded-l-none bg-transparent px-3 py-1.5"
        disabled={!$hasNextPage}
        on:click={() => ($pageIndex = $pageIndex + 1)}
      >
        <span class="sr-only">Next</span>
        <ChevronRight class="h-4 w-4" />
      </Button>
    </li>
  </ul>
</div>
