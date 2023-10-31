<script>
	const placeholder = '/images/placeholder-lg.jpg';
	import HeroAlt from '$lib/components/content/HeroAlt.svelte';
</script>

<section>
	<HeroAlt
		backgroundColor="bg-black"
		gradient="bg-gradient-bluemesh"
		subhead="Work"
		subheadColor="text-gray-300"
		title="Work"
		titleColor="text-gray-100"
		bodyCopy=""
		bodyColor="text-gray-300"
		altCopy="name"
	/>
</section>

<section class="bg-gray-300">
	<div class="pt-4 pb-4">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
				<div class="flex flex-wrap">
					<div class="w-full px-4 mx-auto">
						<div
							class="py-4 px-4 mb-8 xl:py-3 font-heading text-md font-medium uppercase bg-gray-50 rounded-2xl shadow-sm"
						>
							<div
								class="md:grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 md:text-center xl:max-w-max xl:mx-auto"
							>
								<a
									class="block py-5 px-8 2xl:px-14 hover:opacity-70"
									href="/work">Featured</a
								><a
									class="block bg-blue-500 text-white py-5 2xl:px-14 rounded-lg px-8 shadow-lg"
									href="/work">Web Development</a
								><a
									class="block py-5 px-8 2xl:px-14 hover:opacity-70"
									href="/work">Engineering</a
								><a
									class="block py-5 px-8 2xl:px-14 hover:opacity-70"
									href="/work">DevOps</a
								><a
									class="block py-5 px-8 2xl:px-14 hover:opacity-70"
									href="/work">UX/UX Design</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="pb-12 md:pb-16 bg-gray-300">
	<div class="m-full mx-auto px-4">
		<div class="px-12">
			<a
				class="relative group block mb-8 rounded-5xl overflow-hidden"
				href="/"
			>
				<div
					class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
				/>
				<img
					class="block w-full h-112 sm:h-135 object-cover"
					src={placeholder}
					alt="name"
				/>
				<div class="absolute bottom-0 left-0 pb-14 px-5 xs:p-14">
					<div class="max-w-xs sm:max-w-xl">
						<div class="mb-6">
							<a
								href="/work"
								class="inline-block py-2 px-6 mx-0 mt-2 mb-0 font-sans text-xs font-light text-gray-600 bg-white align-baseline border border-solid cursor-pointer lg:mt-4 hover:border hover:border-solid border-white hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:border focus:border-solid focus:border-gray-600 focus:bg-gray-600 focus:text-gray-600 rounded-full"
								>Technology</a
							>
						</div>
						<h4
							class="text-4xl font-heading tracking-tighter text-white"
						>
							Project Name
						</h4>
					</div>
				</div>
			</a>
			<div class="flex flex-wrap -mx-4">
				<div class="w-full md:w-1/2 xl:w-1/4 px-4 mb-8 xl:mb-0">
					<a class="group block" href="/">
						<div class="relative mb-6 rounded-3xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<img
								class="block w-full h-80 object-cover"
								src={placeholder}
								alt="name"
							/>
						</div>
						<h4 class="max-w-xs mw-xl-sm text-lg font-heading">
							Project Name
						</h4>
					</a>
				</div>
				<div class="w-full md:w-1/2 xl:w-1/4 px-4 mb-8 xl:mb-0">
					<a class="group block" href="/">
						<div class="relative mb-6 rounded-4xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<img
								class="block w-full h-80 object-cover"
								src={placeholder}
								alt="name"
							/>
						</div>

						<h4 class="max-w-xs mw-xl-sm text-lg font-heading">
							Project Name
						</h4>
					</a>
				</div>
				<div class="w-full xl:w-1/2 px-4">
					<a class="group block" href="/">
						<div class="relative mb-6 rounded-4xl overflow-hidden">
							<div
								class="absolute left-0 top-0 h-full w-full group-hover:bg-opacity-50 group-hover:bg-black transition duration-200"
							/>
							<img
								class="block w-full h-80 object-cover"
								src={placeholder}
								alt="name"
							/>
						</div>
						<h4 class="max-w-xs mw-xl-sm text-lg font-heading">
							Project Name
						</h4>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
