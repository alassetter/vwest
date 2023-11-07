<!-- casestudythree.svelte -->

<script>
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
	import CaseStudyThreeColLight from '$lib/components/content/casestudy/CaseStudyThreeColLight.svelte';
	import TestimonialOne from '$lib/components/content/testimonials/TestimonialOne.svelte';
	import Heading from '$lib/components/element/Heading.svelte';
	import Img from '$lib/components/content/Image.svelte';
	import GridComponent from '$lib/components/layout/Grid.svelte';

	// Define the breadcrumb items
	let breadcrumbItems = [
		{ href: '/', text: 'Home' },
		{ href: '/work', text: 'Work' },
		{ text: 'Case Study Three' }
	];
</script>

<HeroSolid
	subhead="Case Study's"
	subheadColor="text-white/50"
	title="Work"
	titleColor="text-white"
	backgroundColor="bg-blue-600"
	gradient="bg-gradient-bluemesh"
	classes="mb-16"
/>

<!-- Nav Bar -->
<section>
	<div class="-mt-28">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="max-w-full mx-auto">
				<div
					class="py-4 px-4 mb-4 xl:py-3 font-heading text-md font-medium uppercase bg-gray-50 rounded-xl shadow-sm"
				>
					<div
						class="md:grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 md:text-center xl:max-w-max xl:mx-auto"
					>
						<a
							class="block py-5 px-8 2xl:px-14 hover:bg-gray-400 hover:text-white rounded-lg transition-all ease-in-out duration-200"
							href="/work">Featured</a
						><a
							class="block bg-blue-500 text-white py-5 2xl:px-14 rounded-lg px-8 shadow-md"
							href="/work">Web/Software</a
						><a
							class="block py-5 px-8 2xl:px-14 hover:bg-gray-400 hover:text-white rounded-lg transition-all ease-in-out duration-200"
							href="/work">Engineering</a
						><a
							class="block py-5 px-8 2xl:px-14 hover:bg-gray-400 hover:text-white rounded-lg transition-all ease-in-out duration-200"
							href="/work">DevOps/SecOps</a
						><a
							class="block py-5 px-8 2xl:px-14 hover:bg-gray-400 hover:text-white rounded-lg transition-all ease-in-out duration-200"
							href="/work">UI/UX Design</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Thumbnails -->
<section>
	<div class="pb-16">
		<div class="px-12">
			<!-- Feature Case Study -->
			<GridComponent
				gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4"
				gap="gap-4"
			>
				<div class="col-span-4">
					<a
						class="relative group block rounded-2xl overflow-hidden"
						href="/work/casestudy"
					>
						<div
							class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
						/>
						<Img
							src="/images/hero-ui-mockup.jpg"
							alt="sample 1"
							classes="block w-full h-112 sm:h-135 object-cover"
						/>
						<div class="absolute bottom-0 left-0 pb-14 px-5 xs:p-14">
							<div class="max-w-xs sm:max-w-xl">
								<div class="mb-6">
									<a
										href="/work/casestudy"
										class="inline-block py-2 px-6 mx-0 mt-2 mb-0 font-sans text-xs font-light text-gray-600 bg-white align-baseline border border-solid cursor-pointer lg:mt-4 hover:border hover:border-solid border-white hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:border focus:border-solid focus:border-gray-600 focus:bg-gray-600 focus:text-gray-600 rounded-full"
										>Technology</a
									>
								</div>
								<Heading
									asChild="false;"
									as="h2"
									fontfamily="font-spaceg"
									size="text-xl"
									weight="font-normal"
									color="text-white"
								>
									Featured Case Study
								</Heading>
							</div>
						</div>
					</a>
				</div>
			</GridComponent>
			<!-- Row One -->
			<GridComponent
				gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4"
				gap="gap-4"
			>
				<div class="col-span-1">
					<a class="group block w-full" href="/work/casestudytwo">
						<div class="relative mb-4 rounded-xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<Img
								src="/images/phone-ui-sq.jpg"
								alt="sample 1"
								classes="block mx-auto rounded-xl overflow-hidden aspect-square"
							/>
						</div>
						<Heading
							asChild="false;"
							as="h2"
							fontfamily="font-spaceg"
							size="text-xl"
							weight="font-medium"
							color="text-gray-900"
						>
							Case Study Two
						</Heading>
					</a>
				</div>
				<div class="col-span-1">
					<a class="group block w-full" href="/work/casestudythree">
						<div class="relative mb-6 rounded-xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<Img
								src="/images/phone-ui-2-sq.jpg"
								alt="sample 1"
								classes="block mx-auto rounded-xl overflow-hidden aspect-square"
							/>
						</div>
						<Heading
							asChild="false;"
							as="h2"
							fontfamily="font-spaceg"
							size="text-xl"
							weight="font-medium"
							color="text-gray-900"
						>
							Case Study Three
						</Heading>
					</a>
				</div>
				<div class="col-span-1">
					<a class="group block w-full" href="/work/casestudy">
						<div class="relative mb-6 rounded-xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<Img
								src="/images/phone-ui-2-sq.jpg"
								alt="sample 1"
								classes="block mx-auto rounded-xl overflow-hidden aspect-square"
							/>
						</div>
						<Heading
							asChild="false;"
							as="h2"
							fontfamily="font-spaceg"
							size="text-xl"
							weight="font-medium"
							color="text-gray-900"
						>
							Case Study One
						</Heading>
					</a>
				</div>
			</GridComponent>
			<!-- Row Two -->
			<GridComponent
				gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4"
				gap="gap-4"
			>
				<div class="col-span-1">
					<!-- Content for the 1/4 column -->

					<a class="group block w-full" href="/work/casestudy">
						<div class="relative mb-4 rounded-xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<Img
								src="/images/phone-ui-sq.jpg"
								alt="sample 1"
								classes="block mx-auto rounded-xl overflow-hidden aspect-square"
							/>
						</div>
						<Heading
							asChild="false;"
							as="h2"
							fontfamily="font-spaceg"
							size="text-xl"
							weight="font-medium"
							color="text-gray-900"
						>
							Case Study One
						</Heading>
					</a>
				</div>
				<div class="col-span-1">
					<!-- Content for the 1/4 column -->

					<a class="group block w-full" href="/work/casestudy">
						<div class="relative mb-4 rounded-xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<Img
								src="/images/phone-ui-2-sq.jpg"
								alt="sample 1"
								classes="block mx-auto rounded-xl overflow-hidden aspect-square"
							/>
						</div>
						<Heading
							asChild="false;"
							as="h2"
							fontfamily="font-spaceg"
							size="text-xl"
							weight="font-medium"
							color="text-gray-900"
						>
							Case Study One
						</Heading>
					</a>
				</div>
				<div class="col-span-1">
					<!-- Content for the 1/4 column -->

					<a class="group block w-full" href="/work/casestudy">
						<div class="relative mb-4 rounded-xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<Img
								src="/images/phone-ui-2-sq.jpg"
								alt="sample 1"
								classes="block mx-auto rounded-xl overflow-hidden aspect-square"
							/>
						</div>
						<Heading
							asChild="false;"
							as="h2"
							fontfamily="font-spaceg"
							size="text-xl"
							weight="font-medium"
							color="text-gray-900"
						>
							Case Study One
						</Heading>
					</a>
				</div>
			</GridComponent>
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
