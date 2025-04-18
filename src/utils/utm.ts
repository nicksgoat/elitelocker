
export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;  
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export const getUTMParams = (): UTMParams => {
  try {
    if (typeof window === 'undefined') return {};
    
    // First try to get params from URL
    const urlParams = new URLSearchParams(window.location.search);
    const params = {
      utm_source: urlParams.get('utm_source') || undefined,
      utm_medium: urlParams.get('utm_medium') || undefined,
      utm_campaign: urlParams.get('utm_campaign') || undefined,
      utm_content: urlParams.get('utm_content') || undefined,
      utm_term: urlParams.get('utm_term') || undefined,
    };

    // If we found any params in URL, store them in localStorage and return them
    if (Object.values(params).some(value => value !== undefined)) {
      console.log('Found UTM params in URL:', params);
      localStorage.setItem('utm_params', JSON.stringify(params));
      return params;
    }

    // If no URL params, try to get from localStorage
    const storedParams = localStorage.getItem('utm_params');
    if (storedParams) {
      const parsedParams = JSON.parse(storedParams);
      console.log('Retrieved UTM params from localStorage:', parsedParams);
      return parsedParams;
    }

    console.log('No UTM params found in URL or localStorage');
    return {};
  } catch (error) {
    console.error('Error getting UTM params:', error);
    return {};
  }
};

export const clearUTMParams = () => {
  try {
    localStorage.removeItem('utm_params');
    console.log('Cleared UTM params from localStorage');
  } catch (error) {
    console.error('Error clearing UTM params:', error);
  }
};
