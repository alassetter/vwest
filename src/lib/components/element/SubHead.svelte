<!-- SubHead Element -->
<!-- import SubHead from '$lib/components/element/SubHead.svelte'; -->
<script>
	export let asChild = false;
	export let as = 'h1'; // Default to h1 if not provided
	export let fontfamily = ''; // Tailwind class for font family, e.g., 'font-sans'
	export let size = ''; // Tailwind class for font size, e.g., 'text-xl'
	export let weight = ''; // Tailwind class for font weight, e.g., 'font-bold'
	export let align = ''; // Tailwind class for text alignment, e.g., 'text-center'
	export let color = ''; // Tailwind class for text color, e.g., 'text-blue-600'
	export let classes = ''; // Any additional Tailwind classes

	// Compute the class string based on props
	$: classString =
		`${fontfamily} ${size} ${weight} ${align} ${color} ${classes}`.trim();
</script>

{#if asChild}
	<svelte:element this={as} class={classString}>
		<slot />
	</svelte:element>
{:else if as === 'h1'}
	<h1 class={classString}><slot /></h1>
{:else if as === 'h2'}
	<h2 class={classString}><slot /></h2>
{:else if as === 'h3'}
	<h3 class={classString}><slot /></h3>
{:else if as === 'h4'}
	<h4 class={classString}><slot /></h4>
{:else if as === 'h5'}
	<h5 class={classString}><slot /></h5>
{:else if as === 'h6'}
	<h6 class={classString}><slot /></h6>
{/if}
