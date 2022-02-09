import { UnitFileSize } from '@Enums/file/file.enum';
import {
  UnitConversor,
  UnitOfMeasurement,
} from '@Enums/config/unit-of-measurement.enum';

const ROUND_NUMBER: number = 2;

export function getUnitFileSize(fileSize: number) {
  for (const [unitFileSize, powFileSize] of Object.entries(UnitFileSize)) {
    if (unitFileSize === UnitOfMeasurement.MEGABYTES) {
      return (
        fileSize / Math.pow(UnitConversor.BYTES, Number(powFileSize))
      ).toFixed(ROUND_NUMBER);
    }
  }

  return fileSize;
}
