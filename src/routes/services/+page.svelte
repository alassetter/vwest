<script>
	import HeroAlt from '$lib/components/content/HeroAlt.svelte';
	import Img from '$lib/components/content/Image.svelte';
	import Heading from '$lib/components/element/Heading.svelte';
	import Text from '$lib/components/element/Text.svelte';
	import SubHead from '$lib/components/element/SubHead.svelte';
	import GridComponent from '$lib/components/layout/Grid.svelte';
	import CallAction from '$lib/components/content/calltoaction/CallAction.svelte';
</script>

<section>
	<HeroAlt
		backgroundColor="bg-gray-300"
		gradient="bg-gradient-night"
		subhead="Our Services"
		subheadColor="text-gray-300"
		title="What We Do"
		titleColor="text-gray-100"
		bodyCopy="An experienced software engineering team  with an emphasis on digital product development."
		bodyColor="text-gray-300"
		imageAlt="demo"
		image="/images/about-vortex.jpg"
		classes="absolute w-full mx-auto left-0 top-0 rounded-xl object-cover h-112 lg:h-196 xl:h-200 aspect-video"
	/>
</section>

<section class="bg-gray-300">
	<div class="pt-40 md:pt-40 lg:pt-16 xl:pt-100 2xl:pt-100 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
				<div class="flex flex-wrap">
					<!-- Content -->
					<div class="w-full md:8/12 lg:w-9/12 xl:w-7/12 2xl:6/12">
						<p class="mb-8 text-base font-medium uppercase">
							Subheadline
						</p>
						<h1 class="mb-8 text-5xl max-w-2xl">
							Aenean lacinia bibendum nulla sed consectetur.
						</h1>
						<p class="text-lg">
							Vestibulum id ligula porta felis euismod semper.
							Maecenas faucibus mollis interdum. Aenean lacinia
							bibendum nulla sed consectetur. Duis mollis, est non
							commodo luctus, nisi erat porttitor ligula, eget lacinia
							odio sem nec elit. Cras justo odio, dapibus ac facilisis
							in, egestas eget quam.
						</p>
					</div>
					<!-- Content -->
				</div>
			</div>
		</div>
	</div>
</section>

<section class=" bg-gray-100">
	<div class="pt-16 pb-20">
		<div class="px-12">
			<div class="w-full mx-auto">
				<div class="flex flex-wrap items-center">
					<div
						class="w-full lg:w-1/2 mb-16 lg:mb-0 order-1 xs:order-last xl:order-1"
					>
						<div class="lg:pr-16 xl:pr-20 2xl:pr-32">
							<SubHead
								asChild="false;"
								as="h4"
								fontfamily="font-subheading"
								size="text-subhead"
								weight="font-medium"
								color="text-gray-700"
								classes="uppercase mt-4"
							>
								Our Services
							</SubHead>

							<Heading
								asChild="false;"
								as="h1"
								fontfamily="font-heading"
								size="text-3xl"
								weight="font-medium"
								color="text-gray-700"
								classes="mt-8"
							>
								Custom Solutions with Agile Methodologies: Your
								Partner in Navigating Complexity
							</Heading>
							<Text
								asChild="false"
								as="p"
								size="text-base"
								color="text-gray-600"
								margin="mt-8"
							>
								Our streamlined structure allows us to swiftly
								recalibrate our resources to cater to your immediate
								requirements. We are experts in distilling complexity
								into simplicity.
							</Text>
						</div>
						<div class="w-full">
							<SubHead
								asChild="false;"
								as="h4"
								fontfamily="font-subheading"
								size="text-subhead"
								weight="font-medium"
								color="text-gray-700"
								classes="uppercase mt-12"
							>
								WHAT WE DO
							</SubHead>
						</div>
						<GridComponent
							gridCols="grid-cols-1 md:grid-cols-2"
							gap="gap-0"
							sm="sm:gap-0"
							md="md:gap-16"
							lg="lg:gap-4"
							xl="xl:gap-16"
							twoxl="2xl:gap-16"
							addClasses="mr-8"
						>
							<!-- Your content here -->
							<div class="w-full">
								<Heading
									asChild="false;"
									as="h4"
									fontfamily="font-heading"
									size="text-base"
									weight="font-normal"
									color="text-gray-700"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>Analysis & Strategy
								</Heading>
								<hr class="h-px my-3 border-0 bg-gray-700/20" />
								<Heading
									asChild="false;"
									as="h4"
									fontfamily="font-heading"
									size="text-base"
									weight="font-normal"
									color="text-gray-700"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>Product Development
								</Heading>
								<hr class="h-px my-3 border-0 bg-gray-700/20" />
								<Heading
									asChild="false;"
									as="h4"
									fontfamily="font-heading"
									size="text-base"
									weight="font-normal"
									color="text-gray-700"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>Software Development
								</Heading>
							</div>
							<div class="col-span-1 w-full">
								<Heading
									asChild="false;"
									as="h1"
									fontfamily="font-heading"
									size="text-base"
									weight="font-normal"
									color="text-gray-700"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>UI/UX Design
								</Heading>
								<hr class="h-px my-3 border-0 bg-gray-700/20" />
								<Heading
									asChild="false;"
									as="h4"
									fontfamily="font-heading"
									size="text-base"
									weight="font-normal"
									color="text-gray-700"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>QA & Automation
								</Heading>
								<hr class="h-px my-3 border-0 bg-gray-700/20" />
								<Heading
									asChild="false;"
									as="h4"
									fontfamily="font-heading"
									size="text-base"
									weight="font-normal"
									color="text-gray-700"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>DevOps & SecOps
								</Heading>
							</div>
						</GridComponent>
					</div>
					<div class="w-full lg:w-1/2 xs:mb-8 lg:mb-0 lg:order-last">
						<Img
							src="/images/logo-art.jpg"
							alt="sample 1"
							classes="relative rounded-3xl overflow-hidden transform hover:scale-105 transition ease-in-out duration-1000"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Services Dark -->
