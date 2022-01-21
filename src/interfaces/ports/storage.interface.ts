import { User } from '@supabase/supabase-js';

export interface UserStorageService {
  user: User | null;
  isLogged: boolean;
}
