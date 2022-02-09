import type { User } from '@supabase/supabase-js';
import type { Link } from '@Interfaces/domain/link.interface';
import type { UploadFile } from '@Interfaces/domain/file.interface';

const INITIAL_TOTAL_DOWNLOADS: number = 0;

export function createLink({
  user,
  files,
  password,
  downloads,
  url,
}: {
  user: User | null;
  files: UploadFile;
  password: string | null;
  downloads: number;
  url: string;
}): Link {
  return {
    name: files.name,
    author: user && user.id,
    password: password ? password : null,
    downloads,
    total_downloads: INITIAL_TOTAL_DOWNLOADS,
    url,
    url_query: files.path,
  };
}

export function updateLink({
  total_downloads,
  link,
}: {
  total_downloads: number;
  link: Link;
}) {
  return {
    ...link,
    total_downloads,
  };
}

export function getTotalDownloads(downloads: number, total_downloads: number) {
  return downloads <= total_downloads;
}
