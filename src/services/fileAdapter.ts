import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@Services/api';
import { FileService } from '@Interfaces/ports/file-service.interface';

const STORAGE_URL = import.meta.env.VITE_SUPABASE_STORAGE_URL;

export function useFile(): FileService {
  const filename = uuidv4();

  const uploadFileRequest = async ({
    file,
    extension,
  }: {
    file: string;
    extension: string;
  }) => {
    try {
      const { data, error } = await supabase.storage
        .from('files')
        .upload(`uploads/${filename}.${extension}`, file);

      if (error) throw new Error(error.message);

      const fileUrl = data?.Key ? `${STORAGE_URL}${data.Key}` : '';

      return fileUrl;
    } catch (error: any) {
      console.log(error);
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return { uploadFileRequest };
}
