import type { Dispatch, SetStateAction } from 'react';
import type { User } from '@supabase/supabase-js';
import type { Link } from '@Interfaces/domain/link.interface';
import type { UploadFile } from '@Interfaces/domain/file.interface';

export interface AppStorageService {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface FileStorageService extends AppStorageService {
  uploadedFiles: UploadFile[];
  urlDownloadFile: string | null;
  setUploadedFiles: Dispatch<SetStateAction<UploadFile[]>>;
  setUrlDownloadFile: Dispatch<SetStateAction<string | null>>;
}

export interface LinkStorageService extends AppStorageService {
  link: Link | null;
  setLink: Dispatch<SetStateAction<Link | null>>;
}

export interface UserStorageService {
  user: User | null;
}
