export interface UploadFile {
  name: string;
  original_name: string;
  path: string;
  lastModified: number;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface DropzoneFile extends File {
  readonly path?: string;
}
