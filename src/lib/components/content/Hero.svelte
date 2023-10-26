<script>
	const placeholder = '/images/placeholder-lg.jpg';
</script>

<section class="relative bg-coolGray-50 overflow-hidden">
	<div class="container mx-auto px-4">
		<div class="relative mx-auto mb-12 pt-12 pb-64 xs:pb-40 lg:pb-12 border-b">
			<h5 class="font-heading text-base md:text-lg mb-8 tracking-tightest uppercase tracking-wider">
				Welcome
			</h5>
			<h1
				class="font-heading max-w-3xl text-6xl sm:text-4xl md:text-8xl xl:text-8xl tracking-tightest"
			>
				Simplifying Complexity with an agile, client-centric approach.
			</h1>
			<div class="absolute bottom-0 right-0 mb-10 max-w-sm ml-auto text-right">
				<p>
					<span class="block">Curabitur blandit tempus porttitor.</span>
					<span class="block">Curabitur blandit tempus porttitor.</span>
					<span class="block">Curabitur blandit tempus porttitor.</span>
				</p>
			</div>
		</div>
		<div class="flex flex-wrap -mx-3 align-items-end">
			<div class="w-full md:w-6/12 lg:w-7/12 px-3 relative">
				<img
					class="block w-full h-64 lg:h-80 rounded-t-4xl object-cover"
					src={placeholder}
					alt="name"
				/>
			</div>
			<div class="hidden md:block md:w-6/12 lg:w-5/12 px-3">
				<div class="flex flex-wrap -mx-3">
					<div class="w-5/12 px-3">
						<img
							class="block w-full h-64 lg:h-80 rounded-t-4xl object-cover"
							src={placeholder}
							alt="name"
						/>
					</div>
					<div class="w-7/12 px-3">
						<img
							class="block w-full h-64 lg:h-80 rounded-t-4xl object-cover"
							src={placeholder}
							alt="name"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

</section>
