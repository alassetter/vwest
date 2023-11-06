<!-- Case Study Two  -->
<script>
	import GridComponent from '$lib/components/layout/Grid.svelte';
	import Paragraph from '$lib/components/content/Paragraph.svelte';
	import Heading from '$lib/components/content/Heading.svelte';
	import SubHeading from '$lib/components/content/Subheading.svelte';
	import Img from '$lib/components/content/Image.svelte';
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
	import CaseStudyThreeColDark from '$lib/components/content/casestudy/CaseStudyThreeColDark.svelte';
	import TestimonialOne from '$lib/components/content/testimonials/TestimonialOne.svelte';
	import TestimonialTwo from '$lib/components/content/testimonials/TestimonialTwo.svelte';
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

<!-- Feature Image -->
<section>
	<div class="pb-16 bg-black">
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
<section class="bg-black">
	<div class="pt-8 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<!-- Blog Article -->
			<div class="max-w-full mx-auto">
				<div
					class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-16"
				>
					<!-- Content -->
					<div class="lg:col-span-2 xl:max-w-3xl">
						<div class="py-8 lg:pr-4 lg:pr-8">
							<div class="">
								<Heading
									tag="h1"
									customColor="text-white"
									customFontWeight="font-normal"
									customFontSize="text-5xl"
									>Bespoke Content <br />Management System</Heading
								>
								<p class="text-base text-gray-400/70 mt-16">
									At preline, our mission has always been focused on
									bringing openness and transparency to the design
									process. We've always believed that by providing a
									space where designers can share ongoing work not
									only empowers them to make better products, it also
									helps them grow.
								</p>

								<Paragraph
									color="text-gray-400/70"
									customSize="text-base"
									addClasses="mt-8"
								>
									Vestibulum id ligula porta felis euismod semper.
									Maecenas faucibus mollis interdum. Aenean lacinia
									bibendum nulla sed consectetur. Duis mollis, est non
									commodo luctus, nisi erat porttitor ligula, eget
									lacinia odio sem nec elit. Cras justo odio, dapibus
									ac facilisis in, egestas eget quam.
								</Paragraph>

								<SubHeading
									tag="h4"
									customColor="text-gray-400"
									customSize="text-lg"
									customFontFamily="font-subheading"
									customFontWeight="font-medium"
									customTextDecoration="uppercase"
									addClasses="mt-16"
									>Solution
								</SubHeading>

								<Paragraph
									color="text-gray-400/70"
									customSize="text-base"
									addClasses="mt-4"
								>
									Vestibulum id ligula porta felis euismod semper.
									Maecenas faucibus mollis interdum. Aenean lacinia
									bibendum nulla sed consectetur. Duis mollis, est non
									commodo luctus, nisi erat porttitor ligula, eget
									lacinia odio sem nec elit. Cras justo odio, dapibus
									ac facilisis in, egestas eget quam.
								</Paragraph>

								<SubHeading
									tag="h4"
									customColor="text-gray-400"
									customSize="text-lg"
									customFontFamily="font-subheading"
									customFontWeight="font-medium"
									customTextDecoration="uppercase"
									addClasses="mt-16"
									>Solution
								</SubHeading>
								<Paragraph
									color="text-gray-400/70"
									customSize="text-base"
									addClasses="mt-4"
								>
									Vestibulum id ligula porta felis euismod semper.
									Maecenas faucibus mollis interdum. Aenean lacinia
									bibendum nulla sed consectetur. Duis mollis, est non
									commodo luctus, nisi erat porttitor ligula, eget
									lacinia odio sem nec elit. Cras justo odio, dapibus
									ac facilisis in, egestas eget quam.
								</Paragraph>
								<Paragraph
									color="text-gray-400/70"
									customSize="text-base"
									addClasses="mt-8"
								>
									Vestibulum id ligula porta felis euismod semper.
									Maecenas faucibus mollis interdum. Aenean lacinia
									bibendum nulla sed consectetur. Duis mollis, est non
									commodo luctus, nisi erat porttitor ligula, eget
									lacinia odio sem nec elit. Cras justo odio, dapibus
									ac facilisis in, egestas eget quam.
								</Paragraph>

								<SubHeading
									tag="h4"
									customColor="text-gray-400"
									customSize="text-lg"
									customFontFamily="font-subheading"
									customFontWeight="font-medium"
									customTextDecoration="uppercase"
									addClasses="mt-16"
									>Solution
								</SubHeading>
								<Paragraph
									color="text-gray-400/70"
									customSize="text-base"
									addClasses="mt-4"
								>
									Vestibulum id ligula porta felis euismod semper.
									Maecenas faucibus mollis interdum. Aenean lacinia
									bibendum nulla sed consectetur. Duis mollis, est non
									commodo luctus, nisi erat porttitor ligula, eget
									lacinia odio sem nec elit. Cras justo odio, dapibus
									ac facilisis in, egestas eget quam.
								</Paragraph>
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
											Python, <br />FastAPI,<br /> Kafka,<br />
											Postgresql,<br /> and Angular
										</dd>
									</div>
									<div class="mt-8">
										<a
											href="/"
											class="text-sm font-subheading text-base font-normal leading-6 text-white hover:text-blue-400 transition-all duration-400"
											>Visit Website <span aria-hidden="true"
												>&rarr;</span
											></a
										>
									</div>
								</div>
							</div>
							<!-- End Card -->
						</div>
					</div>
					<!-- End Sidebar -->
				</div>
			</div>
			<!-- End Blog Article -->
		</div>
	</div>
</section>

<!-- Image -->
<section>
	<div class="bg-black">
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

<!-- 2 Column Text With Images -->
<section class="bg-black overflow-hidden">
	<div class="pt-8">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto mb-8">
				<div class="flex flex-wrap -mx-4">
					<div class="w-full lg:w-1/2 px-4 mb-8">
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
					<div class="w-full lg:w-1/2 px-4">
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

<!-- Global Padding -->
<!-- Testimonials -->
<section class="relative bg-gray-200 overflow-hidden">
	<div class="py-16 md:py-24">
		<TestimonialOne />
	</div>
</section>

<!-- Additional Case Studies -->
<section class="pt-16 pb-8 md:pt-24 bg-black overflow-hidden">
	<CaseStudyThreeColDark />
</section>