<section class=" bg-black">
	<div class="pt-16 pb-20">
		<div class="px-12">
			<div class="w-full mx-auto">
				<div class="flex flex-wrap items-center">
					<div
						class="w-full lg:w-1/2 mb-16 lg:mb-0 order-1 xs:order-last xl:order-1"
					>
						<div class="lg:pr-16 xl:pr-20 2xl:pr-32">
							<SubHead
								asChild="false;"
								as="h4"
								fontfamily="font-subheading"
								size="text-subhead"
								weight="font-medium"
								color="text-gray-400"
								classes="uppercase mt-4"
							>
								Our Services
							</SubHead>

							<Heading
								asChild="false;"
								as="h1"
								fontfamily="font-heading"
								size="text-4xl"
								weight="font-normal"
								color="text-white"
								classes="mt-8"
							>
								Custom Solutions with Agile Methodologies: Your
								Partner in Navigating Complexity
							</Heading>
							<Text
								asChild="false"
								as="p"
								size="text-base"
								color="text-white/80"
								margin="mt-8"
							>
								Our streamlined structure allows us to swiftly
								recalibrate our resources to cater to your immediate
								requirements. We are experts in distilling complexity
								into simplicity.
							</Text>
						</div>
						<div class="w-full">
							<SubHead
								asChild="false;"
								as="h4"
								fontfamily="font-subheading"
								size="text-subhead"
								weight="font-medium"
								color="text-white"
								classes="uppercase mt-12"
							>
								WHAT WE DO
							</SubHead>
						</div>
						<GridComponent
							gridCols="grid-cols-1 md:grid-cols-2"
							gap="gap-4"
							shadow="shadow-md"
							sm="sm:gap-2"
							md="md:gap-3"
							lg="lg:gap-4"
							xl="xl:gap-5"
							twoxl="2xl:gap-6"
							addClasses="additional-classes"
						>
							<!-- Your content here -->
							<div class="w-full">
								<Heading
									asChild="false;"
									as="h4"
									fontfamily="font-heading"
									size="text-lg"
									weight="font-normal"
									color="text-white"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>Analysis & Strategy
								</Heading>
								<hr class="h-px my-3 border-0 bg-gray-700" />
								<Heading
									asChild="false;"
									as="h4"
									fontfamily="font-heading"
									size="text-lg"
									weight="font-normal"
									color="text-white"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>Product Development
								</Heading>
								<hr class="h-px my-3 border-0 bg-gray-700" />
								<Heading
									asChild="false;"
									as="h4"
									fontfamily="font-heading"
									size="text-lg"
									weight="font-normal"
									color="text-white"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>Software Development
								</Heading>
							</div>
							<div class="col-span-1 w-full">
								<Heading
									asChild="false;"
									as="h1"
									fontfamily="font-heading"
									size="text-lg"
									weight="font-normal"
									color="text-white"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>UI/UX Design
								</Heading>
								<hr class="h-px my-3 border-0 bg-gray-700" />
								<Heading
									asChild="false;"
									as="h4"
									fontfamily="font-heading"
									size="text-lg"
									weight="font-normal"
									color="text-white"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>QA & Automation
								</Heading>
								<hr class="h-px my-3 border-0 bg-gray-700" />
								<Heading
									asChild="false;"
									as="h4"
									fontfamily="font-heading"
									size="text-lg"
									weight="font-normal"
									color="text-white"
									classes="mt-4 block"
									><span class="inline-block mr-2 text-blue-600">
										>
									</span>DevOps & SecOps
								</Heading>
							</div>
						</GridComponent>
					</div>
					<div class="w-full lg:w-1/2 xs:mb-8 lg:mb-0 lg:order-last">
						<Img
							src="/images/logo-art.jpg"
							alt="sample 1"
							classes="transform hover:scale-105 transition ease-in-out duration-1000"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Us? -->
