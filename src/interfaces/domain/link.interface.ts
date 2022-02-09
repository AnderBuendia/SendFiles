export interface Link {
  name: string;
  author: string | null;
  password: string | null;
  downloads: number;
  total_downloads: number;
  url: string;
  url_query: string;
  created_at?: string;
}
