export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  appleImage?: string; // Added Apple-specific image option
  ogUrl?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
  noindex?: boolean;
  useAutomatedScreenshot?: boolean; // Flag to use automated screenshots
}

export type SeoConfigs = Record<string, SeoConfig>;

// Define SEO configurations for each page
export const seoConfigs: SeoConfigs = {
  home: {
    title: "Home | Training App",
    description: "Join our training program for athletes of all levels.",
    keywords: "training, athletes, sports, fitness",
    useAutomatedScreenshot: true,
  },
  // Partner pages have a standardized SEO config pattern 
  // that can be programmatically built for any partner
  partner: {
    title: "{name} | Elite Training Program",
    description: "You've been invited to Elite Locker by {name}.",
    keywords: "{name}, training, elite athletes, training program",
    ogImage: "{logoUrl}",
    useAutomatedScreenshot: true,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SportsTeam",
      "name": "{name} Training",
      "description": "You've been invited to Elite Locker by {name}.",
      "sport": "Sports",
      "coach": {
        "@type": "Person",
        "name": "{name}"
      }
    }
  },
  // Keep existing specific partner configs for backward compatibility
  leblanc: {
    title: "Craig LeBlanc | Elite Training Program",
    description: "You've been invited to Elite Locker by Craig LeBlanc.",
    keywords: "Craig LeBlanc, football training, elite athletes, quarterback training, NFL, training program",
    ogImage: "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/main%20logo/Screenshot_2025-05-12_100332-removebg-preview.png",
    // Using automated screenshot of the landing page for iMessage previews
    useAutomatedScreenshot: true,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SportsTeam",
      "name": "LeBlanc Elite Training",
      "description": "You've been invited to Elite Locker by Craig LeBlanc.",
      "sport": "Football",
      "coach": {
        "@type": "Person",
        "name": "Craig LeBlanc"
      }
    }
  },
  privacyPolicy: {
    title: "Privacy Policy | Training App",
    description: "Read our privacy policy to understand how we handle your data.",
    keywords: "privacy policy, terms of service, data protection",
    noindex: true
  },
  notFound: {
    title: "Page Not Found | Training App",
    description: "The page you're looking for could not be found.",
    noindex: true
  }
};

// Helper function to get SEO config based on page key
export const getSeoConfig = (key: string, customizations?: Partial<SeoConfig>): SeoConfig => {
  console.log(`Getting SEO config for key: ${key}`);
  
  const baseConfig = seoConfigs[key] || {
    title: "Training App",
    description: "Join our training program for athletes of all levels."
  };
  
  // Log the base config and customizations for debugging
  console.log('Base SEO config:', baseConfig);
  console.log('Customizations:', customizations);
  
  // Merge customizations with base config if provided
  const finalConfig = customizations ? { ...baseConfig, ...customizations } : baseConfig;
  console.log('Final SEO config:', finalConfig);
  
  return finalConfig;
};

// Helper function to get partner SEO config with placeholders replaced
export const getPartnerSeoConfig = (partnerId: string, partnerData: any): SeoConfig => {
  console.log(`Getting partner SEO config for: ${partnerId}`);
  
  // Try to use partner-specific config if it exists
  if (seoConfigs[partnerId]) {
    return getSeoConfig(partnerId);
  }
  
  // Otherwise, use the generic partner template and replace placeholders
  const baseConfig = { ...seoConfigs.partner };
  
  // Replace placeholders in strings with actual partner data
  Object.keys(baseConfig).forEach(key => {
    if (typeof baseConfig[key] === 'string') {
      baseConfig[key] = baseConfig[key].replace('{name}', partnerData.name)
                                      .replace('{logoUrl}', partnerData.mainLogoUrl);
    } else if (key === 'structuredData' && baseConfig.structuredData) {
      // Handle structured data separately (it's a nested object)
      baseConfig.structuredData = JSON.parse(
        JSON.stringify(baseConfig.structuredData)
          .replace(/\{name\}/g, partnerData.name)
      );
    }
  });
  
  // Add any additional customizations
  const customizations = {
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    pagePath: typeof window !== 'undefined' ? window.location.pathname : ''
  };
  
  // Merge everything together
  const finalConfig = { ...baseConfig, ...customizations };
  console.log('Final partner SEO config:', finalConfig);
  
  return finalConfig;
};
