<script>
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
  import ColorComponent from '$lib/components/styles/ColorComponent.svelte';
</script>

<HeroSolid
	subhead="Style Guide"
	subheadColor="text-gray-300"
	title="Colors"
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
				<a class="inline-block text-gray-600" href="/style-guide/colors">Colors</a>
			</div>
		</div>
	</div>
</section>

<section class="bg-gray-100">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
      <ColorComponent colorName="neutral" />
      <ColorComponent colorName="gray" />
      <ColorComponent colorName="blue" />
      <ColorComponent colorName="red" />
      <ColorComponent colorName="yellow" />
      <ColorComponent colorName="green" />
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
              <h1 class="text-base font-heading font-medium leading-6 text-gray-900">Colors</h1>
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