<script lang="ts">
  import type { SuperForm } from 'sveltekit-superforms';
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import { cn } from '$lib/utils';

  export let form: SuperForm<any>;
  export let name: string;
  export let value: string | number = '';
</script>

<Form.Field
  {form}
  name={name}
  class={cn('flex flex-col capitalize', name === 'spk' && 'uppercase', $$restProps.class)}
>
  <Form.Control let:attrs>
    <Form.Label class="text-sm font-medium md:w-1/6">{name}</Form.Label>
    <slot {attrs}>
      <Input {...attrs} bind:value autocomplete="off" />
    </slot>
  </Form.Control>
  <Form.FieldErrors class="normal-case" />
</Form.Field>
