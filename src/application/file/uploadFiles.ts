import { useFile } from '@Services/fileAdapter';
import { AlertMessages } from '@Enums/config/messages.enum';

export function useUploadFiles() {
  const { uploadFileRequest } = useFile();

  const uploadFiles = async (file: File) => {
    try {
      if (!file) throw new Error(AlertMessages.MAX_FILE_SIZE);

      const { uploadedFilename, error } = await uploadFileRequest({ file });

      if (error) throw new Error(error.message);

      return uploadedFilename;
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { uploadFiles };
}
