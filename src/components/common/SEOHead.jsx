import React, { useEffect } from 'react';

export const SEOHead = ({ 
  title = "Viva Construct | Building Excellence. Creating Lasting Value.", 
  description = "Viva Construct is a premier multi-million dollar construction and engineering firm specializing in commercial towers, luxury residential, civil infrastructure, and sustainable building.",
  keywords = "construction, civil engineering, commercial building, luxury villas, structural design, architecture, Viva Construct",
  schemaType = "ConstructionBusiness"
}) => {
  useEffect(() => {
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Inject JSON-LD Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": "Viva Construct",
      "legalName": "Viva Construct Ltd.",
      "url": "https://vivaconstruct.com",
      "logo": "https://vivaconstruct.com/favicon.svg",
      "description": description,
      "tagline": "Building Excellence. Creating Lasting Value.",
      "telephone": "+1-800-555-0199",
      "email": "contact@vivaconstruct.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "750 Fifth Avenue, Suite 2400",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10019",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com",
        "https://twitter.com",
        "https://instagram.com"
      ]
    };

    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schemaData);
  }, [title, description, schemaType]);

  return null;
};
