import { useFile } from '@Services/fileAdapter';
import { AlertMessages } from '@Enums/config/messages.enum';
import { useFileStorage } from '@Services/storageAdapter';

export function useDownloadFile() {
  const { downloadFileRequest } = useFile();
  const { setUrlDownloadFile } = useFileStorage();

  const downloadFile = async (filename: string) => {
    try {
      if (!filename) throw new Error(AlertMessages.NO_FILE);

      const { data, error } = await downloadFileRequest({ filename });

      if (error) throw new Error(error.message);
      else if (data) {
        const url = URL.createObjectURL(data);
        setUrlDownloadFile(url);
      }
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { downloadFile };
}
