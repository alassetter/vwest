<script>
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
</script>

<HeroSolid
	subhead="Style Guide"
	subheadColor="text-gray-300"
	title="Border Radius"
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
				<a class="inline-block" href="/style-guide">Style Guide</a>
				<span class="inline-block mx-4">/</span>
				<a class="inline-block text-gray-600" href="/style-guide/border">Border Radius</a>
			</div>
		</div>
	</div>
</section>

<section class="bg-gray-300">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
				<div
					class="my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 -mr-0.5"
				>
          <div class="h-24 origin-left bg-white px-1 flex items-center border-2 border-blue-500 rounded-sm">
					  <span class="flex-auto text-center text-gray-600">
              rounded-sm</span>	
					</div>
          
          <div class="h-24 origin-left bg-white  px-1 flex items-center border-2 border-blue-500 rounded">
					  <span class="flex-auto text-center text-gray-600">
              rounded</span>	
					</div>

          <div class="h-24 origin-left bg-white  px-1 flex items-center border-2 border-blue-500 rounded-md">
					  <span class="flex-auto text-center text-gray-600">
              rounded-md</span>	
					</div>

          <div class="h-24 origin-left bg-white  px-1 flex items-center border-2 border-blue-500 rounded-lg">
					  <span class="flex-auto text-center text-gray-600">
              rounded-lg</span>	
					</div>

          <div class="h-24 origin-left bg-white  px-1 flex items-center border-2 border-blue-500 rounded-xl">
					  <span class="flex-auto text-center text-gray-600">
              rounded-xl</span>	
					</div>
          <div class="h-24 origin-left bg-white  px-1 flex items-center border-2 border-blue-500 rounded-2xl">
					  <span class="flex-auto text-center text-gray-600">
              rounded-2xl</span>	
					</div>

          <div class="h-24 origin-left bg-white  px-1 flex items-center border-2 border-blue-500 rounded-3xl">
					  <span class="flex-auto text-center text-gray-600">
              rounded-3xl</span>	
					</div>

          <div class="h-24 origin-left bg-white  px-1 flex items-center border-2 border-blue-500 rounded-4xl">
					  <span class="flex-auto text-center text-gray-600">
              rounded-4xl</span>	
					</div>

          <div class="h-24 origin-left bg-white  px-1 flex items-center border-2 border-blue-500 rounded-5xl">
					  <span class="flex-auto text-center text-gray-600">
              rounded-5xl</span>	
					</div>
          <div class="h-24 origin-left bg-white  px-1 flex items-center border-2 border-blue-500 rounded-full">
					  <span class="flex-auto text-center text-gray-600">
              rounded-full</span>	
					</div>
				</div>
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
              <h1 class="text-base font-heading font-medium leading-6 text-gray-900">Border Radius</h1>
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
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded-none</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">0rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded-none</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">0rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded-sm</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">0.125rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">0.25rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded-md</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">0.375rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded-lg</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">0.5rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded-xl</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">0.75rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded-2xl</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">1.0rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded-3xl</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">1.25rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded-4xl</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">1.5rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded-5xl</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">2.0rem</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">px</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium text-gray-900 sm:pl-0">rounded-full</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">-</td>
                      <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">9999px</td>
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