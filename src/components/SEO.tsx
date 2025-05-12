
import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
  noindex?: boolean;
  appleImage?: string; // Specific image for Apple platforms
  useAutomatedScreenshot?: boolean; // Flag to use auto-generated screenshot
  pagePath?: string; // Path of the current page for auto screenshots
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/main%20logo/Screenshot_2025-05-12_100332-removebg-preview.png",
  ogUrl,
  canonicalUrl,
  structuredData,
  noindex = false,
  appleImage, // Use this specific image for Apple platforms if provided
  useAutomatedScreenshot = false,
  pagePath,
}) => {
  // Determine what image to use for Apple platforms
  // If useAutomatedScreenshot is true, construct URL to screenshot service
  const baseUrl = window.location.origin;
  const screenshotServiceUrl = `${baseUrl}/api/screenshot?path=`;
  
  // Use auto screenshot if enabled and pagePath is provided
  const iosImage = appleImage || 
    (useAutomatedScreenshot && pagePath ? 
      `${screenshotServiceUrl}${encodeURIComponent(pagePath)}` : 
      ogImage);
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Apple-specific meta tags for iMessage */}
      {iosImage && (
        <>
          <meta name="apple-mobile-web-app-title" content={title} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="apple-touch-icon" href={iosImage} />
          {/* Apple specific messaging preview */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta property="al:ios:url" content={ogUrl} />
        </>
      )}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* No index directive if specified */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Structured data for SEO */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
