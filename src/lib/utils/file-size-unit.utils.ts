import { UnitSize } from '@Enums/file/file.enum';

export function getFileUnitSize(fileSize: number) {
  for (const [unitSize, powSize] of Object.entries(UnitSize)) {
    if (unitSize === 'megabytes') {
      return (fileSize / Math.pow(1024, Number(powSize))).toFixed(2);
    }
  }

  return fileSize;
}
