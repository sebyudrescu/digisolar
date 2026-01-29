/**
 * SEO Component - Meta Tags, Open Graph, Twitter Cards, Schema.org
 * Usage: <SEO title="..." description="..." image="..." />
 */

import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
}

const DEFAULT_SEO = {
  siteName: "Digisolar",
  title: "Digisolar - Impianti Fotovoltaici Chiavi in Mano",
  description: "Progettazione e installazione di impianti fotovoltaici per aziende e residenze. Energia pulita, futuro sostenibile. Partner tecnico Cerquity per comunità energetiche.",
  image: "https://digisolar.it/images/hero-solar-panels.png",
  url: "https://digisolar.it",
  locale: "it_IT",
  twitterHandle: "@digisolar",
};

export default function SEO({
  title,
  description,
  image,
  type = "website",
  author,
  publishedTime,
  modifiedTime,
  keywords,
  canonical,
  noindex = false,
}: SEOProps) {
  const [location] = useLocation();
  
  // Construct full title
  const fullTitle = title 
    ? `${title} | ${DEFAULT_SEO.siteName}`
    : DEFAULT_SEO.title;
  
  const seoDescription = description || DEFAULT_SEO.description;
  const seoImage = image || DEFAULT_SEO.image;
  const seoUrl = canonical || `${DEFAULT_SEO.url}${location}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta tags
    updateMetaTag("description", seoDescription);
    updateMetaTag("keywords", keywords?.join(", ") || "fotovoltaico, pannelli solari, energia rinnovabile, impianti fotovoltaici, Brescia, comunità energetiche, CER, revamping, agrivoltaico");

    // Open Graph
    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", seoDescription, "property");
    updateMetaTag("og:image", seoImage, "property");
    updateMetaTag("og:url", seoUrl, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag("og:site_name", DEFAULT_SEO.siteName, "property");
    updateMetaTag("og:locale", DEFAULT_SEO.locale, "property");

    // Twitter Cards
    updateMetaTag("twitter:card", "summary_large_image", "name");
    updateMetaTag("twitter:site", DEFAULT_SEO.twitterHandle, "name");
    updateMetaTag("twitter:title", fullTitle, "name");
    updateMetaTag("twitter:description", seoDescription, "name");
    updateMetaTag("twitter:image", seoImage, "name");

    // Article-specific
    if (type === "article") {
      if (author) updateMetaTag("article:author", author, "property");
      if (publishedTime) updateMetaTag("article:published_time", publishedTime, "property");
      if (modifiedTime) updateMetaTag("article:modified_time", modifiedTime, "property");
    }

    // Canonical URL
    updateLinkTag("canonical", seoUrl);

    // Robots
    if (noindex) {
      updateMetaTag("robots", "noindex,nofollow");
    } else {
      updateMetaTag("robots", "index,follow");
    }

    // Schema.org JSON-LD
    updateStructuredData({
      url: seoUrl,
      title: fullTitle,
      description: seoDescription,
      image: seoImage,
      type,
    });
  }, [fullTitle, seoDescription, seoImage, seoUrl, type, author, publishedTime, modifiedTime, keywords, noindex]);

  return null; // This component doesn't render anything
}

// Helper function to update or create meta tags
function updateMetaTag(name: string, content: string, attribute: "name" | "property" = "name") {
  if (!content) return;
  
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute("content", content);
}

// Helper function to update or create link tags
function updateLinkTag(rel: string, href: string) {
  if (!href) return;
  
  let element = document.querySelector(`link[rel="${rel}"]`);
  
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute("href", href);
}

// Helper function to update structured data (Schema.org JSON-LD)
function updateStructuredData(data: {
  url: string;
  title: string;
  description: string;
  image: string;
  type: string;
}) {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]#schema-org');
  if (existingScript) {
    existingScript.remove();
  }

  // Create organization schema (always present)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${DEFAULT_SEO.url}/#organization`,
    name: DEFAULT_SEO.siteName,
    url: DEFAULT_SEO.url,
    logo: {
      "@type": "ImageObject",
      url: `${DEFAULT_SEO.url}/images/logo.png`,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+39-347-2219505",
      contactType: "Customer Service",
      areaServed: "IT",
      availableLanguage: "Italian",
    },
    sameAs: [
      "https://www.facebook.com/digisolar",
      "https://www.instagram.com/digisolar.it",
      "https://www.linkedin.com/company/digisolar",
      "https://www.youtube.com/@digisolar",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Dante Alighieri, 33",
      addressLocality: "Capriano del Colle",
      addressRegion: "BS",
      addressCountry: "IT",
    },
  };

  // Create webpage schema
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${data.url}#webpage`,
    url: data.url,
    name: data.title,
    description: data.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${DEFAULT_SEO.url}/#website`,
      url: DEFAULT_SEO.url,
      name: DEFAULT_SEO.siteName,
    },
    about: {
      "@id": `${DEFAULT_SEO.url}/#organization`,
    },
    image: {
      "@type": "ImageObject",
      url: data.image,
    },
  };

  // Combine schemas in a graph
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, webpageSchema],
  };

  // Add to document
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "schema-org";
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}
