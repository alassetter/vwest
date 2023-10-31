<script>
	const placeholder = '/images/placeholder-lg.jpg';
	const placeholdertwo = '/images/placeholder-lg.jpg';
	const placeholderthree = '/images/placeholder-lg.jpg';
</script>

<section class="-mt-40 bg-black bg-gradient-bluemesh">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full mx-auto">
				<div
					class="relative mx-auto mt-40 mb-12 pt-12 pb-64 xs:pb-40 lg:pb-12"
				>
					<h5
						class="mb-8 font-heading text-subhead font-medium text-gray-400 uppercase"
					>
						Welcome
					</h5>
					<h1 class="mb-8 max-w-3xl font-heading text-white text-6xl">
						Simplifying Complexity with an agile, client-centric
						approach.
					</h1>
					<div
						class="absolute bottom-10 right-0 mb-8 max-w-sm ml-auto text-right"
					>
						<p class="text-lg text-gray-200">
							Vestibulum id ligula porta felis euismod semper.
							Maecenas faucibus mollis interdum. Aenean lacinia
							bibendum nulla.
						</p>
						<p />
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 align-items-end">
					<div class="w-full md:w-6/12 lg:w-7/12 px-3 relative">
						<img
							class="block w-full h-64 lg:h-80 rounded-t-xl object-cover"
							src={placeholder}
							alt="name"
						/>
					</div>
					<div class="hidden md:block md:w-6/12 lg:w-5/12 px-3">
						<div class="flex flex-wrap -mx-3">
							<div class="w-5/12 px-3">
								<img
									class="block w-full h-64 lg:h-80 rounded-t-xl object-cover"
									src={placeholdertwo}
									alt="name"
								/>
							</div>
							<div class="w-7/12 px-3">
								<img
									class="block w-full h-64 lg:h-80 rounded-t-xl object-cover"
									src={placeholderthree}
									alt="name"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
