<script>
	// Props with default values
	export let gridCols = 'grid-cols-1'; // Default to one column
	export let gap = 'gap-4'; // Default gap
	export let padding = 'p-4'; // Default padding
	export let bgColor = ''; // Default background color none
	export let rounded = ''; // Default None
	export let shadow = ''; // Default None
	// Responsive classes
	export let sm = ''; // Small screens
	export let md = ''; // Medium screens
	export let lg = ''; // Large screens
	export let xl = ''; // Extra large screens
	export let twoxl = ''; // 2XL screens
	export let addClasses = '';

	// Function to create grid classes based on the props
	function gridClasses() {
		return `grid ${gridCols} ${gap} ${padding} ${bgColor} ${rounded} ${shadow} ${sm} ${md} ${lg} ${xl} ${twoxl} ${addClasses}`;
	}
</script>

<div class={gridClasses()}>
	<slot />
</div>
