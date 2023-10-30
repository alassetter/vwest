<script>
  const placeholder = '/images/placeholder.svg';
  import ColorComponent from '$lib/components/styles/ColorComponent.svelte';
</script>

<section class="bg-gray-100">
	<div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl lg:py-24">
		<div>
			<p class="text-4xl font-normal font-spaceg">
				Style guide
			</p>
		</div>
		<div class="mt-12 w-full">

			<!-- Primary Typeface -->
			<section>
				<div class="border-gray-300 border-b pb-5">
					<h3 class="text-black font-semibold text-base subpixel-antialiased">
						Primary Typeface: <span class="text-blue-500"> Space Grotesk</span>
					</h3>
				</div>
				<div class="py-3 space-y-6 mt-12 font-spaceg">
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 font-spaceg text-md">Display</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span
								class="font-serif text-6xl font-medium tracking-tighter text-blue-500"
								>Display</span
							>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Header's</span></div>
						<div class="col-span-2 lg:col-span-3 font-spaceg">
							<span class="font-spaceg text-5xl"
								>Header 1</span
							>
							<h2 class="text-4xl">
								Header 2
							</h2>
							<h3 class="text-2xl">
								Header 3
							</h3>
							<h4 class="text-xl">
								Header 4
							</h4>
							<h5 class="text-lg">
								Header 5
							</h5>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Link</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="font-serif text-gray-500 hover:text-gray-900 text-sm underline">Link text</span>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Subtitle</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="font-spaceg text-base font-medium uppercase">Subtitle text</span>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Paragraph - Base</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="text-base"
								>Previously, domains had to be removed from a project before being added to a new
								one. With this update, if you attempt to move a live domain to a new project, a
								prompt will appear offering to move the in-use domain and all associated redirects
								to the selected project.</span
							>
						</div>
					</div>

					<div class="grid grid-cols-3 items-end lg:grid-cols-4 align-text-top">
						<div><span class="text-gray-500 text-md align-text-top">Paragraph - Large</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="text-lg"
								>Previously, domains had to be removed from a project before being added to a new
								one. With this update, if you attempt to move a live domain to a new project, a
								prompt will appear offering to move the in-use domain and all associated redirects
								to the selected project.</span
							>
						</div>
					</div>

          <div class="grid grid-cols-3 items-end lg:grid-cols-4 align-text-top">
						<div><span class="text-gray-500 text-md align-text-top">Paragraph - Medium</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="text-md"
								>Previously, domains had to be removed from a project before being added to a new
								one. With this update, if you attempt to move a live domain to a new project, a
								prompt will appear offering to move the in-use domain and all associated redirects
								to the selected project.</span
							>
						</div>
					</div>

					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Caption</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="text-sm"><em>Caption about something</em></span>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Code</span></div>
						<div class="col-span-2 lg:col-span-3">
							<code class="text-xs font-mono prose">styleguide.config.js</code>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">List</span></div>
						<div class="col-span-2 lg:col-span-3">
							<ul class="list-disc" role="list">
								<li>List Item One</li>
								<li>List Item Two</li>
								<li>List Item Three</li>
								<li>List Item Four</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<!-- Secondary Typeface -->
			<section>
				<div class="border-gray-300 border-b pb-5 lg:mt-24 mt-12">
					<h3 class="text-black font-semibold text-base">
						Secondary Typeface: <span class="text-blue-500"> Inter</span>
					</h3>
				</div>
				<div class="py-3 space-y-6 mt-12">
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Display</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="text-4xl font-semibold text-blue-500"
								>Display</span
							>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Header's</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="text-4xl font-semibold">Header 1</span>
							<h2 class="text-3xl font-semibold">Header 2</h2>
							<h3 class="text-2xl font-semibold">Header 3</h3>
							<h4 class="text-xl font-semibold">Header 4</h4>
							<h5 class="text-lg font-semibold">Header 5</h5>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Link</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="text-gray-500 hover:text-gray-900 text-sm underline">Link text</span>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Subtitle</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="text-base font-medium text-gray-900">Subtitle text</span>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Paragraph - Base</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="text-base text-gray-500"
								>Previously, domains had to be removed from a project before being added to a new
								one. With this update, if you attempt to move a live domain to a new project, a
								prompt will appear offering to move the in-use domain and all associated redirects
								to the selected project.</span
							>
						</div>
					</div>

					<div class="grid grid-cols-3 items-end lg:grid-cols-4 align-text-top">
						<div><span class="text-gray-500 text-md align-text-top">Paragraph - Large</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="text-lg text-gray-500"
								>Previously, domains had to be removed from a project before being added to a new
								one. With this update, if you attempt to move a live domain to a new project, a
								prompt will appear offering to move the in-use domain and all associated redirects
								to the selected project.</span
							>
						</div>
					</div>

					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Caption</span></div>
						<div class="col-span-2 lg:col-span-3">
							<span class="text-gray-500 text-xs">Caption about something</span>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">Code</span></div>
						<div class="col-span-2 lg:col-span-3">
							<code class="text-gray-500 text-xs font-mono prose">styleguide.config.js</code>
						</div>
					</div>
					<div class="grid grid-cols-3 items-end lg:grid-cols-4">
						<div><span class="text-gray-500 text-md">List</span></div>
						<div class="col-span-2 lg:col-span-3">
							<ul class="prose-sm text-gray-500 list-disc" role="list">
								<li>List Item One</li>
								<li>List Item Two</li>
								<li>List Item Three</li>
								<li>List Item Four</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<!-- Brand Palette -->
			<section>
				<div class="border-gray-300 border-b pb-5 lg:mt-24 mt-12">
					<h3 class="text-gray-800 font-semibold text-lg">Brand Palette:</h3>
				</div>
				<div class="grid grid-cols-2 mt-12 gap-2 lg:grid-cols-3">
					<div class="space-y-2">
						<div class="pb-4">
							<h3 class="text-gray-500 font-semibold text-base">Black & White</h3>
						</div>
						<div
							class="flex items-center text-gray-400 text-xs p-6 border rounded-lg justify-between bg-white"
						>
							<span>#</span>
							<span>White</span>
						</div>
						<div
							class="flex items-center text-gray-500 text-xs p-6 border rounded-lg justify-between bg-black"
						>
							<span>#</span>
							<span>Black</span>
						</div>
						<div
							class="flex items-center text-gray-800 text-xs p-6 border rounded-lg justify-between bg-gradient-to-t from-gray-500 via-gray-400 to-gray-300"
						>
							<span>#</span>
							<span>3 Color Gradient</span>
						</div>
						<div
							class="flex items-center text-gray-200 text-xs p-6 border rounded-lg justify-between bg-gradient-to-t from-gray-500 to-gray-400"
						>
							<span>#</span>
							<span>2 Color Gradient</span>
						</div>
					</div>

					<!-- Color: Blue -->
					<div>
						<div class="pb-6">
							<h3 class="text-gray-500 font-semibold text-base">Blue</h3>
						</div>
						<div class="border-solid border-2 border-gray-200 rounded-t-lg">
							<div
								class="flex items-center text-gray-400 text-xs p-6 rounded-t-lg justify-between bg-blue-50"
							>
								<span>#</span>
								<span>50</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-blue-100">
								<span>#</span>
								<span>100</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-blue-200">
								<span>#</span>
								<span>200</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-blue-300">
								<span>#</span>
								<span>300</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-blue-400">
								<span>#</span>
								<span>400</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-blue-500">
								<span>#</span>
								<span>500</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-blue-600">
								<span>#</span>
								<span>600</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-blue-700">
								<span>#</span>
								<span>700</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-blue-800">
								<span>#</span>
								<span>800</span>
							</div>
							<div
								class="flex items-center text-gray-200 text-xs p-6 rounded-b-lg justify-between bg-blue-900"
							>
								<span>#</span>
								<span>900</span>
							</div>
						</div>
					</div>

					<!-- Color: Gray -->
					<div>
						<div class="pb-6">
							<h3 class="text-gray-500 font-semibold text-base">Gray</h3>
						</div>
						<div class="border-solid border-2 border-gray-200 rounded-t-lg">
							<div
								class="flex items-center text-gray-400 text-xs p-6 rounded-t-lg justify-between bg-gray-50"
							>
								<span>#</span>
								<span>50</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-gray-100">
								<span>#</span>
								<span>100</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-gray-200">
								<span>#</span>
								<span>200</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-gray-300">
								<span>#</span>
								<span>300</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-gray-400">
								<span>#</span>
								<span>400</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-gray-500">
								<span>#</span>
								<span>500</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-gray-600">
								<span>#</span>
								<span>600</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-gray-700">
								<span>#</span>
								<span>700</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-gray-800">
								<span>#</span>
								<span>800</span>
							</div>
							<div
								class="flex items-center text-gray-200 text-xs p-6 rounded-b-lg justify-between bg-gray-900"
							>
								<span>#</span>
								<span>900</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Semantic Palette -->
			<section>
				<div class="border-gray-300 border-b pb-5 lg:mt-24 mt-12">
					<h3 class="text-gray-800 font-semibold text-lg">Semantic Palette:</h3>
				</div>
				<div class="grid grid-cols-2 mt-12 gap-2 lg:grid-cols-3">
					<!-- Color: Green -->
					<div>
						<div class="pb-6">
							<h3 class="text-gray-500 font-semibold text-base">Green</h3>
						</div>
						<div class="border-solid border-2 border-gray-200 rounded-t-lg">
							<div
								class="flex items-center text-gray-400 text-xs p-6 rounded-t-lg justify-between bg-green-50"
							>
								<span>#</span>
								<span>50</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-green-100">
								<span>#</span>
								<span>100</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-green-200">
								<span>#</span>
								<span>200</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-green-300">
								<span>#</span>
								<span>300</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-green-400">
								<span>#</span>
								<span>400</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-green-500">
								<span>#</span>
								<span>500</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-green-600">
								<span>#</span>
								<span>600</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-green-700">
								<span>#</span>
								<span>700</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-green-800">
								<span>#</span>
								<span>800</span>
							</div>
							<div
								class="flex items-center text-gray-200 text-xs p-6 rounded-b-lg justify-between bg-green-900"
							>
								<span>#</span>
								<span>900</span>
							</div>
						</div>
					</div>

					<!-- Color: Red -->
					<div>
						<div class="pb-6">
							<h3 class="text-gray-500 font-semibold text-base">Red</h3>
						</div>
						<div class="border-solid border-2 border-gray-200 rounded-t-lg">
							<div
								class="flex items-center text-gray-400 text-xs p-6 rounded-t-lg justify-between bg-red-50"
							>
								<span>#</span>
								<span>50</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-red-100">
								<span>#</span>
								<span>100</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-red-200">
								<span>#</span>
								<span>200</span>
							</div>
							<div class="flex items-center text-gray-400 text-xs p-6 justify-between bg-red-300">
								<span>#</span>
								<span>300</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-red-400">
								<span>#</span>
								<span>400</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-red-500">
								<span>#</span>
								<span>500</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-red-600">
								<span>#</span>
								<span>600</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-red-700">
								<span>#</span>
								<span>700</span>
							</div>
							<div class="flex items-center text-gray-200 text-xs p-6 justify-between bg-red-800">
								<span>#</span>
								<span>800</span>
							</div>
							<div
								class="flex items-center text-gray-200 text-xs p-6 rounded-b-lg justify-between bg-red-900"
							>
								<span>#</span>
								<span>900</span>
							</div>
						</div>
					</div>

					<!-- Color: Gray -->
					<div>
						<div class="pb-6">
							<h3 class="text-gray-500 font-semibold text-base">Yellow</h3>
						</div>
						<div class="border-solid border-2 border-gray-200 rounded-t-lg">
							<div
								class="flex items-center text-gray-400 text-xs p-6 rounded-t-lg justify-between bg-yellow-50"
							>
								<span>#</span>
								<span>50</span>
							</div>
							<div
								class="flex items-center text-gray-400 text-xs p-6 justify-between bg-yellow-100"
							>
								<span>#</span>
								<span>100</span>
							</div>
							<div
								class="flex items-center text-gray-400 text-xs p-6 justify-between bg-yellow-200"
							>
								<span>#</span>
								<span>200</span>
							</div>
							<div
								class="flex items-center text-gray-400 text-xs p-6 justify-between bg-yellow-300"
							>
								<span>#</span>
								<span>300</span>
							</div>
							<div
								class="flex items-center text-gray-200 text-xs p-6 justify-between bg-yellow-400"
							>
								<span>#</span>
								<span>400</span>
							</div>
							<div
								class="flex items-center text-gray-200 text-xs p-6 justify-between bg-yellow-500"
							>
								<span>#</span>
								<span>500</span>
							</div>
							<div
								class="flex items-center text-gray-200 text-xs p-6 justify-between bg-yellow-600"
							>
								<span>#</span>
								<span>600</span>
							</div>
							<div
								class="flex items-center text-gray-200 text-xs p-6 justify-between bg-yellow-700"
							>
								<span>#</span>
								<span>700</span>
							</div>
							<div
								class="flex items-center text-gray-200 text-xs p-6 justify-between bg-yellow-800"
							>
								<span>#</span>
								<span>800</span>
							</div>
							<div
								class="flex items-center text-gray-200 text-xs p-6 rounded-b-lg justify-between bg-yellow-900"
							>
								<span>#</span>
								<span>900</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Buttons -->
			<section>
				<div class="border-gray-300 border-b pb-5 lg:mt-24 mt-12">
					<h3 class="text-gray-800 font-semibold text-lg">Buttons</h3>
				</div>
				<div class="items-center inline-flex flex-wrap gap-2 mt-10 w-full">
					<a
						class="text-sm flex font-semibold items-center justify-center px-4 py-2 rounded-md transition-all h-10 text-white bg-gray-900 hover:bg-gray-800"
						href="/">Primary button</a
					><a
						class="text-sm flex font-semibold items-center justify-center px-4 py-2 rounded-md transition-all h-10 text-white bg-gradient-to-b from-gray-500 hover:to-gray-700 to-gray-600"
						href="/">Secondary button</a
					><a
						class="text-gray-600 text-sm bg-white border border-gray-300 flex font-semibold hover:text-gray-500 items-center justify-center px-4 py-2 rounded-full transition-all h-10"
						href="/">Tertiary button</a
					>
					<div class="p-4 bg-gradient-to-b from-gray-500 hover:to-gray-700 rounded-xl to-gray-600">
						<a
							class="text-sm flex font-semibold items-center justify-center px-4 py-2 rounded-md transition-all h-10 text-white bg-gradient-to-b from-white/[.105] hover:to-white/[.25] ring-1 ring-inset ring-white/20 to-white/[.15] shadow-sm"
							href="/">Transparent button</a
						>
					</div>
				</div>
			</section>
		</div>
	</div>
