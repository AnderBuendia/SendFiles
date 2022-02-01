import type { Dispatch, SetStateAction } from 'react';
import type { User } from '@supabase/supabase-js';

export interface FileStorageService {
  urlFile: string | null;
  setUrlFile: Dispatch<SetStateAction<string | null>>;
}

export interface UserStorageService {
  user: User | null;
}
