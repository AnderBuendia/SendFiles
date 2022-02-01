export interface FileService {
  uploadFileRequest: ({ file }: { file: File }) => Promise<{
    uploadedFilename: string;
    error: Error | null;
  }>;
}