<section class="py-12 md:py-24 bg-gray-900">
	<div class="w-full mx-auto px-12">
		<div class="max-w-lg mx-auto lg:max-w-none">
			<div class="grid grid-cols-2 gap-8">
				<div class="mb-4">
					<div class="hidden md:block">
						<h2
							class="flex items-center text-white font-heading font-light text-6xl"
						>
							Why <br />Vortex West?
						</h2>
					</div>
					<div class="block md:hidden">
						<h2
							class="flex items-center text-white font-heading font-light text-4xl"
						>
							Why <br />Vortex West?
						</h2>
						<div class="pb-4 md:pb-0" />
					</div>
				</div>
				<!-- Block -->
				<div
					class="relative block p-8 overflow-hidden transition-all ease-in-out duration-300 transform bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-white rounded-3xl shadow-sm hover:scale-105 group hover:shadow-xl"
				>
					<div class="space-y-8">
						<h3 class="text-lg text-white font-heading font-light">
							Up To 60% Reduction In Costs
						</h3>
						<div class="max-w-lg">
							<p class="text-opacity-60 text-white/60">
								With Vortex West developers as your augmented team,
								you’ll only pay for the actual hours each developer
								worked on your project.
							</p>
						</div>
					</div>
				</div>
				<!-- Block -->
				<div
					class="relative block p-8 overflow-hidden transition-all ease-in-out duration-300 transform bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-white rounded-3xl shadow-sm hover:scale-105 group hover:shadow-xl"
				>
					<div class="space-y-8">
						<h3 class="text-lg text-white font-heading font-light">
							Speed
						</h3>
						<div class="max-w-lg">
							<p class="text-opacity-60 text-white/60">
								Get your ideas to market 10x faster than you could
								with a conventional agency.
							</p>
						</div>
					</div>
				</div>
				<!-- Block -->
				<div
					class="relative block p-8 overflow-hidden transition-all ease-in-out duration-300 transform bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-white rounded-3xl shadow-sm hover:scale-105 group hover:shadow-xl"
				>
					<div class="space-y-8">
						<h3 class="text-lg text-white font-heading font-light">
							Access to Senior-Level Engineers
						</h3>
						<div class="max-w-lg">
							<p class="text-opacity-60 text-white/60">
								We are not a staffing agency. Most the engineers hired
								with us are top-tier senior experts with years of
								experience in the industry.
							</p>
						</div>
					</div>
				</div>
				<!-- Block -->
				<div
					class="relative block p-8 overflow-hidden transition-all ease-in-out duration-300 transform bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-white rounded-3xl shadow-sm hover:scale-105 group hover:shadow-xl"
				>
					<div class="space-y-8">
						<h3 class="text-lg text-white font-heading font-light">
							Fully Transparent
						</h3>
						<div class="max-w-lg">
							<p class="text-opacity-60 text-white/60">
								Our agile approach gives you total control and
								absolute transparency.
							</p>
						</div>
					</div>
				</div>
				<!-- Block -->
				<div
					class="relative block p-8 overflow-hidden transition-all ease-in-out duration-300 transform bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-white rounded-3xl shadow-sm hover:scale-105 group hover:shadow-xl"
				>
					<div class="space-y-6">
						<h3 class="text-lg text-white font-heading font-light">
							Quality-Focused
						</h3>
						<div class="max-w-xs">
							<p class="text-opacity-60 text-white/60">
								From the inception of the development process, our
								teams place a high emphasis on quality.
							</p>
						</div>
					</div>
				</div>
				<!-- Block -->
				<div
					class="relative block p-8 overflow-hidden transition-all ease-in-out duration-300 transform bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-white rounded-3xl shadow-sm hover:scale-105 group hover:shadow-xl"
				>
					<div class="space-y-8">
						<h3 class="text-lg text-white font-heading font-light">
							Tech Stack Versatility
						</h3>
						<div class="max-w-lg">
							<p class="text-opacity-60 text-white/60">
								Our engineers are proficient in a broad spectrum of
								languages and experts in an array of technologies,
								spanning from blockchain to web.
							</p>
						</div>
					</div>
				</div>
				<!-- Block -->
				<div
					class="relative block p-8 overflow-hidden transition-all ease-in-out duration-300 transform bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-white rounded-3xl shadow-sm hover:scale-105 group hover:shadow-xl"
				>
					<div class="space-y-8">
						<h3 class="text-lg text-white font-heading font-light">
							Talent & Expertise
						</h3>
						<div class="max-w-lg">
							<p class="text-opacity-60 text-white/60">
								90% of our engineering team are senior professionals,
								each bringing a wealth of domain experience from some
								of the most complex and demanding industries.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<div
	class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
