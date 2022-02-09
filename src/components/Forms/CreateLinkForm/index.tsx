import type { FC, FormEvent, ChangeEvent } from 'react';
import '@Components/Forms/CreateLinkForm/CreateLinkForm.css';
import { useForm } from '@Components/Forms/CreateLinkForm/state/hook';
import { useAuthenticate } from '@Application/authenticate';
import { useGenerateDownloadLink } from '@Application/link/generateDownloadLink';
import { NumberOfDownloads } from '@Enums/file/downloads.enum';
import type { UploadFile } from '@Interfaces/domain/file.interface';

export type CreateLinkFormProps = {
  files: UploadFile[];
};

const CreateLinkForm: FC<CreateLinkFormProps> = ({ files }) => {
  const {
    hasPassword,
    password,
    downloads,
    changeHasPassword,
    addPassword,
    addDownloads,
  } = useForm();
  const { isLogged } = useAuthenticate();
  const { generateDownloadLink } = useGenerateDownloadLink();

  const handleChangeHasPassword = () => {
    changeHasPassword({ hasPassword: !hasPassword });
  };

  const handleChangeDownloads = (e: ChangeEvent<HTMLSelectElement>) => {
    addDownloads({ downloads: e.target.value });
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    addPassword({ password: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    generateDownloadLink({ files, downloads, password });
  };

  return (
    <div className="create-link-form">
      <form onSubmit={handleSubmit}>
        {isLogged && (
          <>
            <div className="form-group">
              <label className="label-group" htmlFor="downloads">
                Delete after:
              </label>
              <select id="downloads" onChange={handleChangeDownloads}>
                <option disabled>-- Number of Downloads --</option>
                {Object.values(NumberOfDownloads).map((download) => (
                  <option value={download} key={download}>
                    {download} Downloads
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="label-group" htmlFor="password">
                Password protect
              </label>
              <input type="checkbox" onChange={handleChangeHasPassword} />
            </div>

            {hasPassword && (
              <input
                value={password ? password : ''}
                id="password"
                type="password"
                onChange={handleChangePassword}
              />
            )}
          </>
        )}

        <button className="primary-button create-link-button">
          Create Link
        </button>
      </form>
    </div>
  );
};

export default CreateLinkForm;
