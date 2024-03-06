<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { loginSchema, type LoginSchema } from '$lib/schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<LoginSchema>>;

	const form = superForm(data, {
		validators: zodClient(loginSchema)
	});

	const { form: formData, enhance } = form;
</script>

<!-- todo: throw error when password is incorrect, implement loading, read docs -->
<form method="POST" use:enhance>
	<Form.Field {form} name="password">
		<Form.Control let:attrs>
			<Form.Label>Password</Form.Label>
			<Input
				{...attrs}
				bind:value={$formData.password}
				type="password"
				class="focus-visible:ring-2 bg-accent"
			/>
		</Form.Control>
		<Form.Description class="sr-only">Enter the password to login.</Form.Description>

		<Form.FieldErrors />
	</Form.Field>
	<Form.Button class="mt-2 w-full focus-visible:ring-2">Masuk</Form.Button>
</form>
