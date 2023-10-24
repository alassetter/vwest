<script>
  import { navItems } from '$lib/config'
	import NavItem from '$lib/components/layout/NavItem.svelte';
  const vlogo = '/V-logo.svg';


</script>

<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
	<a class="" href="/">
		<span class="sr-only">Vortex West</span>
		<img class="h-6 w-auto" src={vlogo} alt="Vortex West Logo" />
	</a>
	<ul class="hidden lg:flex lg:gap-x-12">
    {#each navItems as page}
		<NavItem href={page.route}>
			{page.title}
		</NavItem>
		{/each}
	</ul>
</nav>
