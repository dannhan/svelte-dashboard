<script>
	import { Button } from '$lib/components/ui/button';
</script>

<div class="h-full overflow-y-auto bg-background px-3 py-4">
	<ul class="space-y-2 font-medium">
		<li>
			<Button variant="ghost" class="group group w-full justify-start rounded-lg p-2">
				<svg
					class="h-5 w-5 text-muted-foreground transition duration-75 hover:text-foreground group-hover:text-foreground"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="12" cy="12" r="10" />
					<path d="M12 16v-4" />
					<path d="M12 8h.01" />
				</svg>

				<span class="ms-3 text-base">Identitas Proyek</span>
			</Button>
		</li>
		<li>
			<Button variant="ghost" class="group group w-full justify-start rounded-lg p-2">
				<svg
					class="h-5 w-5 text-muted-foreground transition duration-75 hover:text-foreground group-hover:text-foreground"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M3 3v18h18" />
					<path d="M13 17V9" />
					<path d="M18 17V5" />
					<path d="M8 17v-3" />
				</svg>

				<span class="ms-3 text-base">Progress</span>
			</Button>
		</li>
		<li>
			<Button variant="ghost" class="group group w-full justify-start rounded-lg p-2">
				<svg
					class="h-5 w-5 text-muted-foreground transition duration-75 hover:text-foreground group-hover:text-foreground"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
					<path d="M12 12v8a2 2 0 0 0 4 0" />
					<path d="M12 2v1" />
				</svg>

				<span class="ms-3 text-base">Curah Hujan</span>
			</Button>
		</li>
	</ul>
</div>
