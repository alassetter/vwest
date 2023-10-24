<script>
	const vlogo = '/V-logo.svg';
	import NavItem from '$lib/components/layout/NavItem.svelte';
</script>

<nav class="">
	<a class="" href="/">
		<span class="sr-only">Vortex West</span>
		<img class="h-6 w-auto" src={vlogo} alt="Vortex West Logo" />
	</a>
	<ul class="">
		<NavItem />
	</ul>
</nav>
