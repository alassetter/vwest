<script>
	import FooterNavItem from '$lib/components/layout/FooterNavItem.svelte';
</script>

<nav>
	<ul role="list" class="grid grid-cols-2 gap-8 sm:grid-cols-3">
		<li>
			<div class="font-display text-sm font-semibold tracking-wider text-neutral-950">Work</div>
			<ul role="list" class="mt-4 text-sm text-neutral-700">
        <FooterNavItem />
			</ul>
		</li>
		<li>
			<div class="font-display text-sm font-semibold tracking-wider text-neutral-950">Company</div>
			<ul role="list" class="mt-4 text-sm text-neutral-700">
        <FooterNavItem />
			</ul>
		</li>
		<li>
			<div class="font-display text-sm font-semibold tracking-wider text-neutral-950">Connect</div>
			<ul role="list" class="mt-4 text-sm text-neutral-700">
				<li class="mt-4">
					<a class="transition hover:text-neutral-950" href="https://facebook.com" target="blank">Facebook</a>
				</li>
				<li class="mt-4">
					<a class="transition hover:text-neutral-950" href="https://instagram.com" target="blank">Instagram</a>
				</li>
				<li class="mt-4">
					<a class="transition hover:text-neutral-950" href="https://twitter.com" target="blank">Twitter</a>
				</li>
				<li class="mt-4">
					<a class="transition hover:text-neutral-950" href="https://github.com" target="blank">GitHub</a>
				</li>
			</ul>
		</li>
	</ul>
</nav>