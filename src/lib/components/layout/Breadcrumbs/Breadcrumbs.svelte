<!-- Breadcrumbs.svelte -->
<script>
	import BreadcrumbItem from '$lib/components/layout/Breadcrumbs/BreadcrumbItem.svelte';
	export let bgColor = '';
	export let textColor = '';
	export let borderColor = '';
	export let border = '';
	export let padding = '';
	export let fontFamily = '';
	export let fontWeight = '';
	export let textDecoration = '';
	export let classes = '';
	export let items = [];
</script>

<section>
	<div
		class={`${bgColor} ${textColor} ${borderColor} ${border} ${padding} ${fontFamily} ${fontWeight} ${textDecoration} ${classes}`}
	>
		<nav aria-label="breadcrumb" class="text-sm w-full mx-auto px-12">
			<ol class="list-reset flex">
				{#each items as item, index (item.href)}
					<li class={index === 0 ? '' : 'px-2'}>
						<!-- Destructure the item to pass href and text correctly -->
						<BreadcrumbItem
							href={item.href}
							text={item.text}
							isCurrent={index === items.length - 1}
						/>
					</li>
					{#if index < items.length - 1}
						<!-- Separator for breadcrumb items -->
						<li class="inline-block px-4">/</li>
					{/if}
				{/each}
			</ol>
		</nav>
	</div>
</section>
<!-- 
<script>
import Breadcrumbs from '$lib/components/layout/Breadcrumbs/Breadcrumbs.svelte';
  	// Define the breadcrumb items
	let breadcrumbItems = [
		{ href: '/', text: 'Home' },
		{ href: '/work', text: 'Work' },
		{ text: 'Case Study Three' }
	];
</script>

<Breadcrumbs 
  bgColor = ' '
  textColor = ' '
  borderColor = ' '
  border = ' '
  padding = ' '
  fontFamily = ' '
  fontWeight = ' '
  textDecoration = ' '
  addClasses = ' ';

items={breadcrumbItems} />

 -->
