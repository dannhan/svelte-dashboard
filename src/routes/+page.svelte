<!-- todo: implement login -->
<script>
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
</script>

<main class="flex min-h-screen items-center justify-center">
	<!-- Login Card -->
	<Card class="w-[400px] max-w-full max-sm:border-none max-sm:bg-background max-sm:shadow-none">
		<CardContent class="p-6">
			<form class="grid gap-4">
				<Label for="password" class="space-y-2">
					<span>Password</span>
					<Input
						id="password"
						type="password"
						name="password"
						class="focus-visible:ring-2 dark:bg-accent"
						required
					/>
				</Label>

				<Button href="/project" class="w-full focus-visible:ring-2">Masuk</Button>
			</form>
		</CardContent>
	</Card>
</main>
