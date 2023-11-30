import { type CollectionEntry } from 'astro:content'

// Function to create a JsonLd acording to the type
export default function jsonLDGenerator({ type, post }: {type: string, post: CollectionEntry<'blog'> }) {
  if (type === 'post') {
    return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${post.data.excerpt}",
  "image": "${post.data.image.src}",  
  "author": {
    "@type": "Person",
    "name": '${post.data.author}'
  },  
  "publisher": {
    "@type": "Organization",
    "name": "AquaPumpers",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.aquapumpers.com/favicon.ico"
    }
  },
  "datePublished": ${post.data.date}
}
</script>`;
  }
  return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "AquaPumpers",
        "image": "/og-image.png",
        "@id": "",
        "url": "https://www.aquapumpers.com",
        "telephone": "+380971147070",
        "priceRange": "40$+",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Велика Окружна дорога 100",
          "addressLocality": "Київ, Київська область",
          "postalCode": "03150",
          "addressCountry": "Україна"
        }  
      }
      </script>`;
      }