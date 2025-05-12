
import { supabase } from '@/integrations/supabase/client';

/**
 * Service for handling automated screenshots for SEO purposes
 */
export const ScreenshotService = {
  /**
   * Generate or retrieve a screenshot for a specific page
   * @param pagePath The page path to screenshot
   * @returns URL to the screenshot
   */
  async getScreenshotUrl(pagePath: string): Promise<string> {
    // Remove leading slash if present
    const normalizedPath = pagePath.startsWith('/') ? pagePath.substring(1) : pagePath;
    
    // Format screenshot filename
    const screenshotFilename = `${normalizedPath || 'home'}-desktop.png`;
    const screenshotBucket = 'screenshots';
    const screenshotPath = `${screenshotFilename}`;
    
    try {
      // Check if screenshot already exists
      const { data: existingFile } = await supabase.storage
        .from(screenshotBucket)
        .getPublicUrl(screenshotPath);
      
      if (existingFile) {
        return existingFile.publicUrl;
      }
      
      // If we reach here, screenshot doesn't exist yet
      // For now, return default image
      return "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/main%20logo/Screenshot_2025-05-12_100332-removebg-preview.png";
      
      // TODO: In the future, implement actual screenshot capture
      // This would require a server-side component or external service
    } catch (error) {
      console.error('Error getting screenshot:', error);
      // Return default image on error
      return "https://xvekpoznjivvqcteiyxo.supabase.co/storage/v1/object/public/logos/leblanc/main%20logo/Screenshot_2025-05-12_100332-removebg-preview.png";
    }
  }
};

// Export a function to use in API routes
export async function getScreenshot(path: string) {
  return ScreenshotService.getScreenshotUrl(path);
}
