import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@Services/api';
import { getFilenameExtension } from '@Lib/utils/file.utils';
import { FileService } from '@Interfaces/ports/file-service.interface';

export function useFile(): FileService {
  const uploadFileRequest = async ({ file }: { file: File }) => {
    const extension = getFilenameExtension(file.name);
    const filename = `${uuidv4()}`;

    const { data, error } = await supabase.storage
      .from('files')
      .upload(`uploads/${filename}.${extension}`, file);

    const uploadedFilename = data?.Key ? filename : '';

    console.log({ uploadedFilename, data });
    return { uploadedFilename, error };
  };

  return { uploadFileRequest };
}
