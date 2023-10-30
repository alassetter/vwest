<script>
  export let bgColor = 'bg-white'; // Default background color is white
  export let containerId = 'container'; // Default id value
</script>

<section class="{bgColor}">
	<div class="pt-16 pb-16">
		<!-- Global Padding -->
		<div class="px-12">
			<div class="w-full max-w-full mx-auto">
				<div class="flex flex-wrap">
					<!-- Content -->
          <slot id="{containerId}" />
					<!-- Content -->
				</div>
			</div>
		</div>
	</div>
</section>