import { FC } from 'react';
import { getUnitFileSize } from '@Lib/utils/file.utils';
import type { DropzoneFile } from '@Interfaces/domain/file.interface';

export type ListFiles = {
  files: DropzoneFile[];
};

const ListFiles: FC<ListFiles> = ({ files }) => {
  return (
    <div className="form">
      <p>Files</p>
      <ul className="list">
        {files.map((file) => (
          <li key={file.lastModified} className="file">
            <p>{file.path}</p>
            <p className="text-sm text-gray-500">
              {getUnitFileSize(file.size)} MB
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListFiles;
