<script>
	import Paragraph from '$lib/components/content/Paragraph.svelte';
	import Heading from '$lib/components/content/Heading.svelte';
	import SubHeading from '$lib/components/content/Subheading.svelte';
	import Img from '$lib/components/content/Image.svelte';
</script>
<div>
	<div class="w-full mx-auto px-12">
    <SubHeading
    tag="h4"
    customColor="text-gray-400"
    customSize="text-subhead"
    customFontFamily="font-subheading"
    customFontWeight="font-medium"
    customTextDecoration="uppercase"
    addClasses="block mb-4"
    >Testimonials
  </SubHeading>
  <Heading
    tag="h3"
    customColor="text-gray-900"
    customFontWeight="font-normal"
    customFontSize="text-4xl"
    addClasses="mb-20"
    >What our clients have to say.</Heading
  >

		<div>
    <Paragraph
    fontFamily="font-heading"
    color="text-gray-800"
    customSize="text-2xl"
    addClasses="mb-10 max-w-5xl"
    >
    “Vortex West is composed of a team of <span class="italic text-blue-600"
					>talented engineers</span>  with a passion for excellence. They are sharply focused on our business needs and understand our continually evolving preferences within our industry."
    </Paragraph>

			<div class="sm:flex items-center justify-between">
				<div class="flex mb-10 sm:mb-0 items-center">
					<Img
						src="/images/planned-parenthood-icon.svg"
						alt="sample 1"
						classes="mr-8 h-24 block rounded-2xl object-cover"
					/>
					<div>
						<span class="block font-heading text-lg">Ron Rodenberg</span>
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


