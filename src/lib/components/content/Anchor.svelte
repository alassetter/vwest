<script>
	// Props that the component will accept
	export let href = '/';
	export let text = 'Default link text';
	export let title = '';
	export let ariaLabel = '';
	export let target = ' '; // Add this line to export the target prop
</script>

<a
	{href}
	class="transition-all decoration-blue-200 decoration-2 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 underline underline-offset-2 hover:decoration-blue-600 duration-200"
	title={title || text}
	aria-label={ariaLabel || text}
	{target}
	{text}
>
	<slot />
</a>

<!-- 
<script>
	import Anchor from '$lib/components/content/Anchor.svelte';
</script>
-->
<!-- 
<Anchor
	href="https://www.example.com"
	text="Visit Example.com"
	title="Go to Example.com"
	ariaLabel="Visit the Example website"
/>
-->

<style>
	/* Ensure the focus ring is visible around the link for keyboard navigation */
	a:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
	}
</style>
