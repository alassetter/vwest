<script>
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
  import GridComponent from '$lib/components/layout/Grid.svelte';
</script>

<HeroSolid
	subhead="Style Guide"
	subheadColor="text-gray-300"
	title="Grid"
	titleColor="text-white"
	bodyCopy=""
	bodyColor="text-white"
	backgroundColor="bg-blue-500"
	gradient=""
/>

<section class="bg-gray-200 overflow-hidden">
	<div
		class="py-6 border-b border-gray-400 font-subheading uppercase font-medium"
	>
		<div class="w-full mx-auto px-16 text-gray-500">
			<div>
				<a class="inline-block" href="/style-guide/">Style Guide</a>
				<span class="inline-block mx-4">/</span>
				<a class="inline-block text-gray-600" href="/style-guide/grid">Grid</a>
			</div>
		</div>
	</div>
</section>

<section class="bg-gray-100">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
			<GridComponent
				gridCols="grid-cols-1 sm:grid-cols-12 md:grid-cols-12"
				gap="gap-4"
				padding=""
				bgColor="bg-gray-300"
				rounded="rounded-lg"
				shadow="shadow-lg"
			>
				<div
					class="col-span-4 sm:col-span-6 md:col-span-3 rounded bg-red-500"
				>
					<!-- Content for the 1/4 column -->
					<div class="p-4 rounded-md shadow text-white">Item 1</div>
				</div>
				<div
					class="col-span-4 sm:col-span-6 md:col-span-3 rounded bg-red-500"
				>
					<!-- Content for the 1/4 column -->
					<div class="p-4 rounded-md shadow text-white">Item 2</div>
				</div>
				<div
					class="col-span-4 sm:col-span-12 md:col-span-6 rounded shadow bg-blue-500"
				>
					<!-- Content for the 3/4 column -->
					<div class="p-4 text-white">Item 3</div>
				</div>
			</GridComponent>
			</div>
		</div>
	</div>
</section>


<section class="bg-white">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="text-base font-heading font-medium leading-6 text-gray-900">Grid</h1>
            </div>
          </div>
          <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr class="font-heading">
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-0">Class</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-900">REM</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-900">PX</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">X</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">0rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</section>