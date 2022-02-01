import { UnitSize } from '@Enums/file/file.enum';

const BYTES_TO_MEGABYTES: number = 1024;
const ROUND_NUMBER: number = 2;

export function getFileUnitSize(fileSize: number) {
  for (const [unitSize, powSize] of Object.entries(UnitSize)) {
    if (unitSize === 'megabytes') {
      return (fileSize / Math.pow(BYTES_TO_MEGABYTES, Number(powSize))).toFixed(
        ROUND_NUMBER
      );
    }
  }

  return fileSize;
}

export function getFilenameExtension(file: string): string {
  return file.split('.').pop() as string;
}

export function getFilename(file: string): string {
  return file.split('.').shift() as string;
}
