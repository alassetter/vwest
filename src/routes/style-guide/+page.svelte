<script>
	const placeholder = '/images/placeholder.svg';
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
	import GridComponent from '$lib/components/layout/Grid.svelte';
</script>

<HeroSolid
	subhead="Version 0.0"
	subheadColor="text-gray-300"
	title="Style Guide"
	titleColor="text-white"
	bodyCopy=""
	bodyColor="text-white"
	backgroundColor="bg-blue-500"
	gradient=""
/>

<section class="bg-gray-10">
	<div class="pt-24 pb-24">
		<!-- Global Padding -->
		<div class="px-12">
			<GridComponent
				gridCols="grid-cols-1 sm:grid-cols-12 md:grid-cols-12"
				gap="gap-4"
				padding=""
				bgColor="bg-white"
				rounded=""
				shadow=""
			>
				<div class="col-span-4 sm:col-span-6 md:col-span-8">
					<!-- Content-->
					<!-- Primary Typeface -->
					<section>
						<div class="pb-5">
							<h3
								class="text-black font-semibold text-base subpixel-antialiased"
							>
								Primary Typeface: <span class="text-blue-500">
									Space Grotesk</span
								>
							</h3>
						</div>
						<div class="py-3 space-y-6 mt-12 font-spaceg">
							<div class="grid grid-cols-3 items-end lg:grid-cols-4">
								<div>
									<span class="text-gray-500 font-spaceg text-md"
										>Display</span
									>
								</div>
								<div class="col-span-2 lg:col-span-3">
									<span
										class="font-serif text-6xl font-medium tracking-tighter text-blue-500"
										>Display</span
									>
								</div>
							</div>
							<div class="grid grid-cols-3 items-end lg:grid-cols-4">
								<div>
									<span class="text-gray-500 text-md">Header's</span>
								</div>
								<div
									class="col-span-2 lg:col-span-3 font-spaceg text-gray-800"
								>
									<span class="font-spaceg text-5xl">Header 1</span>
									<h2 class="text-4xl">Header 2</h2>
									<h3 class="text-2xl">Header 3</h3>
									<h4 class="text-xl">Header 4</h4>
									<h5 class="text-lg">Header 5</h5>
								</div>
							</div>
							<div class="grid grid-cols-3 items-end lg:grid-cols-4">
								<div>
									<span class="text-gray-500 text-md">Link</span>
								</div>
								<div class="col-span-2 lg:col-span-3">
									<span
										class="font-serif text-gray-500 hover:text-gray-900 text-sm underline"
										>Link text</span
									>
								</div>
							</div>
							<div class="grid grid-cols-3 items-end lg:grid-cols-4">
								<div>
									<span class="text-gray-500 text-md">Subtitle</span>
								</div>
								<div class="col-span-2 lg:col-span-3">
									<span
										class="font-spaceg text-base font-medium uppercase"
										>Subtitle text</span
									>
								</div>
							</div>
							<div class="grid grid-cols-3 items-end lg:grid-cols-4">
								<div>
									<span class="text-gray-500 text-md"
										>Paragraph - Base</span
									>
								</div>
								<div class="col-span-2 lg:col-span-3">
									<span class="text-base"
										>Previously, domains had to be removed from a
										project before being added to a new one. With this
										update, if you attempt to move a live domain to a
										new project, a prompt will appear offering to move
										the in-use domain and all associated redirects to
										the selected project.</span
									>
								</div>
							</div>

							<div
								class="grid grid-cols-3 items-end lg:grid-cols-4 align-text-top"
							>
								<div>
									<span class="text-gray-500 text-md align-text-top"
										>Paragraph - Large</span
									>
								</div>
								<div class="col-span-2 lg:col-span-3">
									<span class="text-lg"
										>Previously, domains had to be removed from a
										project before being added to a new one. With this
										update, if you attempt to move a live domain to a
										new project, a prompt will appear offering to move
										the in-use domain and all associated redirects to
										the selected project.</span
									>
								</div>
							</div>

							<div
								class="grid grid-cols-3 items-end lg:grid-cols-4 align-text-top"
							>
								<div>
									<span class="text-gray-500 text-md align-text-top"
										>Paragraph - Medium</span
									>
								</div>
								<div class="col-span-2 lg:col-span-3">
									<span class="text-md"
										>Previously, domains had to be removed from a
										project before being added to a new one. With this
										update, if you attempt to move a live domain to a
										new project, a prompt will appear offering to move
										the in-use domain and all associated redirects to
										the selected project.</span
									>
								</div>
							</div>

							<div class="grid grid-cols-3 items-end lg:grid-cols-4">
								<div>
									<span class="text-gray-500 text-md">Caption</span>
								</div>
								<div class="col-span-2 lg:col-span-3">
									<span class="text-sm"
										><em>Caption about something</em></span
									>
								</div>
							</div>
							<div class="grid grid-cols-3 items-end lg:grid-cols-4">
								<div>
									<span class="text-gray-500 text-md">Code</span>
								</div>
								<div class="col-span-2 lg:col-span-3">
									<code class="text-xs font-mono prose"
										>styleguide.config.js</code
									>
								</div>
							</div>
							<div class="grid grid-cols-3 items-end lg:grid-cols-4">
								<div>
									<span class="text-gray-500 text-md">List</span>
								</div>
								<div class="col-span-2 lg:col-span-3">
									<ul class="list-disc" role="list">
										<li>List Item One</li>
										<li>List Item Two</li>
										<li>List Item Three</li>
										<li>List Item Four</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					<!-- Secondary Typeface -->
					<div class="p-4 rounded-md shadow text-gray-800">
						<section>
							<div
								class="border-gray-300 border-b pb-5 lg:mt-24 mt-12"
							>
								<h3 class="text-black font-semibold text-base">
									Secondary Typeface: <span class="text-blue-500">
										Inter</span
									>
								</h3>
							</div>
							<div class="py-3 space-y-6 mt-12">
								<div
									class="grid grid-cols-3 items-end lg:grid-cols-4"
								>
									<div>
										<span class="text-gray-500 text-md">Display</span>
									</div>
									<div class="col-span-2 lg:col-span-3">
										<span class="text-4xl font-semibold text-blue-500"
											>Display</span
										>
									</div>
								</div>
								<div
									class="grid grid-cols-3 items-end lg:grid-cols-4"
								>
									<div>
										<span class="text-gray-500 text-md">Header's</span
										>
									</div>
									<div class="col-span-2 lg:col-span-3">
										<span class="text-4xl font-semibold"
											>Header 1</span
										>
										<h2 class="text-3xl font-semibold">Header 2</h2>
										<h3 class="text-2xl font-semibold">Header 3</h3>
										<h4 class="text-xl font-semibold">Header 4</h4>
										<h5 class="text-lg font-semibold">Header 5</h5>
									</div>
								</div>
								<div
									class="grid grid-cols-3 items-end lg:grid-cols-4"
								>
									<div>
										<span class="text-gray-500 text-md">Link</span>
									</div>
									<div class="col-span-2 lg:col-span-3">
										<span
											class="text-gray-500 hover:text-gray-900 text-sm underline"
											>Link text</span
										>
									</div>
								</div>
								<div
									class="grid grid-cols-3 items-end lg:grid-cols-4"
								>
									<div>
										<span class="text-gray-500 text-md">Subtitle</span
										>
									</div>
									<div class="col-span-2 lg:col-span-3">
										<span class="text-base font-medium text-gray-900"
											>Subtitle text</span
										>
									</div>
								</div>
								<div
									class="grid grid-cols-3 items-end lg:grid-cols-4"
								>
									<div>
										<span class="text-gray-500 text-md"
											>Paragraph - Base</span
										>
									</div>
									<div class="col-span-2 lg:col-span-3">
										<span class="text-base text-gray-500"
											>Previously, domains had to be removed from a
											project before being added to a new one. With
											this update, if you attempt to move a live
											domain to a new project, a prompt will appear
											offering to move the in-use domain and all
											associated redirects to the selected project.</span
										>
									</div>
								</div>

								<div
									class="grid grid-cols-3 items-end lg:grid-cols-4 align-text-top"
								>
									<div>
										<span class="text-gray-500 text-md align-text-top"
											>Paragraph - Large</span
										>
									</div>
									<div class="col-span-2 lg:col-span-3">
										<span class="text-lg text-gray-500"
											>Previously, domains had to be removed from a
											project before being added to a new one. With
											this update, if you attempt to move a live
											domain to a new project, a prompt will appear
											offering to move the in-use domain and all
											associated redirects to the selected project.</span
										>
									</div>
								</div>

								<div
									class="grid grid-cols-3 items-end lg:grid-cols-4"
								>
									<div>
										<span class="text-gray-500 text-md">Caption</span>
									</div>
									<div class="col-span-2 lg:col-span-3">
										<span class="text-gray-500 text-xs"
											>Caption about something</span
										>
									</div>
								</div>
								<div
									class="grid grid-cols-3 items-end lg:grid-cols-4"
								>
									<div>
										<span class="text-gray-500 text-md">Code</span>
									</div>
									<div class="col-span-2 lg:col-span-3">
										<code
											class="text-gray-500 text-xs font-mono prose"
											>styleguide.config.js</code
										>
									</div>
								</div>
								<div
									class="grid grid-cols-3 items-end lg:grid-cols-4"
								>
									<div>
										<span class="text-gray-500 text-md">List</span>
									</div>
									<div class="col-span-2 lg:col-span-3">
										<ul
											class="prose-sm text-gray-500 list-disc"
											role="list"
										>
											<li>List Item One</li>
											<li>List Item Two</li>
											<li>List Item Three</li>
											<li>List Item Four</li>
										</ul>
									</div>
								</div>
							</div>
						</section>

						<!-- Brand Palette -->
						<section>
							<div
								class="border-gray-300 border-b pb-5 lg:mt-24 mt-12"
							>
								<h3 class="text-gray-800 font-semibold text-lg">
									Brand Palette:
								</h3>
							</div>
							<div
								class="grid grid-cols-2 mt-12 gap-2 lg:grid-cols-3"
							>
								<div class="space-y-2">
									<div class="pb-4">
										<h3 class="text-gray-500 font-semibold text-base">
											Black & White
										</h3>
									</div>
									<div
										class="flex items-center text-gray-400 text-xs p-6 border rounded-lg justify-between bg-white"
									>
										<span>#</span>
										<span>White</span>
									</div>
									<div
										class="flex items-center text-gray-500 text-xs p-6 border rounded-lg justify-between bg-black"
									>
										<span>#</span>
										<span>Black</span>
									</div>
									<div
										class="flex items-center text-gray-800 text-xs p-6 border rounded-lg justify-between bg-gradient-to-t from-gray-500 via-gray-400 to-gray-300"
									>
										<span>#</span>
										<span>3 Color Gradient</span>
									</div>
									<div
										class="flex items-center text-gray-200 text-xs p-6 border rounded-lg justify-between bg-gradient-to-t from-gray-500 to-gray-400"
									>
										<span>#</span>
										<span>2 Color Gradient</span>
									</div>
								</div>

								<!-- Color: Blue -->
								<div>
									<div class="pb-6">
										<h3 class="text-gray-500 font-semibold text-base">
											Blue
										</h3>
									</div>
									<div
										class="border-solid border-2 border-gray-200 rounded-t-lg"
									>
										<div
											class="flex items-center text-gray-400 text-xs p-6 rounded-t-lg justify-between bg-blue-50"
										>
											<span>#</span>
											<span>50</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-blue-100"
										>
											<span>#</span>
											<span>100</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-blue-200"
										>
											<span>#</span>
											<span>200</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-blue-300"
										>
											<span>#</span>
											<span>300</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-blue-400"
										>
											<span>#</span>
											<span>400</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-blue-500"
										>
											<span>#</span>
											<span>500</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-blue-600"
										>
											<span>#</span>
											<span>600</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-blue-700"
										>
											<span>#</span>
											<span>700</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-blue-800"
										>
											<span>#</span>
											<span>800</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 rounded-b-lg justify-between bg-blue-900"
										>
											<span>#</span>
											<span>900</span>
										</div>
									</div>
								</div>

								<!-- Color: Gray -->
								<div>
									<div class="pb-6">
										<h3 class="text-gray-500 font-semibold text-base">
											Gray
										</h3>
									</div>
									<div
										class="border-solid border-2 border-gray-200 rounded-t-lg"
									>
										<div
											class="flex items-center text-gray-400 text-xs p-6 rounded-t-lg justify-between bg-gray-50"
										>
											<span>#</span>
											<span>50</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-gray-100"
										>
											<span>#</span>
											<span>100</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-gray-200"
										>
											<span>#</span>
											<span>200</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-gray-300"
										>
											<span>#</span>
											<span>300</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-gray-400"
										>
											<span>#</span>
											<span>400</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-gray-500"
										>
											<span>#</span>
											<span>500</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-gray-600"
										>
											<span>#</span>
											<span>600</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-gray-700"
										>
											<span>#</span>
											<span>700</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-gray-800"
										>
											<span>#</span>
											<span>800</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 rounded-b-lg justify-between bg-gray-900"
										>
											<span>#</span>
											<span>900</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						<!-- Semantic Palette -->
						<section>
							<div
								class="border-gray-300 border-b pb-5 lg:mt-24 mt-12"
							>
								<h3 class="text-gray-800 font-semibold text-lg">
									Semantic Palette:
								</h3>
							</div>
							<div
								class="grid grid-cols-2 mt-12 gap-2 lg:grid-cols-3"
							>
								<!-- Color: Green -->
								<div>
									<div class="pb-6">
										<h3 class="text-gray-500 font-semibold text-base">
											Green
										</h3>
									</div>
									<div
										class="border-solid border-2 border-gray-200 rounded-t-lg"
									>
										<div
											class="flex items-center text-gray-400 text-xs p-6 rounded-t-lg justify-between bg-green-50"
										>
											<span>#</span>
											<span>50</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-green-100"
										>
											<span>#</span>
											<span>100</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-green-200"
										>
											<span>#</span>
											<span>200</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-green-300"
										>
											<span>#</span>
											<span>300</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-green-400"
										>
											<span>#</span>
											<span>400</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-green-500"
										>
											<span>#</span>
											<span>500</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-green-600"
										>
											<span>#</span>
											<span>600</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-green-700"
										>
											<span>#</span>
											<span>700</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-green-800"
										>
											<span>#</span>
											<span>800</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 rounded-b-lg justify-between bg-green-900"
										>
											<span>#</span>
											<span>900</span>
										</div>
									</div>
								</div>

								<!-- Color: Red -->
								<div>
									<div class="pb-6">
										<h3 class="text-gray-500 font-semibold text-base">
											Red
										</h3>
									</div>
									<div
										class="border-solid border-2 border-gray-200 rounded-t-lg"
									>
										<div
											class="flex items-center text-gray-400 text-xs p-6 rounded-t-lg justify-between bg-red-50"
										>
											<span>#</span>
											<span>50</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-red-100"
										>
											<span>#</span>
											<span>100</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-red-200"
										>
											<span>#</span>
											<span>200</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-red-300"
										>
											<span>#</span>
											<span>300</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-red-400"
										>
											<span>#</span>
											<span>400</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-red-500"
										>
											<span>#</span>
											<span>500</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-red-600"
										>
											<span>#</span>
											<span>600</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-red-700"
										>
											<span>#</span>
											<span>700</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-red-800"
										>
											<span>#</span>
											<span>800</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 rounded-b-lg justify-between bg-red-900"
										>
											<span>#</span>
											<span>900</span>
										</div>
									</div>
								</div>

								<!-- Color: Gray -->
								<div>
									<div class="pb-6">
										<h3 class="text-gray-500 font-semibold text-base">
											Yellow
										</h3>
									</div>
									<div
										class="border-solid border-2 border-gray-200 rounded-t-lg"
									>
										<div
											class="flex items-center text-gray-400 text-xs p-6 rounded-t-lg justify-between bg-yellow-50"
										>
											<span>#</span>
											<span>50</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-yellow-100"
										>
											<span>#</span>
											<span>100</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-yellow-200"
										>
											<span>#</span>
											<span>200</span>
										</div>
										<div
											class="flex items-center text-gray-400 text-xs p-6 justify-between bg-yellow-300"
										>
											<span>#</span>
											<span>300</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-yellow-400"
										>
											<span>#</span>
											<span>400</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-yellow-500"
										>
											<span>#</span>
											<span>500</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-yellow-600"
										>
											<span>#</span>
											<span>600</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-yellow-700"
										>
											<span>#</span>
											<span>700</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 justify-between bg-yellow-800"
										>
											<span>#</span>
											<span>800</span>
										</div>
										<div
											class="flex items-center text-gray-200 text-xs p-6 rounded-b-lg justify-between bg-yellow-900"
										>
											<span>#</span>
											<span>900</span>
										</div>
									</div>
								</div>
							</div>
						</section>

						<!-- Buttons -->
						<section>
							<div
								class="border-gray-300 border-b pb-5 lg:mt-24 mt-12"
							>
								<h3 class="text-gray-800 font-semibold text-lg">
									Buttons
								</h3>
							</div>
							<div
								class="items-center inline-flex flex-wrap gap-2 mt-10 w-full"
							>
								<a
									class="text-sm flex font-semibold items-center justify-center px-4 py-2 rounded-md transition-all h-10 text-white bg-gray-900 hover:bg-gray-800"
									href="/">Primary button</a
								><a
									class="text-sm flex font-semibold items-center justify-center px-4 py-2 rounded-md transition-all h-10 text-white bg-gradient-to-b from-gray-500 hover:to-gray-700 to-gray-600"
									href="/">Secondary button</a
								><a
									class="text-gray-600 text-sm bg-white border border-gray-300 flex font-semibold hover:text-gray-500 items-center justify-center px-4 py-2 rounded-full transition-all h-10"
									href="/">Tertiary button</a
								>
								<div
									class="p-4 bg-gradient-to-b from-gray-500 hover:to-gray-700 rounded-xl to-gray-600"
								>
									<a
										class="text-sm flex font-semibold items-center justify-center px-4 py-2 rounded-md transition-all h-10 text-white bg-gradient-to-b from-white/[.105] hover:to-white/[.25] ring-1 ring-inset ring-white/20 to-white/[.15] shadow-sm"
										href="/">Transparent button</a
									>
								</div>
							</div>
						</section>
					</div>
				</div>
				<div class="col-span-4 sm:col-span-6 md:col-span-1">
					<!-- Content for the 1/4 column -->
					<div class="hidden p-4 rounded-md shadow text-white" />
				</div>
				<div class="col-span-4 sm:col-span-6 md:col-span-3">
					<!-- Content for the 1/4 column -->
					<div class="p-8">
						<nav class="flex flex-1 flex-col">
							<ul role="list" class="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" class="-mx-4 space-y-1">
										<li>
											<a
												href="style-guide/colors"
												class="text-gray-600 hover:blue-600 hover:bg-gray-300 group flex gap-x-3 rounded-md p-2 text-sm font-subheading leading-6 font-semibold"
											>
												Colors
											</a>
										</li>
										<li>
											<a
												href="style-guide/border"
												class="text-gray-600 hover:blue-600 hover:bg-gray-300 group flex gap-x-3 rounded-md p-2 text-sm font-subheading leading-6 font-semibold"
											>
												Borders
											</a>
										</li>
										<li>
											<a
												href="style-guide/buttons"
												class="text-gray-600 hover:blue-600 hover:bg-gray-300 group flex gap-x-3 rounded-md p-2 text-sm font-subheading leading-6 font-semibold"
											>
												Buttons
											</a>
										</li>
										<li>
											<a
												href="style-guide/grid"
												class="text-gray-600 hover:blue-600 hover:bg-gray-300 group flex gap-x-3 rounded-md p-2 text-sm font-subheading leading-6 font-semibold"
											>
												Grid
											</a>
										</li>
										<li>
											<a
												href="style-guide/shadows"
												class="text-gray-600 hover:blue-600 hover:bg-gray-300 group flex gap-x-3 rounded-md p-2 text-sm font-subheading leading-6 font-semibold"
											>
												Shadows
											</a>
										</li>
										<li>
											<a
												href="style-guide/spacing"
												class="text-gray-600 hover:blue-600 hover:bg-gray-300 group flex gap-x-3 rounded-md p-2 text-sm font-subheading leading-6 font-semibold"
											>
												Spacing
											</a>
										</li>
										<li>
											<a
												href="style-guide/typography"
												class="text-gray-600 hover:blue-600 hover:bg-gray-300 group flex gap-x-3 rounded-md p-2 text-sm font-subheading leading-6 font-semibold"
											>
												Typography
											</a>
										</li>
										<li>
											<a
												href="style-guide/width"
												class="text-gray-600 hover:blue-600 hover:bg-gray-300 group flex gap-x-3 rounded-md p-2 text-sm font-subheading leading-6 font-semibold"
											>
												Width
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</GridComponent>
		</div>
	</div>
</section>
