<script>
	// Props with default values
	export let tag = 'h1';
	export let customColor = 'text-gray-600';
	export let customSize = 'text-subhead';
	export let customFontFamily = 'font-subheading';
	export let customFontWeight = 'font-medium';
	export let customTextDecoration = 'uppercase';
	export let addClasses = ''; // Prop for any additional classes

	// Function to create a dynamic component based on the tag prop
	function createDynamicTag(tag, props, children) {
		return createElement(tag, props, children);
	}
</script>

<!-- This will dynamically render the correct HTML tag -->
<svelte:element
	this={tag}
	class={`${customColor} ${customSize} ${customFontFamily} ${customFontWeight} ${customTextDecoration} ${addClasses}`}
>
	<slot />
</svelte:element>
<!--
<SubHeading 
  tag="h4" 
  customColor="text-gray-600"
  customSize="text-subhead"
  customFontFamily="font-subheading"
  customFontWeight="font-medium"
  customTextDecoration="uppercase"
  addClasses="mb-4"
  >Subtitle Name
  </SubHeading
>
-->
