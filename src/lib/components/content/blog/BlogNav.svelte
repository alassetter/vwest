<script>
	import Subhead from '$lib/components/element/Subhead.svelte';
</script>

<section>
	<Subhead
		asChild="false"
		as="span"
		fontfamily="font-subheading"
		size="text-subhead"
		weight="font-semibold"
		color="text-gray-800"
		classes="uppercase"
		>Categories
	</Subhead>
	<ul>
		<li class="flex">
			<a
				href="/insights"
				class="block flex-1 p-4 font-spaceg text-base font-light my-1 text-gray-600 hover:text-white hover:bg-blue-500 duration-200 ease-in hover:opacity-80 rounded-md"
				>Strategy
			</a>
		</li>
		<hr class="my-0.5 h-px border-0 bg-gray-200 dark:bg-gray-700" />
		<li class="flex">
			<a
				href="/insights"
				class="block flex-1 p-4 font-spaceg text-base font-light my-1 text-gray-600 hover:text-white hover:bg-blue-500 duration-200 ease-in hover:opacity-80 rounded-md"
				>Engineering
			</a>
		</li>
		<hr class="my-0.5 h-px border-0 bg-gray-200 dark:bg-gray-700" />
		<li class="flex">
			<a
				href="/insights"
				class="block flex-1 p-4 font-spaceg text-base font-light my-1 text-gray-600 hover:text-white hover:bg-blue-500 duration-200 ease-in hover:opacity-80 rounded-md"
				>Technology
			</a>
		</li>
		<hr class="my-0.5 h-px border-0 bg-gray-200 dark:bg-gray-700" />
		<li class="flex">
			<a
				href="/insights"
				class="block flex-1 p-4 font-spaceg text-base font-light my-1 text-gray-600 hover:text-white hover:bg-blue-500 duration-200 ease-in hover:opacity-80 rounded-md"
				>Design
			</a>
		</li>
		<hr class="my-0.5 h-px border-0 bg-gray-200 dark:bg-gray-700" />
		<li class="flex">
			<a
				href="/insights"
				class="block flex-1 p-4 font-spaceg text-base font-light my-1 text-gray-600 hover:text-white hover:bg-blue-500 duration-300 ease-in hover:opacity-80 rounded-md"
				>Infrastructure
			</a>
		</li>
		<hr class="my-0.5 h-px border-0 bg-gray-200 dark:bg-gray-700" />
	</ul>
</section>
