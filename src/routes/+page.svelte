<script>
	const placeholder = '/images/placeholder-lg.jpg';
	import Hero from '$lib/components/content/Hero.svelte';
	import ThreeColIconCard from '$lib/components/content/cards/ThreeColIconCard.svelte';
	import Container from '$lib/components/layout/Container.svelte';
</script>

<Hero />

<!-- Two Column -->
<section class="bg-gray-100">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
				<span
					class="inline-block mb-8 font-heading text-base font-medium uppercase"
					>Two Column</span
				>
				<div class="flex flex-wrap">
					<div class="lg:w-1/2 xl:w-5/12 mb-4 lg:mb-0">
						<h2 class="max-w-lg font-heading text-4xl">
							Morbi leo risus, porta ac consectetur ac, vestibulum
							eros.
						</h2>
					</div>
					<div class="lg:w-1/2 xl:w-7/12">
						<div class="max-w-2xl lg:pl-12 lg:ml-auto">
							<p class="text-lg">
								<span
									>Nulla vitae elit libero, a pharetra augue. Cras
									mattis consectetur purus sit amet fermentum.
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur et.
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Three Columns - Photo -->
<section class="bg-gray-50 overflow-hidden">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto px-4 mb-8">
				<h1 class="font-heading text-3xl -ml-4">Services</h1>
			</div>
			<div class="max-w-full lg:max-w-none mx-auto">
				<div class="flex flex-wrap">
					<!-- Card One -->
					<div class="w-full lg:w-4/12 lg:pr-4 xs:mb-8">
						<a
							class="relative group block w-full h-full text-left text-gray-50 px-6 sm:pl-10 sm:pr-14 pt-32 md:pt-52 xl:pt-80 pb-10 border rounded-2xl bg-black shadow-sm shadow-gray-900/5"
							href="/"
						>
							<img
								class="group-hover:block absolute top-0 left-0 h-full w-full opacity-20 object-cover rounded-2xl group-hover:opacity-100 transition-all ease-in-out duration-200"
								src={placeholder}
								alt="name"
							/>
							<span
								class="relative inline-block mb-3 py-2 text-base uppercase tracking-widest font-heading font-medium group-hover:text-white group-hover transition-all ease-in-out duration-200"
								>Sub headline</span
							>
							<div class="relative max-w-sm">
								<div class="max-w-xs pr-10">
									<h5
										class="text-3xl font-heading group-hover:text-white mb-6 transition-all ease-in-out duration-200"
									>
										Software/Web Development
									</h5>
								</div>
								<p
									class="mb-8 group-hover:text-white transition-all ease-in-out duration-200"
								>
									Nullam quis risus eget urna mollis ornare vel eu
									leo. Aenean lacinia bibendum nulla sed consectetur.
									Praesent commodo cursus magna.
								</p>
								<a
									class="group inline-flex items-center font-medium"
									href="/services"
								>
									<span class="mr-4 uppercase">Learn More</span>
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
												stroke="white"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M9.5 8.83571V1.5H2.16429"
												stroke="white"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
						</a>
					</div>
					<!-- Card Two -->
					<div class="w-full lg:w-4/12 lg:pr-4 xs:mb-8">
						<a
							class="relative group block w-full h-full text-left text-gray-50 px-6 sm:pl-10 sm:pr-14 pt-32 md:pt-52 xl:pt-80 pb-10 border rounded-2xl bg-black shadow-sm shadow-gray-900/5"
							href="/"
						>
							<img
								class="group-hover:block absolute top-0 left-0 h-full w-full opacity-20 object-cover rounded-2xl group-hover:opacity-100 transition-all ease-in-out duration-200"
								src={placeholder}
								alt="name"
							/>
							<span
								class="relative inline-block mb-3 py-2 text-base uppercase tracking-widest font-heading font-medium group-hover:text-white group-hover transition-all ease-in-out duration-200"
								>Sub headline</span
							>
							<div class="relative max-w-sm">
								<div class="max-w-xs pr-10">
									<h5
										class="text-3xl font-heading group-hover:text-white mb-6 transition-all ease-in-out duration-200"
									>
										UI/UX <br />Design
									</h5>
								</div>
								<p
									class="mb-8 group-hover:text-white transition-all ease-in-out duration-200"
								>
									Nullam quis risus eget urna mollis ornare vel eu
									leo. Aenean lacinia bibendum nulla sed consectetur.
									Praesent commodo cursus magna.
								</p>
								<a
									class="group inline-flex items-center font-medium"
									href="/services"
								>
									<span class="mr-4 uppercase">Learn More</span>
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
												stroke="white"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M9.5 8.83571V1.5H2.16429"
												stroke="white"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
						</a>
					</div>
					<!-- Card Three -->
					<div class="w-full lg:w-4/12 lg:pr-4 xs:mb-8">
						<a
							class="relative group block w-full h-full text-left text-gray-50 px-6 sm:pl-10 sm:pr-14 pt-32 md:pt-52 xl:pt-80 pb-10 border rounded-2xl bg-black shadow-sm shadow-gray-900/5"
							href="/"
						>
							<img
								class="group-hover:block absolute top-0 left-0 h-full w-full opacity-20 object-cover rounded-2xl group-hover:opacity-100 transition-all ease-in-out duration-200"
								src={placeholder}
								alt="name"
							/>
							<span
								class="relative inline-block mb-3 py-2 text-base uppercase tracking-widest font-heading font-medium group-hover:text-white group-hover transition-all ease-in-out duration-200"
								>Sub headline</span
							>
							<div class="relative max-w-sm">
								<div class="max-w-xs pr-10">
									<h5
										class="text-3xl font-heading group-hover:text-white mb-6 transition-all ease-in-out duration-200"
									>
										DevOps & SecOps
									</h5>
								</div>
								<p
									class="mb-8 group-hover:text-white transition-all ease-in-out duration-200"
								>
									Nullam quis risus eget urna mollis ornare vel eu
									leo. Aenean lacinia bibendum nulla sed consectetur.
									Praesent commodo cursus magna.
								</p>
								<a
									class="group inline-flex items-center font-medium"
									href="/services"
								>
									<span class="mr-4 uppercase">Learn More</span>
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
												stroke="white"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M9.5 8.83571V1.5H2.16429"
												stroke="white"
												stroke-width="1.3"
												stroke-miterlimit="10"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
								</a>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Three Columns - Text -->
