<script>
	import { footerItems } from '$lib/config';
	import FooterNavItem from '$lib/components/layout/FooterNavItem.svelte';
</script>

<nav>
	<ul>
		{#each footerItems as page}
			<FooterNavItem href={page.route}>
				{page.title}
			</FooterNavItem>
		{/each}
	</ul>
</nav>
