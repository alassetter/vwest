<script>
	import TwoColuTxImage from '$lib/components/content/TwoColuTxImage.svelte';
	import ThreeColIconCard from '$lib/components/content/cards/ThreeColIconCard.svelte';
	import ThreeColuText from '$lib/components/content/ThreeColuText.svelte';
	import Heading from '$lib/components/element/Heading.svelte';
	import Text from '$lib/components/element/Text.svelte';
	import SubHead from '$lib/components/element/SubHead.svelte';
	import Img from '$lib/components/content/Image.svelte';
</script>

<!-- Two Columns - Text and photo and aspect ratio -->
<TwoColuTxImage />

<!-- Three Columns - Text and icon-->
<ThreeColIconCard />

<!-- Three Columns - Text -->
<ThreeColuText />

<!-- 2 Column Text Only -->
<section class="bg-gray-900 overflow-hidden">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full mx-auto">
				<Heading
					asChild="false;"
					as="h2"
					fontfamily="font-heading"
					size="text-6xl"
					weight="font-normal"
					color="text-white"
					classes="mb-16"
				>
					Content
				</Heading>

				<div class="flex flex-wrap">
					<div
						class="w-full lg:w-1/2 mb-8 xs:pr-0 lg:pr-4 lg:mb-0 group"
					>
						<div
							class="flex flex-col mx-auto lg:max-w-none px-8 py-16 bg-black rounded-4xl group-hover:bg-gray-800 transition-all duration-150"
						>
							<div class="max-w-sm mx-auto mb-auto text-center">
								<SubHead
									asChild="false;"
									as="h4"
									fontfamily="font-subheading"
									size="text-subhead"
									weight="font-medium"
									color="text-gray-400"
									classes="uppercase mb-4"
								>
									Solution
								</SubHead>

								<Heading
									asChild="false;"
									as="h3"
									fontfamily="font-heading"
									size="text-3xl"
									weight="font-normal"
									color="text-white"
									classes="mb-8"
								>
									Bespoke Content Management System
								</Heading>

								<Text
									asChild="false"
									as="p"
									size="text-base"
									color="text-gray-500"
									margin="mt-8"
								>
									Donec sed odio dui. Donec sed odio dui. Aenean eu
									leo quam. Pellentesque ornare sem lacinia quam
									venenatis vestibulum. Duis mollis.
								</Text>

								<a
									class="group inline-flex py-4 px-6 items-center justify-center font-subheading uppercase tracking-widest leading-none font-medium text-white mt-8 group-hover:text-black border border-white rounded-full group-hover:bg-white transition duration-200"
									href="/"
								>
									<span class="mr-4">Button</span>
									<span
										class="group-hover:rotate-45 transform transition duration-100"
									>
										<svg
											width="10"
											height="10"
											viewbox="0 0 10 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9 1L1 9"
												stroke="currentColor"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M9 8.33571V1H1.66429"
												stroke="currentColor"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
					<div class="w-full lg:w-1/2 xs:pl-0 lg:pl-4 group">
						<div
							class="flex flex-col mx-auto lg:max-w-none px-8 py-16 bg-black rounded-4xl group-hover:bg-gray-800 transition-all duration-150"
						>
							<div class="max-w-sm mx-auto mb-auto text-center">
								<SubHead
									asChild="false;"
									as="h4"
									fontfamily="font-subheading"
									size="text-subhead"
									weight="font-medium"
									color="text-gray-400"
									classes="uppercase mb-4"
								>
									Solution
								</SubHead>

								<Heading
									asChild="false;"
									as="h3"
									fontfamily="font-heading"
									size="text-3xl"
									weight="font-normal"
									color="text-white"
									classes="mb-8"
								>
									Bespoke Content Management System
								</Heading>

								<Text
									asChild="false"
									as="p"
									size="text-base"
									color="text-gray-500"
									margin="mt-8"
								>
									Donec sed odio dui. Donec sed odio dui. Aenean eu
									leo quam. Pellentesque ornare sem lacinia quam
									venenatis vestibulum. Duis mollis.
								</Text>

								<a
									class="group inline-flex py-4 px-6 items-center justify-center font-subheading uppercase tracking-widest leading-none font-medium text-white mt-8 group-hover:text-black border border-white rounded-full group-hover:bg-white transition duration-200"
									href="/"
								>
									<span class="mr-4">Button</span>
									<span
										class="group-hover:rotate-45 transform transition duration-100"
									>
										<svg
											width="10"
											height="10"
											viewbox="0 0 10 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9 1L1 9"
												stroke="currentColor"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M9 8.33571V1H1.66429"
												stroke="currentColor"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 2 Column Text Only -->
