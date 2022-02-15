import type { UploadFile } from '@Interfaces/domain/file.interface';
import type { Link } from '@Interfaces/domain/link.interface';

const url = `http://localhost:3000/download/filetest`;

export const files: UploadFile = {
  name: 'filetest.png',
  original_name: 'filetest.png',
  path: 'filetest.png',
  lastModified: 1612519365481,
  size: 10000,
  type: 'image/png',
  webkitRelativePath: '',
};

export const link: Link = {
  name: 'filetest.png',
  author: null,
  password: null,
  downloads: 1,
  total_downloads: 0,
  url,
  url_query: 'filetest',
};
