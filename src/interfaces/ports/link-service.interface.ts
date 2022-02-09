import type { PostgrestError } from '@supabase/supabase-js';
import type { Link } from '@Interfaces/domain/link.interface';

export interface LinkService {
  getLinkRequest: ({ url_query }: { url_query: string }) => Promise<{
    data: any[] | null;
    error: PostgrestError | null;
  }>;

  generateDownloadLinkRequest: ({ link }: { link: Link }) => Promise<{
    hasData: boolean;
    error: PostgrestError | null;
  }>;

  updateLinkRequest: ({ updatedLink }: { updatedLink: Link }) => Promise<{
    error: PostgrestError | null;
  }>;

  deleteLinkRequest: ({ url_query }: { url_query: string }) => Promise<{
    error: PostgrestError | null;
  }>;
}
