<!-- Case Study Two  -->
<script>
	import Heading from '$lib/components/element/Heading.svelte';
	import Text from '$lib/components/element/Text.svelte';
	import SubHead from '$lib/components/element/SubHead.svelte';
	import Img from '$lib/components/content/Image.svelte';
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
	import CaseStudyThreeColLight from '$lib/components/content/casestudy/CaseStudyThreeColLight.svelte';
	import TestimonialTwo from '$lib/components/content/testimonials/TestimonialTwo.svelte';
	import Breadcrumbs from '$lib/components/layout/Breadcrumbs/Breadcrumbs.svelte';

	// Define the breadcrumb items
	let breadcrumbItems = [
		{ href: '/', text: 'Home' },
		{ href: '/work', text: 'Work' },
		{ text: 'Case Study Two' }
	];
</script>

<!-- Hero -->
<HeroSolid
	subhead="Case Two - Dark"
	subheadColor="text-gray-500"
	title="Unified API for TELCO Services"
	titleColor="text-white"
	bodyCopy=""
	bodyColor=""
	backgroundColor="bg-black"
	gradient="bg-gradient-night"
/>

<!-- Breadcrums -->
<section class="">
	<Breadcrumbs
		bgColor="bg-black"
		textColor="text-gray-500"
		borderColor="border-gray-700 "
		padding="py-6"
		fontFamily="font-subheading"
		fontWeight="font-medium"
		textDecoration="uppercase"
		classes="border-t border-b"
		items={breadcrumbItems}
	/>
</section>

<!-- Feature Image -->
<section>
	<div class="pt-12 bg-black">
		<!-- Global Padding -->
		<div class="px-12">
			<!-- Blog Article -->
			<div class="max-w-full mx-auto">
				<Img
					src="/images/hero-ui-mockup.jpg"
					alt="sample 1"
					classes="block aspect-video object-cover rounded-xl overflow-hidden"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Case Study Information -->
