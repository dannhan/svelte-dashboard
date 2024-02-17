<script>
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
</script>

<main class="flex min-h-screen items-center justify-center">
	<Card class="w-[400px] max-w-full max-sm:border-none max-sm:shadow-none">
		<CardContent class="p-6">
			<form class="grid gap-4">
				<div>
					<Label for="password">Password</Label>
					<Input id="password" type="password" name="password" required />
				</div>
				<!-- todo -->
				<Button type="submit" class="w-full">
					<!-- {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />} -->
					Masuk
				</Button>
			</form>
		</CardContent>
	</Card>
</main>
