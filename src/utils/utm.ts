
export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;  
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export const getUTMParams = (): UTMParams => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_content: urlParams.get('utm_content') || undefined,
    utm_term: urlParams.get('utm_term') || undefined,
  };
};
