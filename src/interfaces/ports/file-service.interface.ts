import type { DropzoneFile } from '@Interfaces/domain/file.interface';

export interface FileService {
  uploadFileRequest: ({
    file,
    filename,
  }: {
    file: DropzoneFile;
    filename: string;
  }) => Promise<{
    hasData: boolean;
    error: Error | null;
  }>;

  downloadFileRequest: ({ filename }: { filename: string }) => Promise<{
    data: Blob | null;
    error: Error | null;
  }>;

  deleteFileRequest: ({ filename }: { filename: string }) => Promise<{
    error: Error | null;
  }>;
}
