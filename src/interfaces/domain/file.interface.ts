export interface UploadFile {
  name: string;
  path: string;
}

export interface DropzoneFile extends File {
  readonly path?: string;
}
