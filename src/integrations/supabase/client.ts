// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xvekpoznjivvqcteiyxo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2ZWtwb3puaml2dnFjdGVpeXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MDQwNjEsImV4cCI6MjA1NDI4MDA2MX0.PmtnaSkMiOSPXPM9tmvWQkXsuY3vw2HigAhXAc134ms";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);