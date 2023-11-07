<!-- casestudythree.svelte -->

<script>
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';

	import CaseStudyThreeColLight from '$lib/components/content/casestudy/CaseStudyThreeColLight.svelte';
	import Breadcrumbs from '$lib/components/layout/Breadcrumbs/Breadcrumbs.svelte';
	import TestimonialOne from '$lib/components/content/testimonials/TestimonialOne.svelte';
	import Heading from '$lib/components/element/Heading.svelte';
	import Text from '$lib/components/element/Text.svelte';
	import SubHead from '$lib/components/element/SubHead.svelte';
	import Img from '$lib/components/content/Image.svelte';

	// Define the breadcrumb items
	let breadcrumbItems = [
		{ href: '/', text: 'Home' },
		{ href: '/work', text: 'Work' },
		{ text: 'Case Study Three' }
	];
</script>

<HeroSolid
	subhead="Case Study Three - Light"
	subheadColor="text-white/50"
	title="Unified API for TELCO Services"
	titleColor="text-white"
	backgroundColor="bg-blue-600"
	gradient="bg-gradient-bluemesh"
	classes="mb-16"
/>

<!-- Feature Image -->
<section>
	<div class="-mt-32">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="max-w-full mx-auto">
				<Img
					src="/images/mockup-hero.jpg"
					alt="sample 1"
					classes="block aspect-video object-cover rounded-xl overflow-hidden"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Breadcrums -->
<section>
	<Breadcrumbs
		textColor="text-gray-500"
		padding="py-6"
		fontFamily="font-subheading"
		fontWeight="font-medium"
		textDecoration="uppercase"
		items={breadcrumbItems}
	/>
</section>

<section class="bg-white overflow-hidden">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full mx-auto">
				<div class="flex flex-wrap -mx-4 items-start mb-6">
					<div class="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
						<div class="lg:max-w-md xl:max-w-xl mr-8">
							<Heading
								asChild="false"
								as="h1"
								fontfamily="font-spaceg"
								size="text-6xl"
								weight="font-medium"
								color="text-gray-800"
								classes="mb-8"
							>
								Bespoke Content <br />Management System
							</Heading>
						</div>
					</div>
					<div class="w-full lg:w-1/2 px-4">
						<div class="max-w-lg xl:max-w-xl mb-16">
							<Text
								asChild="false"
								as="p"
								size="text-lg"
								color="text-gray-600"
							>
								Fusce dapibus, tellus ac cursus commodo, tortor mauris
								condimentum nibh, ut fermentum massa justo sit amet
								risus. Vivamus sagittis lacus vel augue laoreet rutrum
								faucibus dolor auctor. Aenean lacinia bibendum nulla
								sed consectetur. Nullam id dolor id nibh ultricies
								vehicula ut id elit.
							</Text>
						</div>
						<ul>
							<li
								class="flex items-end justify-between mb-6 pb-3 border-b border-gray-300"
							>
								<span
									class=" font-subheading uppercase text-subhead font-semibold text-gray-500"
									>Industry</span
								>
								<div class="text-right">
									<span
										class="block mb-1 text-xl font-light text-gray-700"
									>
										Finance
									</span>
								</div>
							</li>
							<li
								class="flex items-end justify-between mb-8 pb-3 border-b border-gray-300"
							>
								<span
									class="font-subheading uppercase text-subhead font-semibold text-gray-500"
									>Services</span
								>
								<div class="text-right">
									<span
										class="block mb-1 text-xl font-light text-gray-700"
										>Software Development</span
									>
								</div>
							</li>
							<li
								class="flex items-end justify-between mb-8 pb-3 border-b border-gray-300"
							>
								<span
									class="font-subheading uppercase text-subhead font-semibold text-gray-500"
									>Technology</span
								>
								<div class="text-right">
									<span
										class="block mb-1 text-xl font-light text-gray-700"
										>Python, Kafka, Postgresql</span
									>
								</div>
							</li>
							<li
								class="flex items-end justify-between mb-8 pb-3 border-b border-gray-300"
							>
								<span
									class="font-subheading uppercase text-subhead font-semibold text-gray-500"
									>View The Work</span
								>
								<div class="text-right">
									<span class="block mb-1">
										<a
											class="group inline-flex py-2 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200"
											href="/"
										>
											<span
												class="mr-4 uppercase font-subheading font-medium text-sm"
												>Visit Website</span
											>
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
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Full Image -->
<section>
	<div class="bg-white">
		<!-- Global Padding -->
		<div class="px-12">
			<!-- Blog Article -->
			<div class="w-full mx-auto">
				<Img
					src="/images/hero-mockup-2.jpg"
					alt="sample 1"
					classes="block aspect-video object-cover rounded-xl overflow-hidden"
				/>
			</div>
		</div>
	</div>
</section>

<!-- 2 Column Text With Images -->
<section class="bg-white overflow-hidden">
	<div class="pt-8">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full mx-auto mb-8">
				<div class="flex flex-wrap -mx-4">
					<!-- Column 1 -->
					<div class="w-full md:w-1/2 px-4 xs:mb-8 md:mb-0">
						<div
							class="flex flex-col max-w-md mx-auto lg:max-w-none bg-white rounded-4xl"
						>
							<Img
								src="/images/phone-ui-sq.jpg"
								alt="sample 1"
								classes="block mx-auto rounded-xl overflow-hidden  aspect-square"
							/>
						</div>
					</div>
					<!-- Column 2 -->
					<div class="w-full md:w-1/2 px-4">
						<div
							class="flex flex-col max-w-md mx-auto lg:max-w-none bg-white rounded-4xl"
						>
							<Img
								src="/images/phone-ui-2-sq.jpg"
								alt="sample 1"
								classes="block mx-auto rounded-xl overflow-hidden aspect-square"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="relative p-12 bg-blue-600 overflow-hidden">
	<div class="bg-gray-200 rounded-5xl">
		<TestimonialOne />
	</div>
</section>

<!-- Additional Case Studies -->
<section class="pt-16 pb-8 md:pt-24 bg-white overflow-hidden">
	<CaseStudyThreeColLight />
</section>
