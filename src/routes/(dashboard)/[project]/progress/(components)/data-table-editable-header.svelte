<script lang="ts">
  let value: string = '';
  let isFocus: boolean = false;
</script>


<form class="h-fit rounded-md">
  <input
    type="text"
    class="w-full cursor-default bg-transparent p-0 text-center focus:outline-none"
    placeholder={isFocus ? '' : 'TGL'}
    bind:value
    on:focus={() => isFocus = true}
    on:blur={() => isFocus = false}
    autocomplete="off"
  />
</form>
