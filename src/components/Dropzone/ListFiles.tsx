import type { FC } from 'react';
import styles from '@Components/Dropzone/Dropzone.module.css';
import { getUnitFileSize } from '@Lib/utils/file.utils';
import type { UploadFile } from '@Interfaces/domain/file.interface';

export type ListFiles = {
  files: UploadFile[];
};

const ListFiles: FC<ListFiles> = ({ files }) => {
  return (
    <div className={styles.form}>
      <p className="h3">Files</p>
      <ul className={styles.list}>
        {files.map((file) => (
          <li key={file.lastModified} className={styles.file}>
            <p className="small">{file.original_name}</p>
            <p className="small">{getUnitFileSize(file.size)} MB</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListFiles;
