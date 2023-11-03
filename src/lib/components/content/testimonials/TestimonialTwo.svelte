<script>
	import Paragraph from '$lib/components/content/Paragraph.svelte';
	import Heading from '$lib/components/content/Heading.svelte';
	import SubHeading from '$lib/components/content/Subheading.svelte';
	import Img from '$lib/components/content/Image.svelte';
</script>

<section class="relative py-12 md:py-24 bg-gray-50 overflow-hidden">
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap -mx-4 items-center mb-20">
			<div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
				<h1
					class="font-heading text-6xl md:text-10xl tracking-tighter"
				>
					Testimonials
				</h1>
			</div>
			<div class="w-full md:w-1/2 px-4">
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
				class="flex-shrink-0 mr-6 inline-block w-full max-w-lg lg:max-w-6xl"
			>
				<div class="bg-gray-100 rounded-4xl overflow-hidden">
					<div class="flex flex-wrap">
						<div class="w-full lg:w-4/12">
							<Img
								src="/images/headshot-2.jpg"
								alt="sample 1"
								classes="block h-full w-full rounded-4xl object-cover"
							/>
						</div>
						<div class="w-full lg:w-8/12 self-center">
							<div class="py-16 px-8 sm:px-16 max-w-2xl">
								<p class="mb-8 text-2xl leading-snug">
									<span
										>KW70 Fix is a leading real estate investment firm
										in the World, headquartered in New York with
										offices in</span
									>
									<span class="text-gray-500"
										>London, Chicago, Barcelona, Vienna, Rome, Las
										Vegas.</span
									>
									<span
										>KW70 Fix initiative seeks out regions and markets
										with robust underlying catalysts, such as
										burgeoning technology sectors, a diverse
										workforce, and a strong entrepreneurial culture.</span
									>
								</p>
								<span class="block">Wade Warren</span>
								<span class="block text-sm text-gray-500"
									>CEO, Since Industry</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="flex-shrink-0 mr-6 inline-block w-full max-w-lg lg:max-w-6xl"
			>
				<div class="bg-gray-100 rounded-4xl overflow-hidden">
					<div class="flex flex-wrap">
						<div class="w-full lg:w-4/12">
							<Img
								src="/images/headshot-2.jpg"
								alt="sample 1"
								classes="block h-full w-full rounded-4xl object-cover"
							/>
						</div>
						<div class="w-full lg:w-8/12 self-center">
							<div class="py-16 px-8 sm:px-16 max-w-2xl">
								<p class="mb-8 text-2xl leading-snug">
									<span
										>&ldquo;KW70 Fix is a leading real estate
										investment firm in the World, headquartered in New
										York with offices in</span
									>
									<span class="text-gray-500"
										>London, Chicago, Barcelona, Vienna, Rome, Las
										Vegas.</span
									>
									<span
										>KW70 Fix initiative seeks out regions and markets
										with robust underlying catalysts, such as
										burgeoning technology sectors, a diverse
										workforce, and a strong entrepreneurial culture.</span
									>
								</p>
								<span class="block">Wade Warren</span>
								<span class="block text-sm text-gray-500"
									>CEO, Since Industry</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
