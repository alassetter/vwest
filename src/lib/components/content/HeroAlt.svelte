<script>
	export let backgroundColor = 'bg-white'; // default to white background
	export let gradient = ''; // default to no gradient
	export let subhead = 'A Sub Title';
	export let subheadColor = 'text-gray-800'; // default color
	export let title = 'Title';
	export let titleColor = 'text-gray-800'; // default color
	export let bodyCopy = ' ';
	export let bodyColor = 'text-gray-800'; // default color
	export let image = '/images/placeholder-lg.jpg';
	export let imageAlt = ' ';
	export let classes =
		'absolute w-full mx-auto left-0 top-0 rounded-xl object-cover h-112 lg:h-196 xl:h-200 aspect-video';
</script>

<div class={`-mt-40 pb-4 ${backgroundColor}`}>
	<div class={gradient}>
		<div class="w-full max-w-full mx-auto px-10 pt-40">
			<div
				class="relative mb-48 pb-32 pt-12 md:pt-16 lg:mb-64 lg:pb-48"
			>
				<div class="flex flex-wrap -mx-4 mb-16 lg:mb-20 font-spaceg">
					<div class="px-5 lg:px-8 mb-0 lg:mb-0 font-heading">
						<p
							class={`mb-8 text-subhead font-medium uppercase ${subheadColor}`}
						>
							{subhead}
						</p>
						<h2 class={`text-9xl font-normal mb-6 ${titleColor}`}>
							{title}
						</h2>
						<p
							class={`text-lg font-light max-w-full md:w-7/12 2xl:max-w-7/12 ${bodyColor}`}
						>
							{bodyCopy}
						</p>
					</div>
				</div>
				<div class="relative mx-auto max-w-full">
					<img alt="{imageAlt}}" class={classes} src={image} />
				</div>
			</div>
		</div>
	</div>
</div>
