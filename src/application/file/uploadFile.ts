import { v4 as uuidv4 } from 'uuid';
import { updateFilename } from '@Domain/file';
import { useFile } from '@Services/fileAdapter';
import { useFileStorage } from '@Services/storageAdapter';
import { AlertMessages } from '@Enums/config/messages.enum';
import type { DropzoneFile } from '@Interfaces/domain/file.interface';

export function useUploadFile() {
  const { uploadFileRequest } = useFile();
  const { setUploadedFiles } = useFileStorage();

  const uploadFile = async (file: DropzoneFile) => {
    try {
      if (!file) throw new Error(AlertMessages.MAX_FILE_SIZE);

      const hashFilename = `${uuidv4()}`;
      const updatedFilename = updateFilename(file.name, hashFilename);

      const { hasData, error } = await uploadFileRequest({
        file,
        filename: updatedFilename.name,
      });

      if (error) throw new Error(error.message);
      else if (hasData) setUploadedFiles([updatedFilename]);
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { uploadFile };
}
