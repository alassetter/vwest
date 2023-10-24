<script>
import { currentPage } from '$lib/assets/js/store'
export let href
$: isCurrentPage = $currentPage.startsWith(href)
</script>

<li>
  <a
    class="relative inline-block after:absolute after:bg-blue-300 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200 mr-4"
		href={href}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		<slot />
  </a>
</li>