import React, { useEffect } from 'react';

export const SEOHead = ({ 
  title = "Viva Constructs Limited | Building Excellence. Delivering Confidence.", 
  description = "Viva Constructs Limited is a multi-disciplinary construction, engineering, and project management company delivering high-quality residential, commercial, industrial, telecommunications, and civil infrastructure projects.",
  keywords = "construction, civil engineering, telecommunications infrastructure, commercial building, luxury residential, Viva Constructs Limited, Lagos Nigeria",
  schemaType = "ConstructionBusiness"
}) => {
  useEffect(() => {
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update tab icon (favicon)
    let faviconTag = document.querySelector('link[rel="icon"]');
    if (faviconTag) {
      faviconTag.setAttribute('href', '/viva-logo-circular.png');
      faviconTag.setAttribute('type', 'image/png');
    }

    // Update Open Graph & Twitter preview images
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute('content', '/viva-logo-circular.png');
    }
    let twImg = document.querySelector('meta[property="twitter:image"]');
    if (twImg) {
      twImg.setAttribute('content', '/viva-logo-circular.png');
    }

    // Inject JSON-LD Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": "Viva Constructs Limited",
      "legalName": "Viva Constructs Limited",
      "foundingDate": "2025",
      "iso6523Code": "RC:8867751",
      "url": "https://vivaconstructs.com",
      "logo": "https://vivaconstructs.com/Viva logo.png",
      "description": description,
      "tagline": "Building Excellence. Delivering Confidence.",
      "telephone": "+234-7089057979",
      "email": "Ganiyat@vivaconstructs.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "39 Ugbejeaki street, Mende Maryland",
        "addressLocality": "Lagos",
        "addressRegion": "Lagos State",
        "addressCountry": "NG"
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
