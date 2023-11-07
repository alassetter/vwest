<!-- Two Columns - Text and photo and aspect ratio -->
<!-- import TwoColuTxImage from '$lib/components/content/TwoColuTxImage.svelte'; -->

<script>
	const placeholder = '/images/placeholder-lg.jpg';
	import Heading from '$lib/components/element/Heading.svelte';
	import Text from '$lib/components/element/Text.svelte';
	import SubHead from '$lib/components/element/SubHead.svelte';
	import Img from '$lib/components/content/Image.svelte';
</script>

<section class=" bg-coolGray-50">
	<div class="pt-16 pb-16">
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
								Two Column w/ Image
							</SubHead>

							<Heading
								asChild="false;"
								as="h1"
								fontfamily="font-heading"
								size="text-4xl"
								weight="font-normal"
								color="text-black"
								classes="mt-8"
							>
								Bespoke Content <br />Management System
							</Heading>
							<Text
								asChild="false"
								as="p"
								size="text-base"
								color="text-gray-400"
								margin="mt-8 line-clamp-5"
							>
								Fusce dapibus, tellus ac cursus commodo, tortor mauris
								condimentum nibh, ut fermentum massa justo sit amet
								risus. Vivamus sagittis lacus vel augue laoreet rutrum
								faucibus dolor auctor. Aenean lacinia bibendum nulla
								sed consectetur. Nullam id dolor id nibh ultricies
								vehicula ut id elit.
							</Text>
							<a
								class="group inline-flex items-center mt-8 font-subheading font-semibold hover:text-blue-500"
								href="/"
							>
								<span class="mr-4 uppercase">See more</span>
								<span
									class="group-hover:rotate-45 transform transition duration-100"
								>
									<svg
										width="11"
										height="11"
										viewBox="0 0 11 11"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9.5 1.5L1.5 9.5"
											stroke="black"
											stroke-width="1.3"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M9.5 8.83571V1.5H2.16429"
											stroke="black"
											stroke-width="1.3"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
							</a>
						</div>
					</div>
					<div class="w-full lg:w-1/2 xs:mb-8 lg:mb-0 lg:order-last">
						<Img
							src="/images/hero-mockup-2.jpg"
							alt="sample 1"
							classes="block lg:ml-auto aspect-[4/3] object-cover rounded-xl overflow-hidden"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
