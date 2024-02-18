<!-- Table Header -->
<div
	class="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0"
>
	<div class="w-full md:w-1/2">
		<form class="flex items-center">
			<label for="simple-search" class="sr-only">Search</label>
			<div class="relative w-full">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<svg
						aria-hidden="true"
						class="h-5 w-5 text-gray-500 dark:text-gray-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<input
					type="text"
					id="simple-search"
					class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-border dark:bg-accent dark:text-white dark:placeholder-gray-400"
					placeholder="Search"
					required
				/>
			</div>
		</form>
	</div>
	<div
		class="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0"
	>
		<div class="flex w-full items-center space-x-3 md:w-auto">
			<button
				id="actionsDropdownButton"
				data-dropdown-toggle="actionsDropdown"
				class="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-border dark:bg-card dark:text-gray-400 dark:hover:bg-accent dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
				type="button"
			>
				<svg
					class="-ml-1 mr-1.5 h-5 w-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						clip-rule="evenodd"
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					/>
				</svg>
				Actions
			</button>
			<button
				id="filterDropdownButton"
				data-dropdown-toggle="filterDropdown"
				class="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-border dark:bg-card dark:text-gray-400 dark:hover:bg-accent dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
				type="button"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					class="mr-2 h-4 w-4 text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
						clip-rule="evenodd"
					/>
				</svg>
				Filter
				<svg
					class="-mr-1 ml-1.5 h-5 w-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						clip-rule="evenodd"
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					/>
				</svg>
			</button>
		</div>
	</div>
</div>
<!-- End Table Header -->
