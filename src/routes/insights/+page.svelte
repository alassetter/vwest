<script>
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
	import PostCard from '$lib/components/content/blog/PostCard.svelte';
	import CallAction from '$lib/components/content/calltoaction/CallAction.svelte';
</script>

<HeroSolid
	subhead="Insights"
	subheadColor="text-gray-300"
	title="Insights"
	titleColor="text-white"
	bodyCopy=""
	bodyColor="text-white"
	backgroundColor="bg-blue-500"
	gradient=""
/>
<div class="bg-blue-500">
	<section
		class="relative py-12 rounded-tl-5xl rounded-tr-5xl bg-white"
	>
		<div class="w-full px-12 mx-auto">
			<div class="border-b mb-8">
				<div class="flex flex-wrap justify-between">
					<div
						class="flex -mx-4 w-full lg:w-auto flex-wrap items-bottom"
					>
						<div class="px-4">
							<a
								class="font-subheading text-base uppercase font-semibold inline-block px-2 sm:px-8 pb-8 leading-none text-gray-900 sm:border-b-2 border-blue-600"
								href="/">All</a
							>
						</div>
						<div class="px-4">
							<a
								class="font-subheading text-base uppercase font-medium inline-block px-2 pb-8 leading-none text-gray-500 hover:text-gray-900 sm:border-b-2 border-transparent hover:border-blue-600"
								href="/">Strategy</a
							>
						</div>
						<div class="px-4">
							<a
								class="font-subheading text-base uppercase font-medium inline-block px-2 pb-8 leading-none text-gray-500 hover:text-gray-900 sm:border-b-2 border-transparent hover:border-blue-600"
								href="/">Software Development</a
							>
						</div>
						<div class="px-4">
							<a
								class="font-subheading text-base uppercase font-medium inline-block px-2 pb-8 leading-none text-gray-500 hover:text-gray-900 sm:border-b-2 border-transparent hover:border-blue-600"
								href="/">Engineering</a
							>
						</div>
						<div class="px-4">
							<a
								class="font-subheading text-base uppercase font-medium inline-block px-2 pb-8 leading-none text-gray-500 hover:text-gray-900 sm:border-b-2 border-transparent hover:border-blue-600"
								href="/">Design</a
							>
						</div>
						<div class="px-4">
							<a
								class="font-subheading text-base uppercase font-medium inline-block px-2 pb-8 leading-none text-gray-500 hover:text-gray-900 sm:border-b-2 border-transparent hover:border-blue-600"
								href="/">Other</a
							>
						</div>
					</div>
					<div
						class="relative flex w-full lg:w-auto justify-end pb-8 lg:pb-0 order-first lg:order-last"
					>
						<input
							class="h-9 animate-searchInput hidden py-1 px-3 text-sm mr-4 bg-transparent text-gray-400 placeholder-gray-400 border border-gray-200 focus:border-yellowGreen-500 rounded-full outline-none ring-2 ring-transparent focus:ring-yellowGreen-500"
							type="search"
							placeholder="Search..."
						/>
						<button
							class="h-8 py-1 searchButton inline-block cursor-pointer text-gray-900 hover:text-yellowGreen-500 focus:outline-none"
							type="button"
						>
							<svg
								width="24"
								height="24"
								viewbox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M17 17L21 21"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="mb-0">
				<a
					class="group flex flex-wrap -mx-4 items-center"
					href="/articletwo"
				>
					<div class="w-full md:w-1/2 lg:w-7/12 px-4 mb-8 md:mb-0">
						<div class="flex h-full w-full items-center">
							<img
								class="block w-full h-full object-cover rounded-3xl group-hover:border-blue-600border shadow-lg ring ring-transparent group-hover:ring-blue-500 group-hover:shadow-none"
								src="images/placeholder-2.jpg"
								alt=""
							/>
						</div>
					</div>
					<div class="w-full md:w-1/2 lg:w-5/12 px-12">
						<div class="max-w-lg md:mr-auto">
							<h2
								class="font-heading text-4xl text-gray-900 group-hover:text-blue-600 font-medium mb-6"
							>
								Curabitur blandit tempus porttitor. Etiam porta sem
								malesuada.
							</h2>
							<p class="text-lg text-gray-500 mb-4 line-clamp-4">
								Donec id elit non mi porta gravida at eget metus.
								Donec sed odio dui. Morbi leo risus, porta ac
								consectetur ac, vestibulum at eros. Duis mollis, est
								non commodo luctus, nisi erat porttitor ligula, eget
								lacinia odio sem nec elit.
							</p>
							<div class="flex items-center mb-8" />
						</div>
					</div>
				</a>
			</div>
		</div>
	</section>
</div>
<!-- Article Grid -->
<div class="bg-white">
	<div class="py-12 bg-gray-100 rounded-5xl bg-gray-100">
		<div class="w-full px-12">
			<div class="grid grid-cols-12 gap-y-16 sm:gap-x-8">
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Engineering"
						title="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/article"
						image="images/developer-2.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Software Developement"
						title="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/developer.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Engineering"
						title="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/walkway.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Infrastructure"
						title="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/hero-ui-mockup.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Engineering"
						title="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/mockup-hero.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Design"
						title="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/office-overhead.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Infrastructure"
						title="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/developer-2.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="DevOps"
						title="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/office-3.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Engineering"
						title="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/walkway.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Design"
						title="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/office-overhead.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Strategy"
						title="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/hero-mockup-2.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Infrastructure"
						title="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/hero-ui-mockup.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Strategy"
						title="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/developer.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Engineering"
						title="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/walkway.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="DevOps"
						title="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/hero-ui-mockup.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Engineering"
						title="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/office-interior.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="DevOps"
						title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/office-overhead.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Strategy"
						title="Donec ullamcorper nulla non metus auctor fringilla."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/office-3.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Infrastructure"
						title="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/developer-2.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Engineering"
						title="Morbi leo risus, porta ac consectetur ac, vestibulum at eros.le"
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/developer.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Software Developement"
						title="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/office-3.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Engineering"
						title="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/hero-ui-mockup.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Software Developement"
						title="Nullam quis risus eget urna mollis ornare vel eu leo."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/mockup-hero.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Design"
						title="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/office.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Software Development"
						title="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/developer.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="DevOps"
						title="Donec ullamcorper nulla non metus auctor fringilla."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/walkway.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Infrastructure"
						title="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/office-overhead.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Software Developement"
						title="Donec ullamcorper nulla non metus auctor fringilla."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/office.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Design"
						title="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/developer.jpg"
						alt="description"
					/>
				</div>
				<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
					<PostCard
						tag="Infrastructure"
						title="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
						summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
						link="/articletwo"
						image="images/office-3.jpg"
						alt="description"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
<CallAction />
