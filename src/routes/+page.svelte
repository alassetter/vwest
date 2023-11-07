<script>
	const placeholder = '/images/placeholder-lg.jpg';
	import Hero from '$lib/components/content/Hero.svelte';
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

<!-- Two Column -->
<section class="bg-gray-500">
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
						<h2 class="col-span-8 font-heading text-4xl">
							Morbi leo risus, porta ac consectetur ac, vestibulum
							eros.
						</h2>
					</div>
					<div class="lg:w-1/2 xl:w-7/12">
						<div class="max-w-2xl lg:pl-12 lg:ml-auto text-right">
							<a
								class="group inline-flex py-4 px-6 items-center justify-center font-subheading uppercase tracking-widest leading-none font-medium text-white mt-8 mb-8 hover:text-black border border-white rounded-full hover:bg-white transition duration-200"
								href="/"
							>
								<span class="mr-4">Button</span>
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
