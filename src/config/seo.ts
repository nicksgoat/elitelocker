
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
  const baseConfig = seoConfigs[key] || {
    title: "Training App",
    description: "Join our training program for athletes of all levels."
  };
  
  // Merge customizations with base config if provided
  return customizations ? { ...baseConfig, ...customizations } : baseConfig;
};
