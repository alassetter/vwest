<script>
  const placeholder = '/images/placeholder.svg';
  import Card from '$lib/components/content/cards/Card.svelte';
</script>

<section class="pt-16 pb-16">
  <div class="container--main">
     <h3 class="text-4xl font-heading mb-8">Cards</h3>
    <div class="flex flex-wrap">
      <div class="w-full px-4 flex-1">
        <span>
          <Card />
        </span>
      </div>
      <div class="w-full px-4 flex-1">
        <span>
          <Card />
        </span>
      </div>
      <div class="w-full px-4 flex-1">
        <span>
          <Card />
        </span>
      </div>
      <div class="w-full px-4 flex-1">
        <span>
          <Card />
        </span>
      </div>
    </div>
  </div>
</section>