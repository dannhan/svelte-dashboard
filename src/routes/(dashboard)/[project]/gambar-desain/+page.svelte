<!-- a big todo -->
<script lang="ts">
  import { error } from '@sveltejs/kit';
  import { page } from '$app/stores';
  import { ModeToggle } from '$lib/components';
  import ImageCard from './image-card.svelte';
  import { AspectRatio } from '$lib/components/ui/aspect-ratio';

  export let data;
  const params = $page.params.project;
  const project = data.projects?.find((project) => project.name === params);

  if (!project) throw error(404);

  let imageURLs: string[] = [];
</script>

<div class="mb-4 flex items-end border-b-2 pb-2">
  <h1 class="text-xl font-semibold">Gambar Desain</h1>
  <ModeToggle />
</div>

<div
  class="mx-auto grid max-w-[840px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 md:gap-6 lg:grid-cols-2"
>
  {#each project.designImages as designImage}
    <AspectRatio
      ratio={9 / 14}
      class="absolute cursor-pointer rounded-lg bg-muted transition-all hover:z-10 hover:scale-105"
    >
      <img id={designImage} src={designImage} alt="design" class="object-fit h-full rounded-lg" />

      <button
        class="absolute left-0 top-0 z-50 h-full w-full bg-transparent text-black opacity-0"
        on:click={() => document.getElementById(designImage)?.requestFullscreen()}
      >
      </button></AspectRatio
    >
  {/each}

  {#each imageURLs as src}
    <AspectRatio
      ratio={9 / 14}
      class="absolute cursor-pointer overflow-hidden rounded-lg bg-muted transition-all hover:z-10 hover:scale-105"
    >
      <img {src} alt="design" class="object-fit h-full rounded-lg" />
    </AspectRatio>
  {/each}

  <ImageCard bind:imageURLs class="transition-all hover:z-10 hover:scale-105" />
</div>
