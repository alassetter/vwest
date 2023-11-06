<!-- Text Element Component -->
<!-- import Text from '$lib/components/element/Text.svelte'; -->
<script>
	export let asChild = false;
	export let as = 'span'; // Default element tag
	export let fontFamily = ''; // Tailwind class for font family, e.g., 'font-sans'
	export let size = ''; // Tailwind class for font size, e.g., 'text-xl'
	export let weight = ''; // Tailwind class for font weight, e.g., 'font-bold'
	export let align = ''; // Tailwind class for text alignment, e.g., 'text-left'
	export let color = ''; // Tailwind class for text color, e.g., 'text-blue-600'
	export let margin = ''; // Tailwind class for margin, e.g., 'm-4'
	export let textTransform = ''; // Tailwind class for text transform, e.g., 'uppercase'
	export let classes = ''; // Additional classes

	// Compute the class string based on props
	$: classString =
		`${fontFamily} ${size} ${weight} ${align} ${textTransform} ${color} ${margin} ${classes}`.trim();
</script>

{#if asChild}
	<svelte:element this={as} class={classString}>
		<slot />
	</svelte:element>
{:else}
	<!-- Handle rendering based on the 'as' prop -->
	{#if as === 'p'}
		<p class={classString}><slot /></p>
	{:else if as === 'label'}
		<label class={classString}><slot /></label>
	{:else if as === 'div'}
		<div class={classString}><slot /></div>
	{:else if as === 'span'}
		<span class={classString}><slot /></span>
	{:else}
		<!-- Default case if 'as' is not one of the above -->
		<span class={classString}><slot /></span>
	{/if}
{/if}
<!-- 
<Text
  asChild="false"
  as="span"
  fontFamily="font-sans"
  size="text-24"
  weight="font-medium"
  align="text-center"
  color="text-gray-500"
  margin="mb-8"
  textTransform="uppercase"
  classes="pt-8"
>
  Example
</Text>
-->
