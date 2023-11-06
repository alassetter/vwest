<!-- Link Element -->
<!-- import Link from '$lib/components/element/Link.svelte'; -->
<script>
	export let asChild = false;
	export let size = ''; // Tailwind class for font size, e.g., 'text-lg'
	export let weight = ''; // Tailwind class for font weight, e.g., 'font-bold'
	export let color = ''; // Tailwind class for text color, e.g., 'text-blue-600'
	export let href = '/'; // Default href if not provided
	export let text = ''; // Link text content
	export let ariaLabel = 'Label Name'; // Default ARIA label
	export let target = '_self'; // Default target if not provided
</script>

{#if asChild}
	<svelte:element
		this="a"
		{href}
		class={`${size} ${weight} ${color} transition-all decoration-blue-200 decoration-2 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 underline underline-offset-2 hover:decoration-blue-600 duration-200`}
		aria-label={ariaLabel || text}
		{target}
	>
		{text}
	</svelte:element>
{:else}
	<a
		{href}
		class={`${size} ${weight} ${color} transition-all decoration-blue-200 decoration-2 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 underline underline-offset-2 hover:decoration-blue-600 duration-200`}
		aria-label={ariaLabel || text}
		{target}
	>
		{text}
	</a>
{/if}

<style>
	/* Ensure the focus ring is visible around the link for keyboard navigation */
	a:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
	}
</style>