<section class="bg-black xs:py-4 md:py-24">
	<div class="py-0">
		<!-- Global Padding -->
		<div class="px-12">
			<!-- Blog Article -->
			<div class="max-w-full mx-auto">
				<div
					class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-16"
				>
					<!-- Content -->
					<div
						class="lg:col-span-2 xl:max-w-3xl xs:order-last sm:order-last md:order-none"
					>
						<div class="py-8 lg:pr-4 lg:pr-8">
							<Heading
								asChild="false;"
								as="h1"
								fontfamily="font-heading"
								size="text-5xl"
								weight="font-normal"
								color="text-white"
								classes="mx-w-4xl"
							>
								Bespoke Content <br />Management System
							</Heading>
							<div class="">
								<Text
									asChild="false"
									as="p"
									size="text-base"
									color="text-gray-400/70"
									margin="mt-12"
								>
									Fusce dapibus, tellus ac cursus commodo, tortor
									mauris condimentum nibh, ut fermentum massa justo
									sit amet risus. Vivamus sagittis lacus vel augue
									laoreet rutrum faucibus dolor auctor. Aenean lacinia
									bibendum nulla sed consectetur. Nullam id dolor id
									nibh ultricies vehicula ut id elit.
								</Text>
								<Text
									asChild="false"
									as="p"
									size="text-base"
									color="text-gray-400/70"
									margin="mt-8"
								>
									Aenean lacinia bibendum nulla sed consectetur.
									Vivamus sagittis lacus vel augue laoreet rutrum
									faucibus dolor auctor. Aenean lacinia bibendum nulla
									sed consectetur.
								</Text>

								<SubHead
									asChild="false;"
									as="h4"
									fontfamily="font-subheading"
									size="text-lg"
									weight="font-medium"
									color="text-gray-400"
									classes="uppercase mt-16"
								>
									Challange
								</SubHead>

								<Text
									asChild="false"
									as="p"
									size="text-base"
									color="text-gray-400/70"
									margin="mt-4"
								>
									Aenean lacinia bibendum nulla sed consectetur.
									Vivamus sagittis lacus vel augue laoreet rutrum
									faucibus dolor auctor. Aenean lacinia bibendum nulla
									sed consectetur.
								</Text>

								<SubHead
									asChild="false;"
									as="h4"
									fontfamily="font-subheading"
									size="text-lg"
									weight="font-medium"
									color="text-gray-400"
									classes="uppercase mt-16"
								>
									Solution
								</SubHead>
								<Text
									asChild="false"
									as="p"
									size="text-base"
									color="text-gray-400/70"
									margin="mt-4"
								>
									Aenean lacinia bibendum nulla sed consectetur.
									Vivamus sagittis lacus vel augue laoreet rutrum
									faucibus dolor auctor. Aenean lacinia bibendum nulla
									sed consectetur.
								</Text>
								<Text
									asChild="false"
									as="p"
									size="text-base"
									color="text-gray-400/70"
									margin="mt-8"
								>
									Aenean lacinia bibendum nulla sed consectetur.
									Vivamus sagittis lacus vel augue laoreet rutrum
									faucibus dolor auctor. Aenean lacinia bibendum nulla
									sed consectetur.
								</Text>

								<SubHead
									asChild="false;"
									as="h4"
									fontfamily="font-subheading"
									size="text-lg"
									weight="font-medium"
									color="text-gray-400"
									classes="uppercase mt-16"
								>
									Results
								</SubHead>
								<Text
									asChild="false"
									as="p"
									size="text-base"
									color="text-gray-400/70"
									margin="mt-4"
								>
									Aenean lacinia bibendum nulla sed consectetur.
									Vivamus sagittis lacus vel augue laoreet rutrum
									faucibus dolor auctor. Aenean lacinia bibendum nulla
									sed consectetur.
								</Text>
							</div>
						</div>
					</div>
					<!-- End Content -->

					<!-- Sidebar -->
					<div class="lg:col-span-1 lg:w-full lg:h-full">
						<div class="py-8">
							<!-- Card -->
							<div
								class="w-full overflow-hidden rounded-lg bg-gray-700/40 shadow"
							>
								<div class="px-8 py-8">
									<!-- Content goes here -->
									<!-- Industry -->
									<div class="mb-4">
										<dt>
											<SubHeading customColor="text-gray-400"
												>Industry</SubHeading
											>
										</dt>
										<dd
											class="mt-1 text-lg font-heading font-light text-white"
										>
											Communications
										</dd>
									</div>
									<!-- Services -->
									<div class="mt-8">
										<dt>
											<SubHeading customColor="text-gray-400"
												>Services</SubHeading
											>
										</dt>
										<dd
											class="mt-1 text-lg font-heading font-light text-white"
										>
											Communications
										</dd>
									</div>
									<!-- Tech Stack -->
									<div class="mt-8">
										<dt
											class="text-sm font-medium text-gray-500 uppercase"
										>
											<SubHeading customColor="text-gray-400"
												>Tech Stack</SubHeading
											>
										</dt>
										<dd
											class="mt-1 text-lg font-heading font-light text-white"
										>
											<span
												class="inline-block py-2 px-4 mr-4 mt-4 text-xs font-subheading font-semibold uppercase text-white/80 bg-white/10 border border-white/50 rounded-md"
												>Python</span
											>
											<span
												class="inline-block py-2 px-4 mr-4 mt-4 text-xs font-subheading font-semibold uppercase text-white/80 bg-white/10 border border-white/50 rounded-md"
												>FastAPI</span
											>
											<span
												class="inline-block py-2 px-4 mr-4 mt-4 text-xs font-subheading font-semibold uppercase text-white/80 bg-white/10 border border-white/50 rounded-md"
												>Kafka</span
											>
											<span
												class="inline-block py-2 px-4 mr-4 mt-4 text-xs font-subheading font-semibold uppercase text-white/80 bg-white/10 border border-white/50 rounded-md"
												>Postgresql</span
											>
											<span
												class="inline-block py-2 px-4 mr-4 mt-4 text-xs font-subheading font-semibold uppercase text-white/80 bg-white/10 border border-white/50 rounded-md"
												>Angular</span
											>
										</dd>
									</div>
									<div class="mt-8">
										<hr class="h-px my-8 border-0 bg-gray-700" />
										<a
											href="/"
											class="font-subheading text-base font-normal text-white hover:text-blue-400 transition-all duration-400"
											target="_blank"
											>Visit Website <span aria-hidden="true"
												>&rarr;</span
											></a
										>
									</div>
								</div>
							</div>
							<!-- End Card -->
						</div>

						<div class="flex flex-wrap mt-8">
							<div class="w-full">
								<SubHead
									asChild="false;"
									as="h4"
									fontfamily="font-subheading"
									size="text-lg"
									weight="font-medium"
									color="text-gray-400"
									classes="uppercase"
								>
									Related Case Studies
								</SubHead>
							</div>
							<div class="xs:w-1/2 md:w-full xs:mt-8">
								<a class="md:flex group" href="/">
									<div class="w-48 bg-cover">
										<Img
											src="/images/phone-ui-sq.jpg"
											alt="sample 1"
											classes="block mx-auto rounded-lg overflow-hidden bg-cover aspect-square"
										/>
									</div>
									<div class="mt-4 md:mt-0 md:ml-6 pt-2">
										<span
											class="block text-gray-500 mb-2 font-medium font-subheading tracking-widest uppercase"
											>Case Study</span
										>
										<h4
											class="text-sm font-medium text-gray-400/70 group-hover:text-white line-clamp-2"
										>
											Consectures Content Velitpato officia consequat
											duis enim velit mollit
										</h4>
									</div>
								</a>
							</div>
							<div class="xs:w-1/2 sm:w-1/2 md:w-full xs:mt-8">
								<a class="md:flex group" href="/">
									<div class="w-48 bg-cover">
										<Img
											src="/images/phone-ui-sq.jpg"
											alt="sample 1"
											classes="block mx-auto rounded-lg overflow-hidden bg-cover aspect-square"
										/>
									</div>
									<div class="mt-4 md:mt-0 md:ml-6 pt-2">
										<span
											class="block text-gray-500 mb-2 font-medium font-subheading tracking-widest uppercase"
											>Case Study</span
										>
										<h4
											class="text-sm font-medium text-gray-400/70 group-hover:text-white line-clamp-2"
										>
											Consectures Content Velitpato officia consequat
											duis enim velit mollit
										</h4>
									</div>
								</a>
							</div>
							<div class="xs:w-1/2 sm:w-1/2 md:w-full xs:mt-8">
								<a class="md:flex group" href="/">
									<div class="w-48 bg-cover">
										<Img
											src="/images/phone-ui-sq.jpg"
											alt="sample 1"
											classes="block mx-auto rounded-lg overflow-hidden bg-cover aspect-square"
										/>
									</div>
									<div class="mt-4 md:mt-0 md:ml-6 pt-2">
										<span
											class="block text-gray-500 mb-2 font-medium font-subheading tracking-widest uppercase"
											>Case Study</span
										>
										<h4
											class="text-sm font-medium text-gray-400/70 group-hover:text-white line-clamp-2"
										>
											Consectures Content Velitpato officia consequat
											duis enim velit mollit
										</h4>
									</div>
								</a>
							</div>
						</div>
					</div>

					<!-- End Sidebar -->
				</div>
			</div>
			<!-- End Blog Article -->
		</div>
	</div>
</section>

<!-- Full Image -->
<section>
	<div class="bg-black">
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
<section class="bg-black overflow-hidden">
	<div class="pt-8">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full mx-auto mb-8">
				<div class="flex flex-wrap -mx-4">
					<!-- Column 1 -->
					<div class="w-full md:w-1/2 px-4 xs:mb-8 md:mb-0">
						<div
							class="flex flex-col max-w-md mx-auto lg:max-w-none bg-black rounded-4xl"
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
							class="flex flex-col max-w-md mx-auto lg:max-w-none bg-black rounded-4xl"
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

<section class="relative bg-black overflow-hidden">
	<div class="py-4 md:py-4 bg-gray-50 rounded-tl-5xl rounded-tr-5xl">
		<TestimonialTwo />
	</div>
</section>

<!-- Additional Case Studies -->
<section class="bg-gray-50 overflow-hidden">
	<div
		class="pt-16 pb-8 md:pt-24 bg-gray-100 rounded-tl-5xl rounded-tr-5xl"
	>
		<CaseStudyThreeColLight />
	</div>
</section>
