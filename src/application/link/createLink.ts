import { useLink } from '@Services/linkAdapter';
import { useFileStorage } from '@Services/storageAdapter';

export function useCreateLink() {
  const { createLinkRequest } = useLink();
  const { setUrlFile } = useFileStorage();

  const createLink = async ({
    uploadedFiles,
    downloads,
    password,
  }: {
    uploadedFiles: string | null;
    downloads: number;
    password: string;
  }) => {
    try {
      if (!uploadedFiles) throw new Error('There are no files');

      const { fileUrl, error } = await createLinkRequest({
        uploadedFiles,
        downloads,
        password,
      });

      console.log({ fileUrl });

      if (error) throw new Error(error.message);
      setUrlFile(fileUrl);
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { createLink };
}
