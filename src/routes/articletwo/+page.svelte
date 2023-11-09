<script>
	import GridComponent from '$lib/components/layout/Grid.svelte';
	import PostHeader from '$lib/components/content/blog/PostHeader.svelte';
	import ArticleBody from '$lib/components/content/blog/ArticleBody.svelte';
	import BlogNav from '$lib/components/content/blog/BlogNav.svelte';
	import RecentNewsWidget from '$lib/components/content/blog/RecentNewsWidget.svelte';
	import RelatedInsights from '$lib/components/content/blog/RelatedInsights.svelte';
</script>

<PostHeader />
<section>
	<div class="pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
				<GridComponent
					gridCols="grid-cols-1 sm:grid-cols-12 md:grid-cols-12"
					gap="gap-8"
				>
					<div class="col-span-8">
						<!-- Content -->
						<div class="flex flex-wrap">
							<!-- Article Block -->
							<ArticleBody />
						</div>
					</div>

					<div class="hidden md:block col-span-4">
						<!-- Sidebar -->
						<BlogNav />
						<RecentNewsWidget />
					</div>
				</GridComponent>
			</div>
		</div>
	</div>
</section>
<RelatedInsights />
