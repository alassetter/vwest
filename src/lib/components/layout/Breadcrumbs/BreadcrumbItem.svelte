<!-- BreadcrumbItem.svelte -->
<script>
	export let href;
	export let text;
	export let isCurrent = false; // Added a prop to indicate if this is the current page
</script>

<!-- Only set aria-current for the current page -->
<a
	{href}
	class="text-gray-500 font-semibold hover:text-blue-600 visited:text-gray-400 transition-all duration-300 ease-in-out focus:outline-none"
	aria-current={isCurrent ? 'page' : undefined}
>
	{text}
</a>
