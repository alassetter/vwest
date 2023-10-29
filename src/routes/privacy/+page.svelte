<!-- Privacy Policy Page.svelte -->
<script>
  import HeroTextBlock from '$lib/components/HeroTextBlock.svelte';

  let customSubhead = 'Privacy Policy';
  let customTitle = 'We take your privacy seriously';
  let customBodyCopy = 'Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.';
</script>

<section>
  <!-- Include MyComponent and pass custom values as props -->
  <HeroTextBlock
    subhead={customSubhead}
    title={customTitle}
    bodyCopy={customBodyCopy}
  />
</section>