import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  robots?: string
  jsonLd?: object
}

export function useSEO({ title, description, canonical, ogImage, robots, jsonLd }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title

    // Meta Description
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)

    // Canonical
    if (canonical) {
      const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (link) link.href = canonical
    }

    // Robots
    if (robots) {
      const meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement
      if (meta) meta.setAttribute('content', robots)
    }

    // OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)

    if (ogImage) {
      const ogImg = document.querySelector('meta[property="og:image"]')
      if (ogImg) ogImg.setAttribute('content', ogImage)
    }

    if (canonical) {
      const ogUrl = document.querySelector('meta[property="og:url"]')
      if (ogUrl) ogUrl.setAttribute('content', canonical)
    }

    // JSON-LD
    if (jsonLd) {
      const existingScript = document.getElementById('page-jsonld')
      if (existingScript) existingScript.remove()

      const script = document.createElement('script')
      script.id = 'page-jsonld'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    // Cleanup
    return () => {
      const pageJsonLd = document.getElementById('page-jsonld')
      if (pageJsonLd) pageJsonLd.remove()
    }
  }, [title, description, canonical, ogImage, robots, jsonLd])
}
