
import React from "react";
import { PartnerTemplate } from "@/components/PartnerTemplate";
import { partners } from "@/config/partners";
import { SEO } from "@/components/SEO";
import { getPartnerSeoConfig } from "@/config/seo";

const LeBlanc = () => {
  // Get the LeBlanc partner data
  const partnerData = partners.leblanc;
  
  // Get the current path for automated screenshots
  const currentPath = window.location.pathname;

  // Get SEO configuration for LeBlanc
  const seoConfig = getPartnerSeoConfig("leblanc", partnerData);
  
  return (
    <>
      <SEO {...seoConfig} />
      <PartnerTemplate partnerData={partnerData} />
    </>
  );
};

export default LeBlanc;
