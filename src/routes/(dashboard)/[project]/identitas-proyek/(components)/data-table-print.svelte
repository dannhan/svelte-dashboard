<script lang="ts">
  import { Table, TableBody, TableCell, TableRow } from '$lib/components/ui/table';
  import type { Data } from '../data';

  export let data: Data[];

  const sortedData = data.sort((a, b) => a.id - b.id);
</script>

<Table class="border-collapse border border-black">
  <TableBody class="font-semibold text-black">
    {#each sortedData as { id, key, value } (id)}
      <TableRow class="border-none">
        <TableCell class="w-10 border-t border-black text-center">{id}.</TableCell>
        <TableCell class="border border-black">{key}</TableCell>
        <TableCell class="border border-black">{value}</TableCell>
      </TableRow>
    {/each}
  </TableBody>
</Table>
