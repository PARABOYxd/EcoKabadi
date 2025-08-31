export const siteConfig = {
  name: "EcoKabadi - Sustainable Scrap Collection",
  description: "Professional kabadi service in your area. We buy paper, plastic, metal, and e-waste at competitive rates with doorstep pickup.",
  url: "https://your-domain.com",
  ogImage: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg",
  keywords: [
    "kabadi",
    "scrap collection",
    "recycling",
    "paper waste",
    "plastic waste",
    "metal scrap",
    "e-waste",
    "doorstep pickup",
    "eco-friendly",
    "sustainable waste management"
  ],
  author: "EcoKabadi Team",
  businessPhone: "+91 9821816308",
  whatsappNumber: "919821816308",
  address: "123 Green Street, Eco City, State 110001, India",
  email: "contact@ecokabadi.com"
};

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "image": siteConfig.ogImage,
  "telephone": siteConfig.businessPhone,
  "email": siteConfig.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Green Street",
    "addressLocality": "Eco City",
    "addressRegion": "State",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.0347345",
    "longitude": "72.8467844"
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "19.0347345",
      "longitude": "72.8467844"
    },
    "geoRadius": "20000"
  }
};