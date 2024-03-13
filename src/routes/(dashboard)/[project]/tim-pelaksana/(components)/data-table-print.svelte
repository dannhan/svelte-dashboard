<script lang="ts">
  import { cn } from '$lib/utils';
  import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableCell,
    TableRow
  } from '$lib/components/ui/table';
  import type { Data } from '../data';

  export let data: Data[];
</script>

<Table class="border-collapse border border-black">
  <TableHeader>
    <TableRow class="bg-[#7030A0]">
      <TableHead class="w-[50px] border border-black text-center text-lg font-bold text-white">
        NO.
      </TableHead>
      <TableHead class="border border-black text-center text-lg font-bold text-white">
        PEKERJAAN
      </TableHead>
      <TableHead class="border border-black text-center text-lg font-bold text-white">
        PELAKSANA
      </TableHead>
      <TableHead class="border border-black text-center text-lg font-bold text-white">
        STATUS
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody class="font-semibold text-black">
    {#each data as { id, pekerjaan, spk, pelaksana, status } (id)}
      <TableRow class="border-none">
        <TableCell class="border-t border-black text-center">{id}.</TableCell>
        <TableCell class="border border-black">{pekerjaan}</TableCell>
        <TableCell class="border border-black">{pelaksana}</TableCell>
        <TableCell
          class={cn('border-t border-black text-center', status === 'Finish' && 'bg-[#FFFF00]')}
        >
          {status}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell class="border border-black">SPK</TableCell>
        <TableCell class="border border-black">{spk}</TableCell>
        <TableCell class={cn(status === 'Finish' && 'bg-[#FFFF00]')}></TableCell>
      </TableRow>
    {/each}
  </TableBody>
</Table>
