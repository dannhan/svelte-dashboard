<!-- todo: implement login -->
<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import type { PageData } from './$types';
	import LoginForm from './(components)/login-form.svelte';
	export let data: PageData;
</script>

<main class="flex min-h-screen flex-col items-center justify-center">
	<Card class="w-[400px] max-w-full max-sm:border-none max-sm:bg-background max-sm:shadow-none">
		<CardContent class="p-6">
			<LoginForm data={data.form} />
		</CardContent>
	</Card>
</main>
