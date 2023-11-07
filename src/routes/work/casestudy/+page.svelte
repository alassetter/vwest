<script>
	import GridComponent from '$lib/components/layout/Grid.svelte';
	import Paragraph from '$lib/components/content/Paragraph.svelte';
	import Heading from '$lib/components/content/Heading.svelte';
	import SubHeading from '$lib/components/content/SubHeading.svelte';
	import Img from '$lib/components/content/Image.svelte';
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
	import Breadcrumbs from '$lib/components/layout/Breadcrumbs/Breadcrumbs.svelte';
	import CaseStudyThreeColLight from '$lib/components/content/casestudy/CaseStudyThreeColLight.svelte';

	// Define the breadcrumb items
	let breadcrumbItems = [
		{ href: '/', text: 'Home' },
		{ href: '/work', text: 'Work' },
		{ text: 'Case Study' }
	];
</script>

<HeroSolid
	subhead="Case Study"
	subheadColor="text-gray-500"
	title="Unified API for TELCO Services"
	titleColor=""
	bodyCopy=""
	bodyColor=""
	backgroundColor="bg-gray-200"
	gradient=""
/>

<!-- Breadcrums -->
<section class="">
	<Breadcrumbs
		bgColor="bg-white"
		textColor="text-gray-500"
		borderColor="border-gray-300 "
		padding="py-6"
		fontFamily="font-subheading"
		fontWeight="font-medium"
		textDecoration="uppercase"
		classes="border-t border-b"
		items={breadcrumbItems}
	/>
</section>

<section>
	<div class="pt-16 pb-16 bg-gray-900">
		<!-- Global Padding -->
		<div class="px-12">
			<!-- Blog Article -->
			<div class="max-w-full mx-auto">
				<Img
					src="/images/hero-mockup-2.jpg"
					alt="sample 1"
					classes="block aspect-video object-cover rounded-xl overflow-hidden"
				/>
			</div>
		</div>
	</div>
</section>

<section class="bg-gray-900 overflow-hidden">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto mb-8">
				<!-- Content -->
				<GridComponent
					gridCols="md:grid-cols-1 lg:grid-cols-4"
					gap="gap-4"
					padding="p-4"
				>
					<div
						class="md:col-span-1 lg:col-span-3 lg:max-w-3xl xl:max-w-3xl"
					>
						<!-- Content for the 3/4 column -->

						<Heading
							tag="h1"
							customColor="text-white"
							customFontWeight="font-heading"
							customFontSize="text-5xl"
							addClasses="mb-8"
							>Bespoke Content <br />Management System</Heading
						>
						<Paragraph color="text-white" customSize="text-base mb-8">
							Vestibulum id ligula porta felis euismod semper.
							Maecenas faucibus mollis interdum. Aenean lacinia
							bibendum nulla sed consectetur. Duis mollis, est non
							commodo luctus, nisi erat porttitor ligula, eget lacinia
							odio sem nec elit. Cras justo odio, dapibus ac facilisis
							in, egestas eget quam.
						</Paragraph>

						<SubHeading
							tag="h4"
							customColor="text-gray-400"
							customSize="text-lg"
							customFontFamily="font-subheading"
							customFontWeight="font-medium"
							customTextDecoration="uppercase"
							addClasses=""
							>Solution
						</SubHeading>

						<Paragraph
							color="text-white"
							customSize="text-base"
							addClasses="mb-8"
						>
							Our client needed a bespoke content management system
							that would enable their publishers to create and modify
							digital content with ease and efficiency.
						</Paragraph>

						<Img
							alt="sample 1"
							classes="block w-full h-80 object-cover rounded-xl overflow-hidden mb-16 mt-16"
						/>

						<SubHeading
							tag="h4"
							customColor="text-gray-400"
							customSize="text-lg"
							customFontFamily="font-subheading"
							customFontWeight="font-medium"
							customTextDecoration="uppercase"
							addClasses=""
							>Challange
						</SubHeading>

						<Paragraph
							color="text-white"
							customSize="text-base"
							addClasses="mb-8"
						>
							In response to the client's specific needs, our team
							leveraged the robust DjangoCMS as a base. We then
							customized this platform by incorporating features that
							were uniquely tailored to our client's requirements. To
							further streamline the process of digital content
							publishing, we developed custom plugins.
						</Paragraph>

						<SubHeading
							tag="h4"
							customColor="text-gray-400"
							customSize="text-lg"
							customFontFamily="font-subheading"
							customFontWeight="font-medium"
							customTextDecoration="uppercase"
							addClasses=""
							>Results
						</SubHeading>

						<Paragraph
							color="text-white"
							customSize="text-base"
							addClasses=""
						>
							The outcome was a bespoke content management system that
							significantly improved the efficiency of the client's
							digital publishing process. The system's custom features
							and plugins allowed the client's publishers to create
							and modify content with unprecedented ease. This not
							only enhanced the productivity of the publishers but
							also improved the overall content quality. The success
							of this project led to improved digital publishing
							workflows.
						</Paragraph>
					</div>
					<div class="md:col-span-1">
						<!-- Content for the 1/4 column -->
						<SubHeading
							tag="h4"
							customColor="text-gray-400"
							customSize="text-subhead"
							customFontFamily="font-subheading"
							customFontWeight="font-medium"
							customTextDecoration="uppercase"
							addClasses="mb-2"
							>Industry
						</SubHeading>
						<Heading
							tag="h2"
							customColor="text-white"
							customFontWeight="font-normal"
							customFontSize="text-lg"
							addClasses="mb-8">Finance</Heading
						>

						<SubHeading
							tag="h4"
							customColor="text-gray-400"
							customSize="text-subhead"
							customFontFamily="font-subheading"
							customFontWeight="font-medium"
							customTextDecoration="uppercase"
							addClasses="mb-2"
							>Services
						</SubHeading>
						<Heading
							tag="h2"
							customColor="text-white"
							customFontWeight="font-normal"
							customFontSize="text-lg"
							addClasses="mb-8">Web Development</Heading
						>
						<!-- Tech Stack -->
						<div class="mt-8">
							<dt class="text-sm font-medium text-gray-500 uppercase">
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
								>Visit Website <span aria-hidden="true">&rarr;</span
								></a
							>
						</div>
					</div>
				</GridComponent>
				<!-- / Content -->
			</div>
		</div>
	</div>
</section>

<!-- Full Image -->
<section>
	<div class="bg-gray-900">
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
<section class="bg-gray-900 overflow-hidden">
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

<!-- Additional Case Studies -->
<section class="pt-16 pb-8 md:pt-24 bg-gray-300 overflow-hidden">
	<CaseStudyThreeColLight />
</section>
