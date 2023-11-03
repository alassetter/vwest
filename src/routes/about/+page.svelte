<script>
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
	import GridComponent from '$lib/components/layout/Grid.svelte';
	import Heading from '$lib/components/content/Heading.svelte';
	import Paragraph from '$lib/components/content/Paragraph.svelte';
	import Img from '$lib/components/content/Image.svelte';
	import Modal from '$lib/components/content/Modal.svelte';
	let showModal = false;

	function toggleModal() {
		showModal = !showModal;
	}
</script>

<HeroSolid
	subhead="About Us"
	subheadColor="text-gray-300"
	title="About"
	titleColor="text-white"
	bodyCopy=" "
	bodyColor="text-white"
	backgroundColor="bg-blue-500"
	gradient=""
/>

<section class="bg-gray-10">
	<div class="pt-24 pb-24">
		<!-- Global Padding -->
		<div class="px-12">
			<GridComponent
				gridCols="grid-cols-1 sm:grid-cols-12 md:grid-cols-12"
				gap="gap-4"
				padding=""
				bgColor="bg-gray-300"
				rounded="rounded-lg"
				shadow="shadow-lg"
			>
				<div
					class="col-span-4 sm:col-span-6 md:col-span-3 rounded bg-red-500"
				>
					<!-- Content for the 1/4 column -->
					<div class="p-4 rounded-md shadow text-white">Item 1</div>
				</div>
				<div
					class="col-span-4 sm:col-span-6 md:col-span-3 rounded bg-red-500"
				>
					<!-- Content for the 1/4 column -->
					<div class="p-4 rounded-md shadow text-white">Item 2</div>
				</div>
				<div
					class="col-span-4 sm:col-span-12 md:col-span-6 rounded shadow bg-blue-500"
				>
					<!-- Content for the 3/4 column -->
					<div class="p-4 text-white">Item 3</div>
				</div>
			</GridComponent>
		</div>
	</div>
</section>

<section class="bg-gray-10">
	<div class="pt-24 pb-24">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
				<!-- Content -->
				<div class="flex flex-wrap -mx-4 mb-16">
					<div class="lg:w-8/12 px-4 mb-12 lg:mb-0">
						<!-- <h5
							class="font-heading text-subhead mb-8 font-medium uppercase"
						>
							About us
						</h5> -->
						<h1 class="font-heading text-5xl mb-8 tracking-tightest">
							Established Expertise In Inovative Software Solutions
						</h1>
						<p class="text-xl tracking-tight">
							<span class="font-heading text-gray-600"
								>Vortex West is a boutique product and software
								development agency, headquartered in the United
								States, with an additional office in Belgrade, Serbia.</span
							>
						</p>
					</div>
					<div class="lg:w-4/12 px-4 text-right lg:mt-8" />
				</div>
				<div class="flex flex-wrap -mx-4">
					<div class="w-full lg:w-7/12 xl:w-7/12 px-4 mb-20 xl:mb-0">
						<div class="flex flex-wrap -mx-4 align-items-stretch">
							<div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
								<div
									class="overflow-hidden bg-white px-4 py-5 border rounded-xl shadow-sm sm:p-6"
								>
									<dd
										class="mt-24 text-8xl font-heading tracking-tight text-gray-900"
									>
										0%
									</dd>
									<dt
										class="truncate text-sm font-medium text-gray-500"
									>
										Label
									</dt>
								</div>
								<div
									class="flex items-end mb-4 pl-8 pr-1 xl:pl-10 h-64 pb-10 border rounded-xl"
								>
									<div>
										<h5 class="font-heading text-8xl">4</h5>
										<span class="block text-gray-600"
											>Years In Business</span
										>
									</div>
								</div>
								<div
									class="flex items-end mb-4 pl-8 pr-1 xl:pl-10 h-64 pb-10 border rounded-xl bg-white shadow-sm"
								>
									<div>
										<h5 class="font-heading text-8xl">25+</h5>
										<span class="block text-gray-600"
											>Full Time Engineers</span
										>
									</div>
								</div>
							</div>
							<!-- Row Two -->
							<div class="w-full md:w-1/2 px-2">
								<div
									class="flex items-end mb-4 pl-8 pr-1 xl:pl-10 h-64 pb-10 border rounded-xl bg-white shadow-sm"
								>
									<div>
										<h5 class="font-heading text-7xl text-blue-500">
											0%
										</h5>
										<span class="block text-gray-600"
											>Staff Turnover</span
										>
									</div>
								</div>
								<div
									class="flex items-end mb-4 pl-8 pr-1 xl:pl-10 h-64 pb-10 border rounded-xl bg-white shadow-sm"
								>
									<div>
										<h5 class="font-heading text-7xl text-blue-500">
											125+
										</h5>
										<span class="block text-gray-700 font-medium"
											>Years of Experience</span
										>
									</div>
								</div>
							</div>
							<!-- Row Three -->
						</div>
					</div>
					<div
						class="w-full lg:w-5/12 lg:pl-16 xl:w-5/12 2xl:5/12 px-4"
					>
						<p class="tracking-tight text-lg">
							Our core focus lies in fostering business growth by
							delivering innovative software solutions and providing
							forward-thinking companies access to the finest
							engineering talent in Southeastern Europe. Passion is
							the driving force behind our work, as we are committed
							to create solutions that propel our clients' businesses
							to new heights.
						</p>
					</div>
				</div>
				<!-- / Content -->
			</div>
		</div>
	</div>