</section>



<section>
<div class="container--main">
<div class="container">
  <h3 class="text-4xl font-heading mb-4">Colors</h3>
</div>
</section>

<ColorComponent colorName="neutral" />
<ColorComponent colorName="gray" />
<ColorComponent colorName="blue" />
<ColorComponent colorName="red" />
<ColorComponent colorName="yellow" />
<ColorComponent colorName="green" />



<section>
<div class="container--main pt-16">
<div class="container">
  <h1 class="text-3xl font-normal mt-0 mb-2">
  Copy Blocks</h1>



<p class="text-base font-light mt-0 mb-4">
  I will be the leader of a company that ends up being worth billions
  of dollars, because I got the answers. I understand culture. I am
  the nucleus. I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that things could
  be at.
</p>


<p class="text-lg mt-6 mb-4">
Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.
</p>


<p class="text-base mt-0 mb-0">
Cras mattis consectetur purus sit amet fermentum. 
</p>
<footer class="block text-orange-600">
  - Someone famous in <cite>Source Title</cite>
</footer>


<small class="text-sm mt-0 mb-4">
Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.
</small>
</div>
</section>

<section>
  <div class="container--main pt-16">
    <div class="container">
      <div class="font-sans">
        <div>
          <div class="text-xxs">Headline</div>
          <div class="mt-1 text-xxs text-gray-600">.text-xs (12px)</div>
        </div>
        <div class="mt-6">
          <div class="text-xs">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-xs
          </span>
        </div>
        <div class="mt-6">
          <div class=" text-sm text-gray-600">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-sm
          </span>
        </div>
        <div class="mt-6">
          <div class="text-base">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-base
          </span>
        </div>
        <div class="mt-6">
          <div class="text-lg">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-lg
          </span>
        </div>
        <div class="mt-6">
          <div class="text-xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-xl
          </span>
        </div>
        <div class="mt-6">
          <div class="text-2xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-2xl
          </span>
        </div>
        <div class="mt-6">
          <div class=" text-3xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-3xl
          </span>
        </div>
        <div class="mt-6">
          <div class="text-4xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-4xl
          </span>
        </div>
        <div class="mt-6">
          <div class="text-5xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-5xl
          </span>
        </div>
        <div class="mt-6">
          <div class="text-6xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-6xl
          </span>
        </div>
                <div class="mt-6">
          <div class="text-7xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-7xl
          </span>
        </div>
        <div class="mt-6">
          <div class="text-8xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-8xl
          </span>
        </div>
                <div class="mt-6">
          <div class="text-9xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-9xl
          </span>
        </div>
                <div class="mt-6">
          <div class="text-10xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-10xl
          </span>
        </div>
                <div class="mt-6">
          <div class="text-11xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-11xl
          </span>
        </div>
                        <div class="mt-6">
          <div class="text-12xl">Headline</div>
          <span class="mt-1 inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-4 py-1 text-xxs font-medium text-gray-600">
            .text-12xl
          </span>
        </div>
      </div>
    </div>
