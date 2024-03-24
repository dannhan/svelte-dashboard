<script lang="ts">
  import { Button, buttonVariants } from '$lib/components/ui/button';
  import { Edit } from '$lib/components/icons';

  export let id: number;
</script>

<Button
  href="tim-pelaksana/data?id={id}"
  variant="ghost"
  class="relative h-auto w-fit p-0.5 hover:bg-transparent"
>
  <Edit class="h-[14px]" />
</Button>
