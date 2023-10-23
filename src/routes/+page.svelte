<script>
  import SvelteSEO from "$lib";
  import SEO from "./";
</script>

<SvelteSEO
  title={SEO.title}
  description={SEO.description}
  keywords={SEO.keywords.toString()}
  base={SEO.base}
  applicationName={SEO.applicationName}
  themeColor={SEO.themeColor}
  nositelinkssearchbox={SEO.nositelinkssearchbox}
  notranslate={SEO.notranslate}
  canonical={SEO.canonical}
  amp={SEO.amp}
  manifest={SEO.manifest}
  languageAlternates={SEO.languageAlternates}
  twitter={SEO.twitter}
  openGraph={SEO.openGraph}
  jsonLd={{
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://example.com/article",
    },
    headline: "Article headline",
    image: [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg",
    ],
    datePublished: "2020-08-03T17:31:37Z",
    dateModified: "2020-08-20T09:31:37Z",
    author: {
      "@type": "Person",
      name: "John Doe",
    },
    publisher: {
      "@type": "Organization",
      name: "Google",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/logo.jpg",
      },
    },
  }}
/>


<section class="py-24 md:py-24 bg-coolGray-50">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -mx-4 mb-16">
      <div class="lg:w-8/12 px-4 mb-12 lg:mb-0">
        <h1 class="font-heading text-6xl md:text-10xl mb-8 tracking-tightest">Home</h1>
        <p class="text-2xl tracking-tight">
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
    </div>
  </div>
</section>