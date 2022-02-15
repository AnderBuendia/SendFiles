import {
  FC,
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import type { Link } from '@Interfaces/domain/link.interface';
import type { UploadFile } from '@Interfaces/domain/file.interface';

export type AppStoreProviderProps = {
  children: ReactNode;
};

export const AppStoreContext = createContext<any>({});

export const useAppStore = () => useContext(AppStoreContext);

export const AppStoreProvider: FC<AppStoreProviderProps> = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);
  const [link, setLink] = useState<Link | null>(null);
  const [urlDownloadFile, setUrlDownloadFile] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const value = {
    uploadedFiles,
    link,
    urlDownloadFile,
    loading,
    setUploadedFiles,
    setLink,
    setUrlDownloadFile,
    setLoading,
  };

  return (
    <AppStoreContext.Provider value={value}>
      {children}
    </AppStoreContext.Provider>
  );
};

export default AppStoreContext;