</section>


<section>
  <div class="container--main pt-16">

  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold leading-6 text-gray-900">Spacing Scale</h1>
      <p class="mt-2 text-sm text-red-500">This changed using dynamic sizing. Need to update with ranges.</p>
    </div>
  </div>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Variable</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">REM</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">PX</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>

            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">px</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">-</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">0</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">0.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">1</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.25</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">4</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">1.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.375</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">6</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">2</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">8</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                         <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">2.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.625</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">3</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.75</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">12</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">3.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">0.875</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">14</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">4</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">16</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1.25</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">20</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">6</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">24</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">7</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1.75</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">28</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">8</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">32</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">9</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2.25</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">36</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">10</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">40</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">11</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2.75</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">44</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">12</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">3</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">48</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">14</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">3.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">56</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">16</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">4</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">64</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">18</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">4.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">72</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">20</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">80</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">24</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">6</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">96</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">26</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">6.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">104</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">28</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">7</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">112</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">32</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">8</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">128</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">36</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">9</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">144</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">40</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">160</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">44</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">11</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">176</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">48</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">12</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">192</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">52</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">13</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">208</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">56</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">14</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">224</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">60</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">15</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">240</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">64</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">16</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">256</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">72</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">18</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">288</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                        <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">80</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">20</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">320</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                                    <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">96</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">24</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">384</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                                    <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">100</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">25</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">400</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                                    <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">112</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">28</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">448</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                                    <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">118</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">29.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">472</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                                    <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">135</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">33.75</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">540</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                                    <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">142</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">35.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">568</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                                    <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">150</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">37.5</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">600</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                                    <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">166</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">41.75</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">668</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
                                    <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0">200</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">50</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">800</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">?</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

</div>

    </div>
</section>