</section>

<section class="bg-gray-100 overflow-hidden">
	<div class="pt-24 pb-24">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="flex flex-wrap -mx-4 items-center mb-20">
				<div class="w-full lg:w-8/12 xl:w-1/2 px-4 mb-8 lg:mb-0">
					<h1 class="font-heading text-6xl">Meet Our Team</h1>
				</div>
				<div class="w-full lg:w-4/12 xl:w-1/2 px-4">
					<div class="flex items-center justify-end">
						<!-- Left Button -->
						<a
							class="inline-flex h-16 sm:h-18 w-16 sm:w-18 mr-8 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200"
							href="/"
						>
							<svg
								width="27"
								height="27"
								viewBox="0 0 27 27"
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
						<!-- Right Button -->
						<a
							class="inline-flex h-16 sm:h-18 w-16 sm:w-18 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200"
							href="/"
						>
							<svg
								width="27"
								height="27"
								viewBox="0 0 27 27"
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
			<div class="flex items-center">
				<div class="shrink-0 mr-8 w-full max-w-md">
					<Img
						src="/images/headshot-3.jpg"
						alt="Richard Danicic Profile Photo"
						classes="rounded-lg shadow-md overflow-hidden shadow-sm mb-8"
					/>
					<div class="max-w-sm">
						<h4 class="text-2xl font-medium">Richard Danicic</h4>
						<span
							class="mt-1 block text-sm text-gray-600 uppercase font-medium font-spaceg mb-4"
							>Chief Executive Officer</span
						>
						<Paragraph color="text-gray-700" customSize="text-base">
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur et. Integer posuere erat a ante venenatis
							dapibus posuere velit aliquet. Aenean lacinia bibendum
							nulla sed consectetur.
						</Paragraph>
						<Modal
							><p>
								Long form Biography content would go here.
							</p></Modal
						>
					</div>
				</div>
				<div class="shrink-0 mr-8 w-full max-w-md">
					<Img
						src="/images/headshot-4.jpg"
						alt="Richard Danicic Profile Photo"
						classes="rounded-lg shadow-md overflow-hidden shadow-sm mb-8"
					/>
					<div class="max-w-sm">
						<h4 class="text-2xl font-spaceg font-medium">
							Nebojsa Knezevic
						</h4>
						<span
							class="mt-1 mb-4 block text-sm text-blue-500 uppercase font-medium font-spaceg"
							>Chief Technical Officer</span
						>
						<Paragraph color="text-gray-700" customSize="text-base">
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur et. Integer posuere erat a ante venenatis
							dapibus posuere velit aliquet. Aenean lacinia bibendum
							nulla sed consectetur.
						</Paragraph>
					</div>
				</div>
				<div class="shrink-0 mr-8 w-full max-w-md">
					<Img
						src="/images/headshot-2.jpg"
						alt="Richard Danicic Profile Photo"
						classes="rounded-lg shadow-md overflow-hidden shadow-sm mb-8"
					/>
					<div class="max-w-sm">
						<h4 class="text-2xl font-spaceg font-medium">
							Filip Micic
						</h4>
						<span
							class="mt-1 mb-4 block text-sm text-gray-600 uppercase font-medium font-spaceg"
							>Head of Engineering</span
						>
						<Paragraph color="text-gray-700" customSize="text-base">
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur et. Integer posuere erat a ante venenatis
							dapibus posuere velit aliquet. Aenean lacinia bibendum
							nulla sed consectetur.
						</Paragraph>
					</div>
				</div>
				<div class="shrink-0 w-full max-w-md">
					<Img
						src="/images/headshot-5.jpg"
						alt="Richard Danicic Profile Photo"
						classes="rounded-lg shadow-md overflow-hidden shadow-sm mb-8"
					/>
					<div class="max-w-sm">
						<h4 class="text-2xl font-spaceg font-medium">
							Jovana Lujic
						</h4>
						<span
							class="mt-1 mb-4 block text-sm text-gray-600 uppercase font-medium font-spaceg"
							>Office & HR Operations Manager</span
						>
						<Paragraph color="text-gray-700" customSize="text-base">
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur et. Integer posuere erat a ante venenatis
							dapibus posuere velit aliquet. Aenean lacinia bibendum
							nulla sed consectetur.
						</Paragraph>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

{#if showModal}
	<Modal on:close={toggleModal}>
		<div>
			<p>
				This is the content of the modal. You can place any HTML or
				Svelte component here.
			</p>
			<button on:click={toggleModal}>Close</button>
		</div>
	</Modal>
{/if}
