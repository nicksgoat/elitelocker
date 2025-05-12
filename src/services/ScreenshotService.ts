
/**
 * ScreenshotService.ts
 * 
 * This service is responsible for retrieving screenshots for SEO purposes.
 * It interfaces with our Supabase storage to get screenshots of pages.
 */

import { supabase } from '@/integrations/supabase/client';

// Base URL for screenshots in Supabase storage
const SCREENSHOTS_BUCKET = 'screenshots';

/**
 * Get a screenshot for a specific page path
 * @param path The path of the page to get a screenshot for (e.g., '/leblanc')
 * @returns URL to the screenshot image
 */
export async function getScreenshot(path: string): Promise<string> {
  // Clean the path to create a valid filename
  const cleanPath = path.replace(/^\/?|\/?$/g, ''); // Remove leading/trailing slashes
  const filename = cleanPath || 'index'; // Default to 'index' for home page
  
  try {
    // First check if screenshot exists in Supabase storage
    const { data: existingFile, error: checkError } = await supabase
      .storage
      .from(SCREENSHOTS_BUCKET)
      .list('', {
        search: `${filename}.png`
      });
    
    if (checkError) {
      console.error('Error checking for screenshot:', checkError);
      throw new Error('Failed to check for screenshot');
    }
    
    // If screenshot exists, return its URL
    if (existingFile && existingFile.length > 0) {
      const { data: { publicUrl } } = supabase
        .storage
        .from(SCREENSHOTS_BUCKET)
        .getPublicUrl(`${filename}.png`);
      
      return publicUrl;
    }
    
    // If no screenshot exists, return a fallback image URL
    return 'https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/main%20logo/Screenshot_2025-05-12_100332-removebg-preview.png';
  } catch (error) {
    console.error('Error fetching screenshot:', error);
    return 'https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/main%20logo/Screenshot_2025-05-12_100332-removebg-preview.png';
  }
}
