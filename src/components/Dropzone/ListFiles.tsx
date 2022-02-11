import { FC } from 'react';
import { getUnitFileSize } from '@Lib/utils/file.utils';
import type { UploadFile } from '@Interfaces/domain/file.interface';

export type ListFiles = {
  files: UploadFile[];
};

const ListFiles: FC<ListFiles> = ({ files }) => {
  console.log({ files });
  return (
    <div className="form">
      <p className="h3">Files</p>
      <ul className="list">
        {files.map((file) => (
          <li key={file.lastModified} className="file">
            <p className="small">{file.original_name}</p>
            <p className="small">{getUnitFileSize(file.size)} MB</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListFiles;
