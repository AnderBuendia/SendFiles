import type { UploadFile } from '@Interfaces/domain/file.interface';

export function updateFilename(
  filename: string,
  hashFilename: string
): UploadFile {
  const extension = filename.split('.').pop();

  return {
    name: `${hashFilename}.${extension}`,
    path: hashFilename,
  };
}
