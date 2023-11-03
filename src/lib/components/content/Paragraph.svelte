<script>
	// Props with default values
	export let color = 'text-black';
	export let customSize = 'text-base';
	export let fontFamily = 'sans'; // Assuming 'font-body' is your default body font in Tailwind CSS
	export let addClasses = ''; // Prop for any additional classes
</script>

<!-- This will render a paragraph with the specified styles -->
<p class={`${fontFamily} ${color} ${customSize} ${addClasses}`}>
	<slot />
</p>

<!-- 
<script>
  import Paragraph from './Paragraph.svelte';
</script>
 -->

<!-- This will use the default font family 'font-body' -->
<!-- 
<Paragraph color="text-gray-700" customSize="text-lg">
  This is a paragraph with custom styles.
</Paragraph>
-->

<!-- This will use a different font family 'font-special' -->
<!-- 
<Paragraph fontFamily="font-special" color="text-red-500" customSize="text-sm" addClasses="">
  This is another paragraph with a different font and styles.
</Paragraph>
-->
