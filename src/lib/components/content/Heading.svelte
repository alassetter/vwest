<script>
	// Props with default values
	export let tag = 'h1';
	export let customColor = 'text-gray-600';
	export let customFontSize = 'text-4xl';
	export let customFontFamily = 'font-heading';
	export let customFontWeight = 'font-medium';
	export let customTextDecoration = '';
	export let addClasses = ''; // Prop for any additional classes

	// Function to create a dynamic component based on the tag prop
	function createDynamicTag(tag, props, children) {
		return createElement(tag, props, children);
	}
</script>

<!-- This will dynamically render the correct HTML tag -->
<svelte:element
	this={tag}
	class={`${customColor} ${customFontSize} ${customFontFamily} ${customFontWeight} ${customTextDecoration} ${addClasses}`}
>
	<slot />
</svelte:element>

<!-- 
<Heading
  tag="h2"
  customColor="text-blue-600"
  customFontSize="text-2xl"
  customFontFamily="font-heading"
  customFontWeight="font-medium"
  customTextDecoration="uppercase"
  addClasses="mb-2">Another Title</Heading
>
-->