<section class="bg-gray-100">
	<div class="pt-16 pb-16">
		<div class="px-12">
			<div class="max-w-md mx-auto lg:max-w-none">
				<div class="flex flex-wrap">
					<div class="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
						<a
							class="relative group block h-full w-full px-14 py-14 bg-white hover:bg-black border rounded-2xl shadow-sm transition-all ease-in-out duration-400"
							href="/"
						>
							<span
								class="hidden group-hover:block absolute top-0 right-0 mt-16 mr-16"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22 2L2 22"
										stroke="white"
										stroke-width="3.25"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M22 20.3393V2H3.66071"
										stroke="white"
										stroke-width="3.25"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
							<div>
								<div class="max-w-xs">
									<h5
										class="pt-4 font-heading text-3xl group-hover:text-white mb-6"
									>
										Tellus Ipsum Tristique
									</h5>
								</div>
								<p class="group-hover:text-white">
									Etiam porta sem malesuada magna mollis euismod.
									Maecenas sed diam eget risus varius blandit sit amet
									non magna. Donec sed odio dui.
								</p>
							</div>
						</a>
					</div>
					<div class="w-full lg:w-1/3 px-3 mb-6 lg:mb-0">
						<a
							class="relative group block h-full w-full px-9 py-14 bg-white hover:bg-black border rounded-2xl transition duration-300"
							href="/"
						>
							<span
								class="hidden group-hover:block absolute top-0 right-0 mt-16 mr-8"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22 2L2 22"
										stroke="white"
										stroke-width="3.25"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M22 20.3393V2H3.66071"
										stroke="white"
										stroke-width="3.25"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
							<div>
								<div class="max-w-xs pr-10">
									<h5 class="text-3xl group-hover:text-white mb-6">
										Magna Vehicula
									</h5>
								</div>
								<p class="group-hover:text-white">
									Etiam porta sem malesuada magna mollis euismod.
									Maecenas sed diam eget risus varius blandit sit amet
									non magna. Donec sed odio dui.
								</p>
							</div>
						</a>
					</div>
					<div class="w-full lg:w-1/3 px-3">
						<a
							class="relative group block h-full w-full px-9 py-14 bg-white hover:bg-black border rounded-4xl transition duration-300"
							href="/"
						>
							<span
								class="hidden group-hover:block absolute top-0 right-0 mt-16 mr-8"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22 2L2 22"
										stroke="white"
										stroke-width="3.25"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M22 20.3393V2H3.66071"
										stroke="white"
										stroke-width="3.25"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
							<div>
								<div class="max-w-xs pr-10">
									<h5 class="text-3xl group-hover:text-white mb-6">
										Mollis Euismod
									</h5>
								</div>
								<p class="group-hover:text-white">
									Etiam porta sem malesuada magna mollis euismod.
									Maecenas sed diam eget risus varius blandit sit amet
									non magna. Donec sed odio dui.
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Container Test -->
<Container bgColor="bg-gray-900" containerId="containerTest">
	<div
		class="w-full font-spaceg md:8/12 lg:w-9/12 xl:w-7/12 2xl:6/12"
	>
		<p
			class="mb-8 font-heading text-subhead text-gray-300 font-medium uppercase"
		>
			Sub headline
		</p>
		<h1 class="mb-8 font-heading text-4xl text-white">
			Aenean lacinia bibendum nulla sed consectetur.
		</h1>
		<p class="text-lg font-light text-gray-300">
			Vestibulum id ligula porta felis euismod semper. Maecenas
			faucibus mollis interdum. Aenean lacinia bibendum nulla sed
			consectetur. Duis mollis, est non commodo luctus, nisi erat
			porttitor ligula, eget lacinia odio sem nec elit. Cras justo
			odio, dapibus ac facilisis in, egestas eget quam.
		</p>
	</div>
