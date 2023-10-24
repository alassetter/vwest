<script>
	import { currentPage } from '$lib/assets/js/store';
	export let href;
	$: isCurrentPage = $currentPage.startsWith(href);
</script>

<li class="mt-4">
	<a
		class="transition hover:text-neutral-950"
		{href}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : undefined}
	>
  <slot />
	</a>
</li>
