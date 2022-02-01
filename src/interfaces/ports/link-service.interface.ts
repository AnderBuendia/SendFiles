import type { PostgrestError } from '@supabase/supabase-js';

export interface LinkService {
  createLinkRequest: ({
    uploadedFiles,
    downloads,
    password,
  }: {
    uploadedFiles: string;
    downloads: number;
    password: string;
  }) => Promise<{
    fileUrl: string;
    error: PostgrestError | null;
  }>;
}
