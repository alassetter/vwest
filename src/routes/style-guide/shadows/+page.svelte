<script>
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
</script>

<HeroSolid
	subhead="Style Guide"
	subheadColor="text-gray-300"
	title="Shadows"
	titleColor="text-white"
	bodyCopy=""
	bodyColor="text-white"
	backgroundColor="bg-blue-500"
	gradient=""
/>

<section class="bg-gray-200 overflow-hidden">
	<div
		class="py-6 border-b border-gray-400 font-subheading uppercase font-medium"
	>
		<div class="w-full mx-auto px-16 text-gray-500">
			<div>
				<a class="inline-block" href="/style-guide/">Style Guide</a>
				<span class="inline-block mx-4">/</span>
				<a
					class="inline-block text-gray-600"
					href="/style-guide/shadows">Shadows</a
				>
			</div>
		</div>
	</div>
</section>

<section class="bg-gray-300">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
				<div
					class="my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 -mr-0.5"
				>
					<div class="shadow-sm bg-white rounded-lg p-3 pt-10">
						shadow-sm
					</div>
					<div class="shadow bg-white rounded-lg p-3 pt-10">
						shadow
					</div>
					<div class="shadow-md bg-white rounded-lg p-3 pt-10">
						shadow-md
					</div>
					<div class="shadow-lg bg-white rounded-lg p-3 pt-10">
						shadow-lg
					</div>
					<div class="shadow-xl bg-white rounded-lg p-3 pt-10">
						shadow-xl
					</div>
					<div class="shadow-2xl bg-white rounded-lg p-3 pt-10">
						shadow-2xl
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-white z-20">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
				<div class="px-4 sm:px-6 lg:px-8">
					<div class="sm:flex sm:items-center">
						<div class="sm:flex-auto">
							<h1
								class="text-base font-heading font-medium leading-6 text-gray-900"
							>
								Shadows
							</h1>
						</div>
					</div>
					<div class="mt-8 flow-root">
						<div
							class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
						>
							<div
								class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
							>
								<table class="min-w-full divide-y divide-gray-300">
									<thead>
										<tr class="font-heading">
											<th
												scope="col"
												class="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-0"
												>Class</th
											>
											<th
												scope="col"
												class="px-3 py-3.5 text-left text-sm font-medium text-gray-900"
												>REM</th
											>
											<th
												scope="col"
												class="px-3 py-3.5 text-left text-sm font-medium text-gray-900"
												>PX</th
											>
											<th
												scope="col"
												class="px-3 py-3.5 text-left text-sm font-medium text-gray-900"
												>Status</th
											>
										</tr>
									</thead>
									<tbody class="divide-y divide-gray-200">
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0"
												>X</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>0rem</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>px</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>-</td
											>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
