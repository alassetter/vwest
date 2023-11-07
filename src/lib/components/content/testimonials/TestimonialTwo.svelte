<script>
	import Img from '$lib/components/content/Image.svelte';
	import Heading from '$lib/components/element/Heading.svelte';
	import Text from '$lib/components/element/Text.svelte';
</script>

<section class="relative py-12 overflow-hidden">
	<div class="w-full mx-auto px-12">
		<div class="flex flex-wrap -mx-4 items-center mb-16">
			<div class="w-full xs:w-2/3 xs:inline-block px-4">
				<Heading
					asChild="false;"
					as="h3"
					fontfamily="font-heading"
					size="text-5xl"
					weight="font-normal"
				>
					Testimonials
				</Heading>
			</div>
			<div class="w-full xs:w-1/3 xs:inline-block px-4">
				<div class="flex items-center justify-end">
					<a
						class="inline-flex h-16 sm:h-18 w-16 sm:w-18 mr-8 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200"
						href="/"
					>
						<svg
							width="27"
							height="27"
							viewbox="0 0 27 27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.7051 7.12817L4.15732 13.6759L10.7051 20.2237"
								stroke="currentColor"
								stroke-width="1.61806"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M22.4941 13.6759H4.33949"
								stroke="currentColor"
								stroke-width="1.61806"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
					<a
						class="inline-flex h-16 sm:h-18 w-16 sm:w-18 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200"
						href="/"
					>
						<svg
							width="27"
							height="27"
							viewbox="0 0 27 27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M16.2949 7.12817L22.8427 13.6759L16.2949 20.2237"
								stroke="currentColor"
								stroke-width="1.61806"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M4.50586 13.6759H22.6605"
								stroke="currentColor"
								stroke-width="1.61806"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div class="flex items-center flex-xl-nowrap">
			<div
				class="flex-shrink-0 mr-6 inline-block w-full max-w-lg lg:max-w-4xl"
			>
				<div class="bg-gray-300 rounded-4xl overflow-hidden">
					<div class="flex flex-wrap">
						<div class="w-full lg:w-4/12">
							<Img
								src="/images/headshot-2.jpg"
								alt="sample 1"
								classes="block h-1/2 w-full rounded-4xl object-cover"
							/>
						</div>
						<div class="w-full lg:w-8/12 self-center">
							<div class="py-4 px-8 sm:p-16 max-w-2xl">
								<Text
									asChild="false"
									as="p"
									fontFamily="font-heading"
									size="text-xl"
									margin="mb-8"
									>“Nullam id dolor id nibh ultricies vehicula ut id
									elit. Donec sed odio dui. Sed posuere consectetur
									est at lobortis. Aenean eu leo quam."
								</Text>
								<span class="block">Wade Warren</span>
								<span class="block text-sm text-gray-500"
									>CEO, Company Name</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="flex-shrink-0 mr-6 inline-block w-full max-w-lg lg:max-w-4xl"
			>
				<div class="bg-gray-300 rounded-4xl overflow-hidden">
					<div class="flex flex-wrap">
						<div class="w-full lg:w-4/12">
							<Img
								src="/images/headshot-5.jpg"
								alt="sample 1"
								classes="block h-1/2 w-full rounded-4xl object-cover"
							/>
						</div>
						<div class="w-full lg:w-8/12 self-center">
							<div class="py-4 px-8 sm:p-16 max-w-2xl">
								<Text
									asChild="false"
									as="p"
									fontFamily="font-heading"
									size="text-xl"
									margin="mb-8"
									>“Nullam id dolor id nibh ultricies vehicula ut id
									elit. Donec sed odio dui. Sed posuere consectetur
									est at lobortis. Aenean eu leo quam."
								</Text>
								<span class="block">Julie Jackson</span>
								<span class="block text-sm text-gray-500"
									>CEO, Company Name</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
