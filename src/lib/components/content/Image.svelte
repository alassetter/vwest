<script>
	// Props with default values
	export let src = '/images/placeholder-lg.jpg'; // Default source of the image
	export let alt = 'demo'; // Default alternative text for the image
	export let width; // Optional: width of the image
	export let height; // Optional: height of the image
	export let classes = ''; // Optional: additional classes for styling
</script>

<img {src} {alt} {width} {height} class={classes} />

<!-- This will use the default src and alt values -->
<!-- <Img /> -->

<!-- Using Img with specified width and height -->
<!-- <Img src="/images/placeholder-lg.jpg" alt="sample 1" width="200" height="200" classes="rounded-lg shadow-md" /> -->
