<!-- ButtonComponent.svelte -->

<!-- !Work in progress -->

<!-- import Button from '$lib/components/content/Button.svelte'; -->

<!-- ButtonComponent.svelte -->
<script>
	export let size = 'sm'; // Default size is 'sm'
	export let rounded = 'md'; // Default rounded size is 'md'
	export let paddingX = '3'; // Default horizontal padding
	export let paddingY = '2'; // Default vertical padding
	export let text = 'Button text'; // Default button text
	export let variant = 'solid'; // Default variant is 'solid'

	// Compute classes based on props
	$: sizeClasses =
		{
			xxs: 'text-xxs px-2 py-1',
			xs: 'text-xs px-2 py-1',
			sm: 'text-sm px-2.5 py-1.5',
			md: 'text-base px-3 py-2',
			lg: 'text-lg px-3.5 py-2.5',
			xl: 'text-xl px-3.5 py-2.5'
		}[size] || 'text-sm px-3 py-2';

	$: roundedClasses = rounded === 'md' ? 'rounded-md' : 'rounded';

	$: variantClasses =
		{
			solid: 'bg-gray-900 text-white hover:bg-gray-700',
			soft: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
			surface: 'bg-white shadow-sm ring-1 ring-inset ring-gray-300',
			outlined:
				'bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-50'
		}[variant] || 'bg-gray-900 text-white hover:bg-gray-700';

	// Combine all class strings including padding
	$: classString =
		`${roundedClasses} px-${paddingX} py-${paddingY} ${sizeClasses} ${variantClasses} font-semibold transition-all duration-150 ease-in-out`.trim();
</script>

<button type="button" class={classString}>
	{text}
</button>
