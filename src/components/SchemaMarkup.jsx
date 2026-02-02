import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = ({ type, data }) => {
    let schemaData = {};

    if (type === 'Organization') {
        schemaData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Primistine Electric Limited",
            "url": "https://primistine-web.vercel.app/",
            "logo": "https://primistine-web.vercel.app/logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-704-619-7826",
                "contactType": "customer service",
                "areaServed": "NG"
            },
            "sameAs": [
                "https://www.facebook.com/primistineelectric",
                "https://twitter.com/primistine",
                "https://www.instagram.com/primistineelectric"
            ]
        };
    } else if (type === 'LocalBusiness') {
        schemaData = {
            "@context": "https://schema.org",
            "@type": "Electrician",
            "name": "Primistine Electric Limited",
            "image": "https://primistine-web.vercel.app/og-image.jpg",
            "@id": "https://primistine-web.vercel.app",
            "url": "https://primistine-web.vercel.app",
            "telephone": "+234-704-619-7826",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lagos", // Update with real address if available
                "addressLocality": "Lagos",
                "postalCode": "100001",
                "addressCountry": "NG"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.5244,
                "longitude": 3.3792
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            },
            "priceRange": "$$"
        };
    } else if (type === 'Article') {
        schemaData = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": data.url
            },
            "headline": data.title,
            "description": data.description,
            "image": data.image,
            "author": {
                "@type": "Person",
                "name": data.author
            },
            "publisher": {
                "@type": "Organization",
                "name": "Primistine Electric Limited",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://primistine-web.vercel.app/logo.png"
                }
            },
            "datePublished": data.datePublished,
            "dateModified": data.dateModified || data.datePublished
        };
    }

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;
