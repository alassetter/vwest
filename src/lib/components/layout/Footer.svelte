<script>
	const vicon = '/V-logomark.svg';
	import FooterNav from '$lib/components/layout/FooterNav.svelte';
</script>

<footer class="mx-auto w-full px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 bg-slate-300">
	<div class="mx-auto max-w-2xl lg:max-w-none">
		<div style="opacity: 1;">
			<div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
				<div class="flex lg:justify-start">
					<form class="max-w-sm">
						<h2 class="font-display text-sm font-semibold tracking-wider text-neutral-950">
							Sign up for our newsletter
						</h2>
						<p class="mt-4 text-sm text-neutral-700">
							Donec id elit non mi porta gravida at eget metus.
						</p>
						<div class="relative mt-6" />
					</form>
				</div>
				<FooterNav />
			</div>
			<div
				class="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12"
			>
				<a aria-label="Home" href="/">
					<img style="height: 32px;" src={vicon} alt="Vortex West Icon" />
				</a>
				<p class="text-xs text-neutral-700">
					Copyright &copy; {new Date().getFullYear()}
					Vortex West
				</p>
			</div>
		</div>
	</div>
</footer>
