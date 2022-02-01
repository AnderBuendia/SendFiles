import {
  FC,
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

export type AppStoreContextType = {
  urlFile: string | null;
  setUrlFile: Dispatch<SetStateAction<string | null>>;
};

export type AppStoreProviderProps = {
  children: ReactNode;
};

const AppStoreContext = createContext<AppStoreContextType>({
  urlFile: null,
  setUrlFile: () => {},
});

export const useAppStore = () => useContext(AppStoreContext);

export const AppStoreProvider: FC<AppStoreProviderProps> = ({ children }) => {
  const [urlFile, setUrlFile] = useState<string | null>(null);

  const value = {
    urlFile,
    setUrlFile,
  };

  return (
    <AppStoreContext.Provider value={value}>
      {children}
    </AppStoreContext.Provider>
  );
};

export default AppStoreContext;
