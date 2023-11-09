<!-- import PostCard from '$lib/components/content/blog/PostCard.svelte'; -->
<script>
	export let tag = ''; // default tag
	export let title = 'Title'; // default title
	export let summary = ''; // default summary copy
	export let link = '/'; // default href
	export let image = 'images/developer-2.jpg'; // corrected image variable
	export let alt = 'description'; // default description
</script>

<div class="group">
	<a class="group relative mb-6 block overflow-hidden" href={link}>
		<div
			class="relative rounded-xl transition duration-300 ease-out aspect-video group-hover:scale-[1.3]"
		>
			<img
				class="block w-full rounded-xl object-fit"
				src={image}
				{alt}
			/>
			<!-- corrected image variable -->
		</div>
	</a>
	<div class="space-y-3 xl:space-y-4">
		<a class="group relative mb-2 mr-2" href={link}>
			<div
				class="inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 transition-colors ease-out group-hover:border-gray-300 group-hover:bg-gray-300"
			>
				<div class="font-mono text-xxs">{tag}</div>
			</div>
		</a>
		<a
			class="font-heading font-medium text-lg block group-hover:text-blue-600"
			href={link}>{title}</a
		>
		<div>
			<div class="prose mb-4 opacity-75 line-clamp-3">{summary}</div>
			<a
				class="opacity-75 transition-opacity group-hover:opacity-100"
				href={link}
			>
				<div class="hidden sm:block">
					<div
						class="flex items-center whitespace-nowrap text-current space-x-2"
					>
						<span
							class="font-subheading leading-none font-medium text-base group-hover:text-blue-600"
							>Read More</span
						>
						<span
							class="text-blue-600 transition-transform group-hover:translate-x-1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<line x1="5" y1="12" x2="19" y2="12" />
								<polyline points="12 5 19 12 12 19" />
							</svg>
						</span>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>

<!-- 
<PostCard 
tag = ''
let title = 'Title
let summary = ''
let link = '/'
let image = 'images/developer-2.jpg'
let alt = 'description'
></PostCard> -->
