<script>
	import '../app.postcss';
	import ViewPort from '$lib/components/utility/ViewPort.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { currentPage } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { fly, fade } from 'svelte/transition';
	export let data;

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(data.path);

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/

	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});
</script>

<Header />

{#key data.path}
	<div
		class="w-full flex-auto"
		in:fly={{ easing: cubicOut, y: 5, duration: 300, delay: 400 }}
		out:fly={{ easing: cubicIn, y: -5, duration: 300 }}
	>
		<div
			class="mx-auto"
			in:fade={{ easing: cubicOut, duration: 400, delay: 400 }}
			out:fade={{ easing: cubicIn, duration: 400 }}
		>
			<slot />
		</div>
	</div>
	<Footer />
	<ViewPort />
{/key}
