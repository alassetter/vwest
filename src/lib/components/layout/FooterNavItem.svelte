<script>
	import { currentPage } from '$lib/assets/js/store';
	export let href;
	$: isCurrentPage = $currentPage.startsWith(href);
</script>

<li class="mb-2">
	<a
		class="inline-block text-md tracking-wider text-gray-500 hover:text-gray-400 transition-all duration-150"
		{href}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		<slot />
	</a>
</li>
