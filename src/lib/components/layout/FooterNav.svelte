<script>
	import { navItems } from '$lib/config';
	import { footerItems } from '$lib/config';
	import FooterNavItem from '$lib/components/layout/FooterNavItem.svelte';
	// Social Links
	const socialLinks = [
		{ title: 'LinkedIn', href: 'https://linkedin.com' },
		{ title: 'Instagram', href: 'https://instagram.com' },
		{ title: 'X (Twitter)', href: 'https://x.com/' },
		{ title: 'Github', href: 'https://github.com' }
	];
</script>

<nav>
	<ul role="list" class="grid grid-cols-2 gap-8 sm:grid-cols-3">
		<li>
			<div class="font-display text-sm font-semibold tracking-wider text-neutral-950">Services</div>
			<ul role="list" class="mt-4 text-sm text-neutral-700">
				{#each footerItems as page}
					<FooterNavItem class="transition hover:text-neutral-950" href={page.route}>
						{page.title}
					</FooterNavItem>
				{/each}
			</ul>
		</li>
		<li>
			<div class="font-display text-sm font-semibold tracking-wider text-neutral-950">Company</div>
			<ul role="list" class="mt-4 text-sm text-neutral-700">
				{#each navItems as page}
					<FooterNavItem class="transition hover:text-neutral-950" href={page.route}>
						{page.title}
					</FooterNavItem>
				{/each}
			</ul>
		</li>
		<li>
			<div class="font-display text-sm font-semibold tracking-wider text-neutral-950">Connect</div>
			<ul role="list" class="mt-4 text-sm text-neutral-700">
				{#each socialLinks as sl}
					<li class="mt-4">
						<a
							class="opacity-75 hover:opacity-100"
							href={sl.href}
							target="_blank"
							rel="noreferrer"
							title={sl.title}
						>
							{sl.title}
						</a>
					</li>
				{/each}
			</ul>
		</li>
	</ul>
</nav>