</Container>

<!-- Two Columns - Text and photo and aspect ratio -->
<section class=" bg-coolGray-50">
	<div class="pt-16 pb-16">
		<div class="px-12">
			<div class="w-full mx-auto">
				<div class="flex flex-wrap items-center">
					<div class="w-full lg:w-1/2 mb-16 lg:mb-0">
						<div class="lg:pr-16 xl:pr-20 2xl:pr-32 font-spaceg">
							<p
								class="mb-8 font-subhead text-subhead font-medium uppercase"
							>
								Two Column w/ Image
							</p>
							<h3 class="mb-8 font-heading font-medium text-4xl">
								Aenean lacinia bibendum nulla sed consectetur.
							</h3>
							<p class="text-base mb-10">
								Praesent commodo cursus magna, vel scelerisque nisl
								consectetur et. Cras justo odio, dapibus ac facilisis
								in, egestas eget quam. Aenean eu leo quam.
								Pellentesque ornare sem lacinia quam venenatis
								vestibulum. Etiam porta sem malesuada magna mollis
								euismod.
							</p>
							<a
								class="group inline-flex items-center font-medium hover:text-blue-500"
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
					<div class="w-full lg:w-1/2">
						<img
							class="block lg:ml-auto border rounded-2xl aspect-[4/3]"
							src={placeholder}
							alt="placeholder"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<ThreeColIconCard />
