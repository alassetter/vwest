<script>
	export let subhead = 'A Sub Title';
	export let subheadColor = ''; // default color
	export let title = 'Title';
	export let titleColor = ''; // default color
	export let bodyCopy = ''; // default to no copy
	export let bodyColor = ''; // default color
	export let backgroundColor = 'bg-white'; // default to white background
	export let gradient = ''; // default to no gradient
</script>

<div class="-mt-40 pb-4 {backgroundColor}">
	<div class={gradient}>
		<div class="w-full max-w-full mx-auto px-10 pt-40">
			<div class="relative pb-16 pt-16 md:pt-16 lg:pb-24">
				<div class="flex flex-wrap -mx-4 font-spaceg">
					<div class="px-5 lg:px-8 mb-0 lg:mb-0 font-heading">
						<p
							class="mb-8 text-subhead font-medium {subheadColor} uppercase"
						>
							{subhead}
						</p>
						<h2 class="text-9xl font-normal mb-6 {titleColor}">
							{title}
						</h2>
						<p
							class="text-lg font-light max-w-full md:w-7/12 2xl:max-w-7/12 {bodyColor}"
						>
							{bodyCopy}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
