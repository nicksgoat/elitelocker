
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PartnerTemplate } from '@/components/PartnerTemplate';
import { getPartnerData } from '@/config/partners';
import { SEO } from '@/components/SEO';
import { getPartnerSeoConfig } from '@/config/seo';

const PartnerPage = () => {
  const { partnerId } = useParams<{ partnerId: string }>();
  const navigate = useNavigate();
  
  // Redirect to 404 if no partnerId provided
  useEffect(() => {
    if (!partnerId) {
      navigate('/not-found');
    }
  }, [partnerId, navigate]);
  
  // If no partnerId, return nothing (will redirect)
  if (!partnerId) {
    return null;
  }
  
  // Get partner data from the configuration
  const partnerData = getPartnerData(partnerId);
  
  // Get SEO configuration for this partner
  const seoConfig = getPartnerSeoConfig(partnerId, partnerData);

  return (
    <>
      <SEO {...seoConfig} />
      <PartnerTemplate partnerData={partnerData} />
    </>
  );
};

export default PartnerPage;
