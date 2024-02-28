<script>
	import { clickOutside } from 'svelte-use-click-outside';
	import { Button } from '$lib/components/ui/button';

	let isDropdownOpen = false; // default state (dropdown close)

	const handleDropdownClick = () => (isDropdownOpen = !isDropdownOpen);
</script>

<div class="flex w-full px-4 relative hidden">
	<div class="w-full" use:clickOutside={handleDropdownClick}>
		<Button class="w-full items-center justify-between" on:click={handleDropdownClick}>
			Dropdown
			{#if isDropdownOpen}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-6 w-6 stroke-current"
				>
					<title>Close Dropdown</title>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-6 w-6 stroke-current"
				>
					<title>Open Dropdown</title>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			{/if}
		</Button>
		<ul
			class="w-full rounded-md bg-primary p-2 shadow mt-2 absolute"
			style:visibility={isDropdownOpen ? 'visible' : 'hidden'}
		>
			<li><button class="btn text-slate-300">Item 1</button></li>
			<li><button class="btn text-slate-300">Item 2</button></li>
		</ul>
	</div>
	<p class="sr-only text-slate-300">
		isDropdownOpen: {isDropdownOpen}
	</p>
</div>
