export function getFilenameExtension(file: string): string {
  return file.substring(file.lastIndexOf('.') + 1);
}
