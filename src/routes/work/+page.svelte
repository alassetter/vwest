<script>
	const placeholder = '/images/placeholder-lg.jpg';
	const workitem = '/images/placeholder-2.jpg';
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
	import Heading from '$lib/components/element/Heading.svelte';
	import Paragraph from '$lib/components/content/Paragraph.svelte';
	import Img from '$lib/components/content/Image.svelte';
	import CaseStudyThreeColDark from '$lib/components/content/casestudy/CaseStudyThreeColDark.svelte';
	import TestimonialTwo from '$lib/components/content/testimonials/TestimonialTwo.svelte';
	import GridComponent from '$lib/components/layout/Grid.svelte';
</script>

<HeroSolid
	subhead="Case Study's"
	subheadColor="text-white/50"
	title="Work"
	titleColor="text-white"
	backgroundColor="bg-blue-600"
	gradient="bg-gradient-bluemesh"
	classes="-mb-8"
/>

<!-- Nav Bar -->
<section class="relative bg-white">
	<div class="">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="max-w-full mx-auto">
				<div
					class="py-4 xl:py-3 font-heading text-md font-medium uppercase shadow-sm"
				>
					<div
						class="md:grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 md:text-center xl:max-w-max xl:mx-auto"
					>
						<a
							class="block py-5 px-8 2xl:px-14 hover:bg-gray-400 hover:text-white rounded-full transition-all ease-in-out duration-200"
							href="/work">Featured</a
						><a
							class="block bg-blue-500 text-white py-5 2xl:px-14 rounded-full px-8 shadow-md"
							href="/work">Web/Software</a
						><a
							class="block py-5 px-8 2xl:px-14 hover:bg-gray-400 hover:text-white rounded-full transition-all ease-in-out duration-200"
							href="/work">Engineering</a
						><a
							class="block py-5 px-8 2xl:px-14 hover:bg-gray-400 hover:text-white rounded-full transition-all ease-in-out duration-200"
							href="/work">DevOps/SecOps</a
						><a
							class="block py-5 px-8 2xl:px-14 hover:bg-gray-400 hover:text-white rounded-full transition-all ease-in-out duration-200"
							href="/work">UI/UX Design</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="pt-2 pb-12 md:pb-12 bg-gray-300">
	<div class="m-full mx-auto px-4">
		<div class="px-12 mt-8">
			<a
				class="relative group block mb-8 rounded-2xl overflow-hidden"
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
				<div class="absolute bottom-0 left-0 pb-14 xs:p-14">
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
							size="text-2xl"
							weight="font-normal"
							color="text-white group-hover:text-blue-600"
						>
							Featured Case Study
						</Heading>
					</div>
				</div>
			</a>
			<div class="flex flex-wrap -mx-4">
				<div class="w-full md:w-1/2 xl:w-1/4 px-4 mb-8 xl:mb-0">
					<a class="group block" href="/work/casestudytwo">
						<div class="relative mb-6 rounded-2xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<Img
								src="/images/logo-art.jpg"
								alt="sample 1"
								classes="block w-full h-80 object-cover"
							/>
						</div>
						<Heading
							asChild="false;"
							as="h2"
							fontfamily="font-spaceg"
							size="text-lg"
							weight="font-normal"
							color="text-gray-900 group-hover:text-blue-600"
						>
							Case Study Two
						</Heading>
					</a>
				</div>
				<div class="w-full md:w-1/2 xl:w-1/4 px-4 mb-8 xl:mb-0">
					<a class="group block" href="/work/casestudythree">
						<div class="relative mb-6 rounded-2xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<Img
								src="/images/phone-ui-sq.jpg"
								alt="sample 1"
								classes="block w-full h-80 object-cover"
							/>
						</div>

						<Heading
							asChild="false;"
							as="h2"
							fontfamily="font-spaceg"
							size="text-lg"
							weight="font-normal"
							color="text-gray-900 group-hover:text-blue-600"
						>
							Case Study Three
						</Heading>
					</a>
				</div>
				<div class="w-full xl:w-1/2 px-4">
					<a class="group block" href="/case">
						<div class="relative mb-6 rounded-2xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<Img
								src={workitem}
								alt="sample 1"
								classes="block w-full h-80 object-cover"
							/>
						</div>
						<Heading
							asChild="false;"
							as="h2"
							fontfamily="font-spaceg"
							size="text-lg"
							weight="font-normal"
							color="text-gray-900 group-hover:text-blue-600"
						>
							Alternate Work Page
						</Heading>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Testimonials -->
<section class="relative p-12 bg-gray-700 overflow-hidden">
	<div class="bg-gray-200 rounded-5xl">
		<TestimonialTwo />
	</div>
</section>

<!-- Additional Case Studies -->
<section class="pt-16 md:pt-24 bg-gray-800 overflow-hidden">
	<CaseStudyThreeColDark />
</section>
