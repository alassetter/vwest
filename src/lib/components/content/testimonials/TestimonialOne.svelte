<script>
	import Heading from '$lib/components/element/Heading.svelte';
	import Text from '$lib/components/element/Text.svelte';
	import SubHead from '$lib/components/element/SubHead.svelte';
	import Img from '$lib/components/content/Image.svelte';
</script>

<div>
	<div class="w-full mx-auto p-16">
		<SubHead
			asChild="false;"
			as="h5"
			fontfamily="font-subheading"
			size="text-subhead"
			weight="font-semibold"
			color="text-gray-600"
			classes="block mb-4 uppercase"
		>
			Testimonials
		</SubHead>
		<Heading
			asChild="false;"
			as="h3"
			fontfamily="font-heading"
			size="text-4xl"
			weight="font-normal"
			classes="mb-8"
		>
			Don't just take our word for it...
		</Heading>
		<div>
			<Text
				asChild="false"
				as="p"
				fontFamily="font-heading"
				size="text-2xl"
				color="text-gray-800"
				margin="mb-10"
				classes="max-w-5xl"
			>
				“Vortex West is composed of a team of <span
					class="italic text-blue-600">talented engineers</span
				> with a passion for excellence. They are sharply focused on our
				business needs and understand our continually evolving preferences
				within our industry."
			</Text>

			<div class="sm:flex items-center justify-between">
				<div class="flex mb-10 items-center xs:block sm:inline-flex">
					<Img
						src="/images/planned-parenthood-icon.svg"
						alt="sample 1"
						classes="mr-8 h-24 xs:h-16 block rounded-2xl object-cover"
					/>
					<div>
						<span
							class="block font-heading text-lg mt:0 xs:mt-8 md:mt-0"
							>Ron Rodenberg</span
						>
						<span class="block text-xs text-gray-600"
							>Director Of Development</span
						>
						<span class="block text-xs text-gray-600"
							>Planned Parenthood</span
						>
					</div>
				</div>
				<div>
					<a
						class="inline-flex h-16 sm:h-18 w-16 sm:w-18 mr-6 sm:mr-9 items-center justify-center text-gray-900 hover:text-white hover:bg-blue-600 border border-gray-900 hover:border-blue-600 rounded-full transition duration-400"
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
						class="inline-flex h-16 sm:h-18 w-16 sm:w-18 items-center justify-center text-gray-900 hover:text-white hover:bg-blue-600 border border-gray-900 hover:border-blue-600 rounded-full transition duration-200"
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
	</div>
</div>
