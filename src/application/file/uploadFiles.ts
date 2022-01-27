import { useFile } from '@Services/fileAdapter';
import { AlertMessages } from '@Enums/config/messages.enum';

export function useUploadFiles() {
  const { uploadFileRequest } = useFile();

  const uploadFiles = async (file: string, extension: string) => {
    try {
      if (!file) throw new Error(AlertMessages.MAX_FILE_SIZE);

      const fileUrl = uploadFileRequest({ file, extension });

      return fileUrl;
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { uploadFiles };
}
