<script>
  export let colorName = "X"; // Default value is "X", but it can be overridden by the parent component.

    const colorPalettes = {
    gray: [
      { name: 'gray-50', color: '#f8fafc' },
      { name: 'gray-100', color: '#f1f5f9' },
      { name: 'gray-200', color: '#e2e8f0' },
      { name: 'gray-300', color: '#cbd5e1' },
      { name: 'gray-400', color: '#94a3b8' },
      { name: 'gray-500', color: '#64748b' },
      { name: 'gray-600', color: '#475569' },
      { name: 'gray-700', color: '#334155' },
      { name: 'gray-800', color: '#1e293b' },
      { name: 'gray-900', color: '#0f172a' }
      // ... other gray shades
    ],
    neutral: [
      { name: 'neutral-50', color: '#F7F7F7' },
      { name: 'neutral-100', color: '#EFEFEF' },
      { name: 'neutral-200', color: '#E9E9E9' },
      { name: 'neutral-300', color: '#D8D8D8' },
      { name: 'neutral-400', color: '#CACACA' },
      { name: 'neutral-500', color: '#A5A5A5' },
      { name: 'neutral-600', color: '#646464' },
      { name: 'neutral-700', color: '#494949' },
      { name: 'neutral-800', color: '#252525' },
      { name: 'neutral-900', color: '#151515' }
    ],
    blue: [
      { name: 'blue-50', color: '#e6ebfd' },
      { name: 'blue-100', color: '#b4c4fa' },
      { name: 'blue-200', color: '#839df7' },
      { name: 'blue-300', color: '#5275f3' },
      { name: 'blue-400', color: '#204ef0' },
      { name: 'blue-500', color: '#083bef' },
      { name: 'blue-600', color: '#0735d7' },
      { name: 'blue-700', color: '#0529a7' },
      { name: 'blue-800', color: '#041d77' },
      { name: 'blue-900', color: '#021147' },
    ],
    red: [
      { name: 'red-50', color: '#e7f7ec' },
      { name: 'red-100', color: '#cfefda' },
      { name: 'red-200', color: '#b7e8c7' },
      { name: 'red-300', color: '#d3f3ef' },
      { name: 'red-400', color: '#88d9a3' },
      { name: 'red-500', color: '#12b347' },
      { name: 'red-600', color: '#0e8f38' },
      { name: 'red-700', color: '#0a6b2a' },
      { name: 'red-800', color: '#07471c' },
      { name: 'red-900', color: '#124226' }
    ],
    green: [
      { name: 'green-50', color: '#e7f7ec' },
      { name: 'green-100', color: '#cfefda' },
      { name: 'green-200', color: '#b7e8c7' },
      { name: 'green-300', color: '#d3f3ef' },
      { name: 'green-400', color: '#88d9a3' },
      { name: 'green-500', color: '#12b347' },
      { name: 'green-600', color: '#0e8f38' },
      { name: 'green-700', color: '#0a6b2a' },
      { name: 'green-800', color: '#07471c' },
      { name: 'green-900', color: '#124226' }
    ],
    yellow: [
      { name: 'yellow-50', color: '#fffbeb' },
      { name: 'yellow-100', color: '#fef3c7' },
      { name: 'yellow-200', color: '#fcd34d' },
      { name: 'yellow-300', color: '#FEE2E2' },
      { name: 'yellow-400', color: '#fbbf24' },
      { name: 'yellow-500', color: '#f59e0b' },
      { name: 'yellow-600', color: '#d97706' },
      { name: 'yellow-700', color: '#b45309' },
      { name: 'yellow-800', color: '#92400e' },
      { name: 'yellow-900', color: '#78350f' }
    ],
    // ... add other color palettes as needed
  };

    let colors = colorPalettes[colorName] || [];

  // Watch for changes in colorName and update grays accordingly
  $: {
    colors = colorPalettes[colorName] || [];
  }
</script>

<div class="container--main pt-16 pb-8">
  <div class="container">
    <h3 class="text-2xl capitalize font-heading mb-8">{colorName}</h3>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-4">
    {#each colors as color}
      <div class="mb-4">
        <div class={`bg-${color.name} border border-${colorName}-200 rounded-lg pt-40 transition ease-in-out duration-300 hover:duration-100 hover:scale-105 hover:shadow-sm`}></div>
        <div class="pt-4 text-sm text-medium mb-2">{color.name}</div>
        <div class="text-sm text-gray-600">{color.color}</div>
      </div>
    {/each}
  </div>
</div>