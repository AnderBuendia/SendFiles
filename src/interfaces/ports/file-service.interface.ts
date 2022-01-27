export interface FileService {
  uploadFileRequest: ({
    file,
    extension,
  }: {
    file: string;
    extension: string;
  }) => Promise<string | undefined>;
}