>
	<div
		class="grid max-w-screen-lg gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2"
	>
		<a
			href="/"
			aria-label="View item"
			title="View item"
			class="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
		>
			<div
				class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
			/>
			<div
				class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
			/>
			<div
				class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
			/>
			<div
				class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
			/>
			<div
				class="relative flex items-center justify-between p-5 bg-white rounded-sm"
			>
				<div class="pr-4">
					<h6 class="mb-2 font-semibold leading-5">
						The quick, brown fox jumps over a very lazy dog
					</h6>
					<p class="text-sm text-gray-900">
						Storage shed, troughs feed bale manure, is garden wheat
						oats at augers.
					</p>
				</div>
				<div class="flex items-center justify-center">
					<svg
						class="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
						fill="currentColor"
						viewBox="0 0 12 12"
					>
						<path
							d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
						/>
					</svg>
				</div>
			</div>
		</a>
		<a
			href="/"
			aria-label="View item"
			title="View item"
			class="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
		>
			<div
				class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
			/>
			<div
				class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
			/>
			<div
				class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
			/>
			<div
				class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
			/>
			<div
				class="relative flex items-center justify-between p-5 bg-white rounded-sm"
			>
				<div class="pr-4">
					<h6 class="mb-2 font-semibold leading-5">
						The first mate and his Skipper too will do
					</h6>
					<p class="text-sm text-gray-900">
						Disrupt inspire and think tank, social entrepreneur but
						preliminary thinking think tank.
					</p>
				</div>
				<div class="flex items-center justify-center">
					<svg
						class="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
						fill="currentColor"
						viewBox="0 0 12 12"
					>
						<path
							d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
						/>
					</svg>
				</div>
			</div>
		</a>
	</div>
</div>
<!-- 2 Column Text Head -->
<section class="w-full mx-auto pt-20 pb-16 bg-white">
	<div class="px-12">
		<div class="flex flex-col mx-auto">
			<h3 class="text-4xl font-heading font-medium text-6xl">
				Building Visual Experiences
			</h3>
			<div
				class="grid grid-cols-6 gap-5 mt-8 md:grid-cols-12 md:gap-16"
			>
				<p
					class="col-span-6 text-base font-normal text-gray-700 text-xl"
				>
					Maecenas sed diam eget risus varius blandit sit amet non
					magna. Vivamus sagittis lacus vel augue laoreet rutrum
					faucibus dolor auctor. Integer posuere erat a ante venenatis
					dapibus posuere velit aliquet.
				</p>

				<p
					class="col-span-6 text-base font-normal text-gray-700 text-xl"
				>
					Praesent commodo cursus magna, vel scelerisque nisl
					consectetur et. Donec sed odio dui. Sed posuere consectetur
					est at lobortis. Cras mattis consectetur purus sit amet
					fermentum.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Call To Action -->
<CallAction />
