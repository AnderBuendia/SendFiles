import { createClient } from '@supabase/supabase-js';

const options = {
  schema: 'public',
  headers: { app: 'sendfiles' },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};

export const supabase = createClient(
  `${import.meta.env.VITE_SUPABASE_URL}`,
  `${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  options
);
