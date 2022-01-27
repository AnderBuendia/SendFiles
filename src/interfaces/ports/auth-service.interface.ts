import { ApiError } from '@supabase/supabase-js';

export interface AuthenticationService {
  logoutRequest: () => Promise<{
    error: ApiError | null;
  }>;
}
