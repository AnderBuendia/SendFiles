/* eslint-disable import/export */
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { AppStoreContext } from '@Lib/context/app-store.context';
import type { UploadFile } from '@Interfaces/domain/file.interface';
import type { Link } from '@Interfaces/domain/link.interface';

export interface RenderOptions {
  providerProps?: {
    link?: Link;
    loading?: boolean;
    uploadedFiles?: UploadFile[];
    setUploadedFiles?: () => void;
    setLoading?: () => void;
  };
  renderOptions?: {};
}

const customRender = (ui: React.ReactElement, options: RenderOptions = {}) => {
  const providerValues = {
    link: options.providerProps?.link,
    loading: options.providerProps?.loading,
    uploadedFiles: options.providerProps?.uploadedFiles,
    setLoading: options.providerProps?.setLoading,
    setUploadedFiles: options.providerProps?.setUploadedFiles,
  };

  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => (
      <AppStoreContext.Provider value={providerValues}>
        <HelmetProvider>{children}</HelmetProvider>, renderOptions,
      </AppStoreContext.Provider>
    ),
  });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
