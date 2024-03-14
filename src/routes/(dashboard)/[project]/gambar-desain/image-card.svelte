<script lang="ts">
  import { enhance } from '$app/forms';
  import { cn } from '$lib/utils';
  import ImagePlus from '$lib/icons/image-plus.svelte';

  export let imageURLs: string[];

  let form: HTMLFormElement;
</script>

<form method="post" use:enhance enctype="multipart/form-data" class="h-full" bind:this={form}>
  <label
    class={cn(
      'flex h-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-card transition-colors hover:bg-accent dark:border-gray-600',
      $$restProps.class
    )}
  >
    <div class="flex flex-col items-center justify-center pb-6 pt-5">
      <ImagePlus class="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" />
      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span class="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG or JPG</p>
    </div>

    <input
      id="file"
      type="file"
      name="fileToUpload"
      class="hidden"
      accept=".svg, .jpg, .jpeg, .png, .webp"
      on:change={(e) => {
        const formData = new FormData();

        // @ts-ignore
        const file = e.target.files[0];
        formData.append('image', file);

        imageURLs.push(URL.createObjectURL(file));
        imageURLs = imageURLs;
        form.requestSubmit();
      }}
    />
  </label>
</form>
