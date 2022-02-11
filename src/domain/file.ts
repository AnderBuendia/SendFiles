import type { UploadFile } from '@Interfaces/domain/file.interface';

export function updateFile(file: File, hashFilename: string): UploadFile {
  const extension = file.name.split('.').pop();

  return {
    name: `${hashFilename}.${extension}`,
    original_name: file.name,
    path: hashFilename,
    lastModified: file.lastModified,
    size: file.size,
    type: file.type,
    webkitRelativePath: file.webkitRelativePath,
  };
}
