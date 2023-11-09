<script>
	import Img from '$lib/components/content/Image.svelte';
	import Subhead from '$lib/components/element/Subhead.svelte';
</script>

<section>
	<div class="mt-8">
		<Subhead
			asChild="false"
			as="span"
			fontfamily="font-subheading"
			size="text-subhead"
			weight="font-semibold"
			color="text-gray-800"
			classes="uppercase"
			>Recent News
		</Subhead>
		<div class="group mt-4">
			<a class="md:flex" href="/insights">
				<div class="w-32 mr-4 bg-cover">
					<Img
						src="/images/phone-ui-sq.jpg"
						alt="sample 1"
						classes="block mx-auto rounded-lg overflow-hidden bg-cover aspect-square"
					/>
				</div>
				<div>
					<span
						class="block text-gray-500 mb-1 font-medium font-subheading tracking-widest uppercase"
						>Strategy</span
					>
					<h4 class="text-xs group-hover:text-blue-600 line-clamp-2">
						Consectures Content Velitpato officia consequat duis enim
						velit mollit
					</h4>
				</div>
			</a>
		</div>
		<div class="group mt-4">
			<a class="md:flex" href="/insights">
				<div class="w-32 mr-4 bg-cover">
					<Img
						src="/images/phone-ui-sq.jpg"
						alt="sample 1"
						classes="block mx-auto rounded-lg overflow-hidden bg-cover aspect-square"
					/>
				</div>
				<div>
					<span
						class="block text-gray-500 mb-1 font-medium font-subheading tracking-widest uppercase"
						>Engineering</span
					>
					<h4 class="text-xs group-hover:text-blue-600 line-clamp-2">
						Consectures Content Velitpato officia consequat duis enim
						velit mollit
					</h4>
				</div>
			</a>
		</div>
		<div class="group mt-4">
			<a class="md:flex" href="/insights">
				<div class="w-32 mr-4 bg-cover">
					<Img
						src="/images/phone-ui-sq.jpg"
						alt="sample 1"
						classes="block mx-auto rounded-lg overflow-hidden bg-cover aspect-square"
					/>
				</div>
				<div>
					<span
						class="block text-gray-500 mb-1 font-medium font-subheading tracking-widest uppercase"
						>Design</span
					>
					<h4 class="text-xs group-hover:text-blue-600 line-clamp-2">
						Consectures Content Velitpato officia consequat duis enim
						velit mollit
					</h4>
				</div>
			</a>
		</div>
	</div>
</section>
