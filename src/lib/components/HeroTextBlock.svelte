<!-- HeroTextBlock.svelte -->
<script>
  export let subhead = 'A Sub Title';
  export let title = 'Title';
  export let bodyCopy = 'paragraph copy';
</script>

<div class="container--main pt-16 pb-16">
  <div class="flex flex-wrap">
    <!-- Content -->
    <div class="w-full md:8/12 lg:w-9/12 xl:w-7/12 2xl:6/12">
      <p class="mb-8 font-heading text-base md:text-lg font-medium leading-none uppercase tracking-widest">
        {subhead}
      </p>
      <h1 class="mb-8 font-heading text-6xl md:text-10xl tracking-tighter">
        {title}
      </h1>
      <p class="text-2xl tracking-tight">
        {bodyCopy}
      </p>
    </div>
    <!-- /Content -->
  </div>
</div>