<section class="bg-gray-300 overflow-hidden">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full mx-auto">
				<Heading
					asChild="false;"
					as="h2"
					fontfamily="font-heading"
					size="text-6xl"
					weight="font-normal"
					color="text-white"
					classes="mb-16"
				>
					Content
				</Heading>

				<div class="flex flex-wrap">
					<div
						class="w-full lg:w-1/2 mb-8 xs:pr-0 lg:pr-4 lg:mb-0 group"
					>
						<div
							class="flex flex-col mx-auto lg:max-w-none px-8 pt-8 pb-8 bg-black rounded-4xl group-hover:bg-gray-800 transition-all duration-150"
						>
							<Img
								src="/images/hero-mockup-2.jpg"
								alt="sample 1"
								classes="block lg:ml-auto aspect-[4/3] object-cover rounded-xl overflow-hidden"
							/>

							<div class="max-w-sm mx-auto mb-auto mt-16 text-center">
								<SubHead
									asChild="false;"
									as="h4"
									fontfamily="font-subheading"
									size="text-subhead"
									weight="font-medium"
									color="text-gray-400"
									classes="uppercase mb-4"
								>
									Solution
								</SubHead>

								<Heading
									asChild="false;"
									as="h3"
									fontfamily="font-heading"
									size="text-3xl"
									weight="font-normal"
									color="text-white"
									classes="mb-8"
								>
									Bespoke Content Management System
								</Heading>

								<Text
									asChild="false"
									as="p"
									size="text-base"
									color="text-gray-500"
									margin="mt-8"
								>
									Donec sed odio dui. Donec sed odio dui. Aenean eu
									leo quam. Pellentesque ornare sem lacinia quam
									venenatis vestibulum. Duis mollis.
								</Text>

								<a
									class="group inline-flex py-4 px-6 items-center justify-center font-subheading uppercase tracking-widest leading-none font-medium text-white mt-8 mb-8 group-hover:text-black border border-white rounded-full group-hover:bg-white transition duration-200"
									href="/"
								>
									<span class="mr-4">Button</span>
									<span
										class="group-hover:rotate-45 transform transition duration-100"
									>
										<svg
											width="10"
											height="10"
											viewbox="0 0 10 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9 1L1 9"
												stroke="currentColor"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M9 8.33571V1H1.66429"
												stroke="currentColor"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
					<div class="w-full lg:w-1/2 xs:pl-0 lg:pl-4 group">
						<div
							class="flex flex-col mx-auto lg:max-w-none px-8 pt-8 pb-8 bg-black rounded-4xl group-hover:bg-gray-800 transition-all duration-150"
						>
							<Img
								src="/images/hero-mockup-2.jpg"
								alt="sample 1"
								classes="block lg:ml-auto aspect-[4/3] object-cover rounded-xl overflow-hidden"
							/>

							<div class="max-w-sm mx-auto mb-auto mt-16 text-center">
								<SubHead
									asChild="false;"
									as="h4"
									fontfamily="font-subheading"
									size="text-subhead"
									weight="font-medium"
									color="text-gray-400"
									classes="uppercase mb-4"
								>
									Solution
								</SubHead>

								<Heading
									asChild="false;"
									as="h3"
									fontfamily="font-heading"
									size="text-3xl"
									weight="font-normal"
									color="text-white"
									classes="mb-8"
								>
									Bespoke Content Management System
								</Heading>

								<Text
									asChild="false"
									as="p"
									size="text-base"
									color="text-gray-500"
									margin="mt-8"
								>
									Donec sed odio dui. Donec sed odio dui. Aenean eu
									leo quam. Pellentesque ornare sem lacinia quam
									venenatis vestibulum. Duis mollis.
								</Text>

								<a
									class="group inline-flex py-4 px-6 items-center justify-center font-subheading uppercase tracking-widest leading-none font-medium text-white mt-8 mb-8 group-hover:text-black border border-white rounded-full group-hover:bg-white transition duration-200"
									href="/"
								>
									<span class="mr-4">Button</span>
									<span
										class="group-hover:rotate-45 transform transition duration-100"
									>
										<svg
											width="10"
											height="10"
											viewbox="0 0 10 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9 1L1 9"
												stroke="currentColor"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M9 8.33571V1H1.66429"
												stroke="currentColor"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="w-full lg:w-7/12 px-4">
	<div
		class="flex flex-col xs:flex-row mt-10 mb-10 items-center justify-end"
	>
		<div class="inline-flex items-center">
			<span
				class="inline-block mr-8 text-sm leading-none font-subheading font-medium uppercase tracking-widest text-gray-500"
				>Technology</span
			>
			<span
				class="inline-block py-2 px-5 mr-4 text-xs leading-none font-subheading font-semibold uppercase text-gray-400 tracking-wider bg-white border border-gray-300 rounded-md"
				>Tag Element</span
			>
			<span
				class="inline-block py-2 px-6 mr-4 leading-none text-xs font-subheading font-semibold uppercase text-gray-400 tracking-wider bg-white border border-gray-300 rounded-full"
				>Tag Element</span
			>
			<a
				class="group inline-flex py-3 px-6 leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200"
				href="/"
			>
				<span
					class="mr-4 uppercase font-subheading text-small font-medium tracking-wider"
					>Button</span
				>
				<span class="rotate-45 transform mt-0.5">
					<svg
						width="10"
						height="10"
						viewbox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 1L1 9"
							stroke="currentColor"
							stroke-width="1.3"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M9 8.33571V1H1.66429"
							stroke="currentColor"
							stroke-width="1.3"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
			</a>
		</div>
	</div>
</div>

<!-- Two Col -->
<section class="bg-gray-100 overflow-hidden">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full mx-auto">
				<div class="flex flex-wrap -mx-4 items-end mb-20">
					<div class="w-full lg:w-5/12 px-4 mb-20 lg:mb-0">
						<h1
							class="font-heading text-6xl sm:text-8xl lg:text-10xl tracking-tighter"
						>
							Case Studies
						</h1>
					</div>
					<div class="w-full lg:w-7/12 px-4">
						<div
							class="flex flex-col xs:flex-row mb-10 items-center justify-end"
						>
							<div class="inline-flex items-center">
								<a
									class="group inline-flex py-3 px-6 leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200"
									href="/"
								>
									<span
										class="mr-4 uppercase font-subheading text-small font-medium tracking-wider"
										>Button</span
									>
									<span class="rotate-45 transform mt-0.5">
										<svg
											width="10"
											height="10"
											viewbox="0 0 10 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9 1L1 9"
												stroke="currentColor"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M9 8.33571V1H1.66429"
												stroke="currentColor"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
