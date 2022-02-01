import { supabase } from '@Services/api';
import { useUserStorage } from '@Services/storageAdapter';
import { getFilename } from '@Lib/utils/file.utils';
import type { LinkService } from '@Interfaces/ports/link-service.interface';

const WEB_URL = import.meta.env.VITE_FRONTEND_URL;

export function useLink(): LinkService {
  const { user } = useUserStorage();

  const createLinkRequest = async ({
    uploadedFiles,
    downloads,
    password,
  }: {
    uploadedFiles: string;
    downloads: number;
    password: string;
  }) => {
    const filename = getFilename(uploadedFiles);

    const { data, error } = await supabase.from('files').insert([
      {
        author: user && user.id,
        name: uploadedFiles,
        downloads,
        password: password && password,
        url: filename,
      },
    ]);

    console.log({ data, error });

    const fileUrl =
      data && data[0].url ? `${WEB_URL}download/${data[0].url}` : '';

    return { fileUrl, error };
  };

  return { createLinkRequest };
}
