<script>
	const vicon = '/V-logomark.svg';
  import { page } from '$app/stores';
	import FooterNavOne from '$lib/components/layout/FooterNavOne.svelte';
	import FooterNavTwo from '$lib/components/layout/FooterNavTwo.svelte';
</script>

<footer class="py-12 md:p-20 bg-black">
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap -mx-4 mb-32">
			<div class="w-1/6 px-4 mb-12 xl:mb-0">
				<a aria-label="Home" class="inline-block" href="/">
					<img src={vicon} alt="Vortex West Icon" />
				</a>
			</div>
      <div class="w-1/2 sm:w-1/3 lg:w-1/6 xl:w-2/12 px-4 mb-12 xl:mb-0"></div>
			<div class="w-1/2 sm:w-1/3 lg:w-1/6 xl:w-2/12 px-4 mb-10 xl:mb-0">
				<h5 class="text-md text-white uppercase font-spaceg font-semibold tracking-widest mb-4">About</h5>
				<FooterNavOne />
			</div>
			<div class="w-1/2 sm:w-1/12 lg:w-1/6 xl:w-2/12 px-4 mb-10 xl:mb-0">
				<h5 class="text-md text-white uppercase font-spaceg font-semibold tracking-widest mb-4">Company</h5>
				<FooterNavTwo />
			</div>
			<div class="w-full lg:w-1/3 xl:w-4/12 px-4">
				<h4 class="max-w-sm text-2xl text-white font-spaceg font-light mb-9">
					Cras mattis consectetur purus sit amet fermentum.
				</h4>
				<div class="sm:flex max-w-xl">
					<div class="mb-3 sm:mb-0 mr-3">
						<input
							class="w-full py-4 px-4 text-gray-500 bg-black border border-gray-800 rounded-md"
							type="email"
							placeholder="Enter your email"
						/>
					</div>
					<div class="sm:flex-shrink-0">
						<button
							class="inline-block w-full sm:w-auto py-4 px-6 text-center font-medium text-gray-600 bg-gray-900 hover:bg-gray-800 hover:text-white rounded-sm transition duration-200"
							type="submit">Subscribe</button
						>
					</div>
				</div>
			</div>
		</div>
		<hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
		<div class="flex flex-wrap -mx-4">
			<div class="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-6 xl:mb-0">
				<div class="sm:flex -mb-2 items-center">
					<span class="text-xs font-normal text-gray-500"
						>Copyright &copy; {new Date().getFullYear()}
						Vortex West</span
					>
				</div>
			</div>
			<div class="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-6 xl:mb-0">
				<div class="sm:flex -mb-2 justify-center">
					<a
						class="inline-flex mb-2 mr-4 items-center text-xs uppercase tracking-wider text-gray-500 hover:text-gray-400 transition-all duration-150" aria-label="link to linkedin" 
						href="https://www.linkedin.com/company/vortexwest" target="_blank"
					>
						LinkedIn
					</a>
					<a
						class="inline-flex mb-2 mr-4 items-center text-xs uppercase tracking-wider text-gray-500 hover:text-gray-400 transition-all duration-150" aria-label="link to twitter" 
						href="https://twitter.com/" target="_blank"
					>
						<span class="ml-3">Twitter</span>
					</a>
					<a
						class="inline-flex mb-2 mr-4 items-center text-xs uppercase tracking-wider text-gray-500 hover:text-gray-400 transition-all duration-150" aria-label="link to github" 
						href="https://github.com/" target="_blank"
					>
						<span class="ml-3">Github</span>
					</a>
				</div>
			</div>
			<div class="w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 xl:text-right">
				<div class="sm:flex -mb-2 justify-end">
					<a
						class="inline-flex mb-2 mr-4 items-center text-xs uppercase tracking-wider text-gray-500 hover:text-gray-400 transition-all duration-150" aria-label="link to terms and conditions" 
						href="/terms/" aria-current={$page.url.pathname === '/solutions'}>Terms</a
					>
					<a
						class="inline-flex mb-2 items-center text-xs uppercase tracking-wider text-gray-500 hover:text-gray-400 transition-all duration-150" aria-label="link to privacy policy" 
						href="/privacy/" aria-current={$page.url.pathname === '/solutions'}>Privacy</a
					>
				</div>
			</div>
		</div>
	</div>
</footer>
