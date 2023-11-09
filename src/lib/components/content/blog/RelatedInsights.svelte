<!-- import RelatedInsights from '$lib/components/content/blog/RelatedInsights.svelte'; -->
<script>
	import PostCard from '$lib/components/content/blog/PostCard.svelte';
</script>

<div class="mt-16 space-y-8 bg-gray-50 py-16">
	<div class="w-full px-12">
		<div class="mx-auto flex items-center">
			<h2 class="heading-md">
				<a href="/insights" class="font-heading text-4xl"
					>Related Insights</a
				>
			</h2>
			<div class="ml-auto hidden lg:block">
				<!-- Medium Button -->
				<a
					href="/insights"
					class="group relative inline-flex items-center justify-center rounded-full border text-center transition-colors border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-blue-600 hover:text-white py-2 pl-6 pr-6 sm:py-4"
					><div class="flex items-center whitespace-nowrap">
						<span
							class="font-subheading font-medium leading-none text-sm pr-2"
							>See All Insights</span
						><span
							class="group-hover:text-white transition-transform group-hover:translate-x-1"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								><line x1="5" y1="12" x2="19" y2="12" /><polyline
									points="12 5 19 12 12 19"
								/></svg
							></span
						>
					</div></a
				>
			</div>
			<div class="ml-auto lg:hidden">
				<a
					href="/insights"
					class="Button Button--sm group relative inline-flex items-center justify-center rounded-full border text-center transition-colors border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-blue-600 hover:text-white py-2 pl-4 pr-3 sm:py-3 sm:pr-4 sm:pl-5"
					draggable="false"
					><div
						class="ButtonLabel flex items-center whitespace-nowrap text-current space-x-2"
					>
						<span
							class="font-subheading font-medium leading-none text-xs"
							>See All Insights</span
						><span
							class="group-hover:text-white transition-transform group-hover:translate-x-1"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								><line x1="5" y1="12" x2="19" y2="12" /><polyline
									points="12 5 19 12 12 19"
								/></svg
							></span
						>
					</div></a
				>
			</div>
		</div>
	</div>
	<div class="w-full px-12">
		<!-- Recent Posts -->
		<div class="grid grid-cols-12 gap-y-16 sm:gap-x-8">
			<!-- Post Card -->
			<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
				<PostCard
					tag="Strategy"
					title="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
					summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
					link="/insights"
					image="images/office-overhead.jpg"
					alt="description"
				/>
			</div>
			<!-- Post Card -->
			<div class="col-span-12 md:col-span-6 lg:col-span-4 block">
				<PostCard
					tag="Software Development"
					title="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
					summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
					link="/insights"
					image="images/developer.jpg"
					alt="description"
				/>
			</div>
			<!-- Post Card - Hidden XS-M -->
			<div
				class="hidden lg:block col-span-12 md:col-span-6 lg:col-span-4"
			>
				<PostCard
					tag="Engineering"
					title="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
					summary="Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla."
					link="/insights"
					image="images/walkway.jpg"
					alt="description"
				/>
			</div>
		</div>
	</div>
</div>
