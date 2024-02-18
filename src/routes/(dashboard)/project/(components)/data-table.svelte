<script>
	import DataTableToolbar from './data-table-toolbar.svelte';
	import DataTableFooter from './data-table-footer.svelte';
</script>

<div class="relative overflow-hidden rounded-lg border bg-white shadow-md dark:bg-card">
	<DataTableToolbar />

	<!-- Table -->
	<div class="overflow-x-auto">
		<table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
			<thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-accent dark:text-gray-400">
				<tr>
					<th scope="col" class="px-4 py-3">Product name</th>
					<th scope="col" class="px-4 py-3">Category</th>
					<th scope="col" class="px-4 py-3">Brand</th>
					<th scope="col" class="px-4 py-3">Description</th>
					<th scope="col" class="px-4 py-3">Price</th>
					<th scope="col" class="px-4 py-3">
						<span class="sr-only">Actions</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="border-b dark:border-border">
					<th
						scope="row"
						class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
						>Apple iMac 27&#34;</th
					>
					<td class="px-4 py-3">PC</td>
					<td class="px-4 py-3">Apple</td>
					<td class="px-4 py-3">300</td>
					<td class="px-4 py-3">$2999</td>
					<td class="flex items-center justify-end px-4 py-3">
						<button
							id="apple-imac-27-dropdown-button"
							data-dropdown-toggle="apple-imac-27-dropdown"
							class="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
							type="button"
						>
							<svg
								class="h-5 w-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
						</button>
						<div
							id="apple-imac-27-dropdown"
							class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-accent"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="apple-imac-27-dropdown-button"
							>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Show</a
									>
								</li>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Edit</a
									>
								</li>
							</ul>
							<div class="py-1">
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
									>Delete</a
								>
							</div>
						</div>
					</td>
				</tr>
				<tr class="border-b dark:border-border">
					<th
						scope="row"
						class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
						>Apple iMac 20&#34;</th
					>
					<td class="px-4 py-3">PC</td>
					<td class="px-4 py-3">Apple</td>
					<td class="px-4 py-3">200</td>
					<td class="px-4 py-3">$1499</td>
					<td class="flex items-center justify-end px-4 py-3">
						<button
							id="apple-imac-20-dropdown-button"
							data-dropdown-toggle="apple-imac-20-dropdown"
							class="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
							type="button"
						>
							<svg
								class="h-5 w-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
						</button>
						<div
							id="apple-imac-20-dropdown"
							class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-accent"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="apple-imac-20-dropdown-button"
							>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Show</a
									>
								</li>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Edit</a
									>
								</li>
							</ul>
							<div class="py-1">
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
									>Delete</a
								>
							</div>
						</div>
					</td>
				</tr>
				<tr class="border-b dark:border-border">
					<th
						scope="row"
						class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
						>Apple iPhone 14</th
					>
					<td class="px-4 py-3">Phone</td>
					<td class="px-4 py-3">Apple</td>
					<td class="px-4 py-3">1237</td>
					<td class="px-4 py-3">$999</td>
					<td class="flex items-center justify-end px-4 py-3">
						<button
							id="apple-iphone-14-dropdown-button"
							data-dropdown-toggle="apple-iphone-14-dropdown"
							class="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
							type="button"
						>
							<svg
								class="h-5 w-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
						</button>
						<div
							id="apple-iphone-14-dropdown"
							class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-accent"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="apple-iphone-14-dropdown-button"
							>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Show</a
									>
								</li>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Edit</a
									>
								</li>
							</ul>
							<div class="py-1">
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
									>Delete</a
								>
							</div>
						</div>
					</td>
				</tr>
				<tr class="border-b dark:border-border">
					<th
						scope="row"
						class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
						>Apple iPad Air</th
					>
					<td class="px-4 py-3">Tablet</td>
					<td class="px-4 py-3">Apple</td>
					<td class="px-4 py-3">4578</td>
					<td class="px-4 py-3">$1199</td>
					<td class="flex items-center justify-end px-4 py-3">
						<button
							id="apple-ipad-air-dropdown-button"
							data-dropdown-toggle="apple-ipad-air-dropdown"
							class="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
							type="button"
						>
							<svg
								class="h-5 w-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
						</button>
						<div
							id="apple-ipad-air-dropdown"
							class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-accent"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="apple-ipad-air-dropdown-button"
							>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Show</a
									>
								</li>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Edit</a
									>
								</li>
							</ul>
							<div class="py-1">
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
									>Delete</a
								>
							</div>
						</div>
					</td>
				</tr>
				<tr class="border-b dark:border-border">
					<th
						scope="row"
						class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
						>Xbox Series S</th
					>
					<td class="px-4 py-3">Gaming/Console</td>
					<td class="px-4 py-3">Microsoft</td>
					<td class="px-4 py-3">56</td>
					<td class="px-4 py-3">$299</td>
					<td class="flex items-center justify-end px-4 py-3">
						<button
							id="xbox-series-s-dropdown-button"
							data-dropdown-toggle="xbox-series-s-dropdown"
							class="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
							type="button"
						>
							<svg
								class="h-5 w-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
						</button>
						<div
							id="xbox-series-s-dropdown"
							class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-accent"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="xbox-series-s-dropdown-button"
							>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Show</a
									>
								</li>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Edit</a
									>
								</li>
							</ul>
							<div class="py-1">
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
									>Delete</a
								>
							</div>
						</div>
					</td>
				</tr>
				<tr class="border-b dark:border-border">
					<th
						scope="row"
						class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
						>PlayStation 5</th
					>
					<td class="px-4 py-3">Gaming/Console</td>
					<td class="px-4 py-3">Sony</td>
					<td class="px-4 py-3">78</td>
					<td class="px-4 py-3">$799</td>
					<td class="flex items-center justify-end px-4 py-3">
						<button
							id="playstation-5-dropdown-button"
							data-dropdown-toggle="playstation-5-dropdown"
							class="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
							type="button"
						>
							<svg
								class="h-5 w-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
						</button>
						<div
							id="playstation-5-dropdown"
							class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-accent"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="playstation-5-dropdown-button"
							>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Show</a
									>
								</li>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Edit</a
									>
								</li>
							</ul>
							<div class="py-1">
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
									>Delete</a
								>
							</div>
						</div>
					</td>
				</tr>
				<tr class="border-b dark:border-border">
					<th
						scope="row"
						class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
						>Xbox Series X</th
					>
					<td class="px-4 py-3">Gaming/Console</td>
					<td class="px-4 py-3">Microsoft</td>
					<td class="px-4 py-3">200</td>
					<td class="px-4 py-3">$699</td>
					<td class="flex items-center justify-end px-4 py-3">
						<button
							id="xbox-series-x-dropdown-button"
							data-dropdown-toggle="xbox-series-x-dropdown"
							class="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
							type="button"
						>
							<svg
								class="h-5 w-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
						</button>
						<div
							id="xbox-series-x-dropdown"
							class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-accent"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="xbox-series-x-dropdown-button"
							>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Show</a
									>
								</li>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Edit</a
									>
								</li>
							</ul>
							<div class="py-1">
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
									>Delete</a
								>
							</div>
						</div>
					</td>
				</tr>
				<tr class="border-b dark:border-border">
					<th
						scope="row"
						class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
						>Apple Watch SE</th
					>
					<td class="px-4 py-3">Watch</td>
					<td class="px-4 py-3">Apple</td>
					<td class="px-4 py-3">657</td>
					<td class="px-4 py-3">$399</td>
					<td class="flex items-center justify-end px-4 py-3">
						<button
							id="apple-watch-se-dropdown-button"
							data-dropdown-toggle="apple-watch-se-dropdown"
							class="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
							type="button"
						>
							<svg
								class="h-5 w-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
						</button>
						<div
							id="apple-watch-se-dropdown"
							class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-accent"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="apple-watch-se-dropdown-button"
							>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Show</a
									>
								</li>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Edit</a
									>
								</li>
							</ul>
							<div class="py-1">
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
									>Delete</a
								>
							</div>
						</div>
					</td>
				</tr>
				<tr class="border-b dark:border-border">
					<th
						scope="row"
						class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
						>NIKON D850</th
					>
					<td class="px-4 py-3">Photo</td>
					<td class="px-4 py-3">Nikon</td>
					<td class="px-4 py-3">465</td>
					<td class="px-4 py-3">$599</td>
					<td class="flex items-center justify-end px-4 py-3">
						<button
							id="nikon-d850-dropdown-button"
							data-dropdown-toggle="nikon-d850-dropdown"
							class="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
							type="button"
						>
							<svg
								class="h-5 w-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
						</button>
						<div
							id="nikon-d850-dropdown"
							class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-accent"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="nikon-d850-dropdown-button"
							>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Show</a
									>
								</li>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Edit</a
									>
								</li>
							</ul>
							<div class="py-1">
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
									>Delete</a
								>
							</div>
						</div>
					</td>
				</tr>
				<tr class="border-b dark:border-border">
					<th
						scope="row"
						class="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
						>Monitor BenQ EX2710Q</th
					>
					<td class="px-4 py-3">TV/Monitor</td>
					<td class="px-4 py-3">BenQ</td>
					<td class="px-4 py-3">354</td>
					<td class="px-4 py-3">$499</td>
					<td class="flex items-center justify-end px-4 py-3">
						<button
							id="benq-ex2710q-dropdown-button"
							data-dropdown-toggle="benq-ex2710q-dropdown"
							class="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
							type="button"
						>
							<svg
								class="h-5 w-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
								/>
							</svg>
						</button>
						<div
							id="benq-ex2710q-dropdown"
							class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-accent"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="benq-ex2710q-dropdown-button"
							>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Show</a
									>
								</li>
								<li>
									<a
										href="/"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Edit</a
									>
								</li>
							</ul>
							<div class="py-1">
								<a
									href="/"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
									>Delete</a
								>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<!-- End Table -->

	<DataTableFooter />
</div>
