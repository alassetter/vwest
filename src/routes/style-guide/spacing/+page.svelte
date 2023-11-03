<script>
	import HeroSolid from '$lib/components/content/HeroSolid.svelte';
</script>

<HeroSolid
	subhead="Style Guide"
	subheadColor="text-gray-300"
	title="Spacing Scale"
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
				<a
					class="inline-block text-gray-600"
					href="/style-guide/spacing">Spacing Scale</a
				>
			</div>
		</div>
	</div>
</section>

<section class="bg-gray-300">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto" />
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
							<h1
								class="text-base font-heading font-medium leading-6 text-gray-900"
							>
								Spacing Scale
							</h1>
						</div>
					</div>
					<div class="mt-8 flow-root">
						<div
							class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
						>
							<div
								class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
							>
								<table class="min-w-full divide-y divide-gray-300">
									<thead>
										<tr class="font-heading">
											<th
												scope="col"
												class="py-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-0"
												>Class</th
											>
											<th
												scope="col"
												class="px-3 py-3.5 text-left text-sm font-medium text-gray-900"
												>REM</th
											>
											<th
												scope="col"
												class="px-3 py-3.5 text-left text-sm font-medium text-gray-900"
												>PX</th
											>
											<th
												scope="col"
												class="px-3 py-3.5 text-left text-sm font-medium text-gray-900"
												>Status</th
											>
										</tr>
									</thead>
									<tbody class="divide-y divide-gray-200">
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>px</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>-</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>1</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>0</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>0</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>0.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>0.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>1</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>2</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>1</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>0.25</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>4</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>1.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>0.375</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>6</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>2</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>0.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>8</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>2.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>0.625</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>10</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>3</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>0.75</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>12</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>3.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>0.875</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>14</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>4</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>1</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>16</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>1.25</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>20</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>6</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>1.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>24</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>7</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>1.75</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>28</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>8</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>2</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>32</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>9</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>2.25</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>36</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>10</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>2.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>40</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>11</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>2.75</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>44</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>12</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>3</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>48</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>14</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>3.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>56</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>16</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>4</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>64</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>18</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>4.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>72</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>20</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>80</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>24</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>6</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>96</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>26</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>6.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>104</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>28</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>7</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>112</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>32</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>8</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>128</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>36</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>9</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>144</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>40</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>10</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>160</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>44</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>11</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>176</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>48</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>12</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>192</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>52</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>13</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>208</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>56</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>14</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>224</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>60</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>15</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>240</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>64</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>16</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>256</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>72</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>18</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>288</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>80</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>20</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>320</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>96</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>24</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>384</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>100</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>25</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>400</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>112</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>28</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>448</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>118</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>29.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>472</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>135</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>33.75</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>540</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>142</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>35.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>568</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>150</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>37.5</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>600</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>166</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>41.75</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>668</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
										</tr>
										<tr>
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-xs font-medium sm:pl-0"
												>200</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>50</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>800</td
											>
											<td
												class="whitespace-nowrap px-3 py-4 text-xs text-gray-500"
												>?</td
											>
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
