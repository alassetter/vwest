<script>
	import { navItems } from '$lib/config';
	import FooterNavItem from '$lib/components/layout/FooterNavItem.svelte';
</script>

<nav>
	<ul>
		{#each navItems as page}
			<FooterNavItem href={page.route}>
				{page.title}
			</FooterNavItem>
		{/each}
	</ul>
</nav>
