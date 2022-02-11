import { supabase } from '@Services/api';
import type { Link } from '@Interfaces/domain/link.interface';
import type { LinkService } from '@Interfaces/ports/link-service.interface';

export function useLink(): LinkService {
  const getLinkRequest = async ({ url_query }: { url_query: string }) => {
    const { data, error } = await supabase
      .from('links')
      .select()
      .eq(`url_query`, url_query);

    return { data, error };
  };

  const generateDownloadLinkRequest = async ({ link }: { link: Link }) => {
    const { data, error } = await supabase.from('links').insert([link]);

    const hasData = Boolean(data);

    return { hasData, error };
  };

  const updateLinkRequest = async ({ updatedLink }: { updatedLink: Link }) => {
    const { data, error } = await supabase
      .from('links')
      .update(updatedLink)
      .match({ url_query: updatedLink.url_query });

    return { error };
  };

  const deleteLinkRequest = async ({ url_query }: { url_query: string }) => {
    const { data, error } = await supabase
      .from('links')
      .delete()
      .match({ url_query });

    return { error };
  };

  return {
    getLinkRequest,
    generateDownloadLinkRequest,
    updateLinkRequest,
    deleteLinkRequest,
  };
}
