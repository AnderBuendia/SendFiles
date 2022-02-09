import { supabase } from '@Services/api';
import type { FileService } from '@Interfaces/ports/file-service.interface';
import type { DropzoneFile } from '@Interfaces/domain/file.interface';

export function useFile(): FileService {
  const uploadFileRequest = async ({
    file,
    filename,
  }: {
    file: DropzoneFile;
    filename: string;
  }) => {
    const { data, error } = await supabase.storage
      .from('files')
      .upload(`uploads/${filename}`, file);

    const hasData = Boolean(data?.Key);

    return { hasData, error };
  };

  const downloadFileRequest = async ({ filename }: { filename: string }) => {
    const { data, error } = await supabase.storage
      .from('files')
      .download(`uploads/${filename}`);

    return { data, error };
  };

  const deleteFileRequest = async ({ filename }: { filename: string }) => {
    const { error } = await supabase.storage
      .from('files')
      .remove([`uploads/${filename}`]);

    return { error };
  };

  return { uploadFileRequest, downloadFileRequest, deleteFileRequest };
}
