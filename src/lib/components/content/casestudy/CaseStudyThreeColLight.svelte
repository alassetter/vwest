<script>
	import Paragraph from '$lib/components/content/Paragraph.svelte';
	import Heading from '$lib/components/content/Heading.svelte';
	import Img from '$lib/components/content/Image.svelte';
</script>

<!-- Additional Case Studies -->

<div class="max-w-full mx-auto px-12">
	<Heading
		tag="h5"
		customColor="text-gray-900"
		customFontWeight="font-normal"
		customFontSize="text-3xl"
		addClasses="mb-12">Additional Case Studies</Heading
	>
	<div class="flex flex-wrap -mx-3 mb-8">
		<!-- Case Thumbnail One -->
		<div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-8 lg:mb-0">
			<a class="group block pb-8" href="/work/casestudy/">
				<Img
					src="/images/mockup-hero.jpg"
					alt="sample 1"
					classes="md:transform group-hover:translate-y-4 block w-full mb-8 object-cover rounded-lg transition duration-500 aspect-3/2 shadow-sm group-hover:shadow-md"
				/>
				<div class="max-w-xs">
					<span
						class="w-full text-sm inline-block font-subheading font-medium uppercase mb-4"
						>October 2023
					</span>
					<Heading
						tag="h5"
						customColor="text-gray-900"
						customFontWeight="font-medium"
						customFontSize="text-xl"
						addClasses="mb-4 line-clamp-2 group-hover:text-blue-600"
						>Case Study One</Heading
					>
					<Paragraph
						color="text-gray-700"
						customSize="text-sm"
						addClasses="line-clamp-3 mb-6"
					>
						Vestibulum id ligula porta felis euismod semper. Maecenas
						faucibus mollis interdum. Vestibulum id ligula porta felis
						euismod semper. Maecenas faucibus mollis interdum
					</Paragraph>
					<a
						class="inline-flex leading-none font-medium text-black group-hover:text-blue-500 transition-all duration-400"
						href="/"
					>
						<span
							class="mr-4 uppercase font-subheading text-small font-medium tracking-wider"
							>Read More</span
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
			</a>
		</div>
		<!-- Case Thumbnail Two -->
		<div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-8 lg:mb-0">
			<a class="group block pb-8" href="/work/casestudytwo/">
				<Img
					src="/images/hero-ui-mockup.jpg"
					alt="sample 1"
					classes="md:transform group-hover:translate-y-4 block w-full mb-8 object-cover rounded-lg transition duration-500 aspect-3/2 shadow-sm group-hover:shadow-md"
				/>
				<div class="max-w-xs">
					<span
						class="w-full text-sm inline-block font-subheading font-medium uppercase mb-4"
						>October 2023
					</span>
					<Heading
						tag="h5"
						customColor="text-gray-900"
						customFontWeight="font-medium"
						customFontSize="text-xl"
						addClasses="mb-4 line-clamp-2 group-hover:text-blue-600"
						>Case Study Two</Heading
					>
					<Paragraph
						color="text-gray-700"
						customSize="text-sm"
						addClasses="line-clamp-3 mb-6"
					>
						Vestibulum id ligula porta felis euismod semper. Maecenas
						faucibus mollis interdum. Vestibulum id ligula porta felis
						euismod semper. Maecenas faucibus mollis interdum
					</Paragraph>
					<a
						class="inline-flex leading-none font-medium text-black group-hover:text-blue-500 transition-all duration-400"
						href="/work/casestudytwo/"
					>
						<span
							class="mr-4 uppercase font-subheading text-small font-medium tracking-wider"
							>Read More</span
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
			</a>
		</div>
		<!-- Case Thumbnail Three -->
		<div class="w-full md:w-1/2 lg:w-1/3 px-3">
			<a class="group block pb-8" href="/work/casestudythree/">
				<Img
					src="/images/phone-ui-sq.jpg"
					alt="sample 1"
					classes="md:transform group-hover:translate-y-4 block w-full mb-8 object-cover rounded-lg transition duration-500 aspect-3/2 shadow-sm group-hover:shadow-md"
				/>
				<div class="max-w-xs">
					<span
						class="w-full text-sm inline-block font-subheading font-medium uppercase mb-4"
						>October 2023
					</span>
					<Heading
						tag="h5"
						customColor="text-gray-900"
						customFontWeight="font-medium"
						customFontSize="text-xl"
						addClasses="mb-4 line-clamp-2 group-hover:text-blue-600"
						>Case Study Three</Heading
					>
					<Paragraph
						color="text-gray-700"
						customSize="text-sm"
						addClasses="line-clamp-3 mb-6"
					>
						Vestibulum id ligula porta felis euismod semper. Maecenas
						faucibus mollis interdum. Vestibulum id ligula porta felis
						euismod semper. Maecenas faucibus mollis interdum
					</Paragraph>
					<a
						class="inline-flex leading-none font-medium text-black group-hover:text-blue-500 transition-all duration-400"
						href="/"
					>
						<span
							class="mr-4 uppercase font-subheading text-small font-medium tracking-wider"
							>Read More</span
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
			</a>
		</div>
	</div>
</div>
