import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  canonicalUrl?: string;
  schema?: Record<string, unknown>;
}

export default function SEO({ 
  title, 
  description, 
  name = 'Amulet Pharmaceuticals Ltd.', 
  type = 'website', 
  canonicalUrl,
  schema 
}: SEOProps) {
  const fullTitle = `${title} | ${name}`;
  const url = canonicalUrl || 'https://amulet-pharmaceuticals.com/';

  // Default Organization Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Amulet Pharmaceuticals Ltd.",
    "url": "https://amulet-pharmaceuticals.com/",
    "logo": "https://amulet-pharmaceuticals.com/images/logo.png",
    "description": "Healthcare Through Advanced Technology in Bangladesh.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880 1401 555 333",
      "email": "chairmanapl2023@gmail.com",
      "contactType": "customer service",
      "areaServed": "BD",
      "availableLanguage": ["English", "Bengali"]
    }
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      
      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* JSON-LD Schema markup for AIO/SEO */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
