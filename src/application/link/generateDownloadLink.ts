import { createLink } from '@Domain/link';
import { useLink } from '@Services/linkAdapter';
import { useLinkStorage } from '@Services/storageAdapter';
import { useUserStorage } from '@Services/storageAdapter';
import { hashPassword } from '@Lib/utils/password.utils';
import { AlertMessages } from '@Enums/config/messages.enum';
import type { UploadFile } from '@Interfaces/domain/file.interface';

export function useGenerateDownloadLink() {
  const { generateDownloadLinkRequest } = useLink();
  const { setLink } = useLinkStorage();
  const { user } = useUserStorage();

  const WEB_URL = import.meta.env.VITE_FRONTEND_URL;

  const generateDownloadLink = async ({
    files,
    downloads,
    password,
  }: {
    files: UploadFile[];
    downloads: string;
    password: string | null;
  }) => {
    try {
      if (!files) throw new Error(AlertMessages.NO_FILE);

      const hashedPassword = password ? hashPassword(password) : null;
      const intDownloads = parseInt(downloads);
      const url = `${WEB_URL}download/${files[0].path}`;

      const link = createLink({
        user,
        files: files[0],
        password: hashedPassword,
        downloads: intDownloads,
        url,
      });

      const { hasData, error } = await generateDownloadLinkRequest({ link });

      console.log({ hasData, link });

      if (error) throw new Error(error.message);
      else if (hasData) setLink(link);
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { generateDownloadLink };
}
