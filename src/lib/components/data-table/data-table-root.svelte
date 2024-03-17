<script lang="ts">
  import type { Column, Table as TTable } from 'svelte-headless-table';
  import type { AnyPlugins } from 'svelte-headless-table/plugins';
  import { Render, Subscribe } from 'svelte-headless-table';

  import * as Table from '$lib/components/ui/table';

  export let table: TTable<any, AnyPlugins>;
  export let columns: Column<any, AnyPlugins>[];

  const tableModel = table.createViewModel(columns);
  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = tableModel;
</script>

<Table.Root {...$tableAttrs}>
  <Table.Header>
    {#each $headerRows as headerRow}
      <Subscribe rowAttrs={headerRow.attrs()}>
        <Table.Row>
          {#each headerRow.cells as cell (cell.id)}
            <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
              <Table.Head {...attrs}>
                <Render of={cell.render()} />
              </Table.Head>
            </Subscribe>
          {/each}
        </Table.Row>
      </Subscribe>
    {/each}
  </Table.Header>

  <Table.Body {...$tableBodyAttrs}>
    {#each $pageRows as row (row.id)}
      <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
        <Table.Row {...rowAttrs}>
          {#each row.cells as cell (cell.id)}
            <Subscribe attrs={cell.attrs()} let:attrs>
              <Table.Cell {...attrs}>
                <Render of={cell.render()} />
              </Table.Cell>
            </Subscribe>
          {/each}
        </Table.Row>
      </Subscribe>
    {/each}
  </Table.Body>
</Table.Root>
