import { FC, useState, FormEvent, ChangeEvent } from 'react';
import '@Components/Forms/CreateLinkForm/CreateLinkForm.css';
import { useAuthenticate } from '@Application/authenticate';
import { useCreateLink } from '@Application/link/createLink';
import { NumberOfDownloads } from '@Enums/file/downloads.enum';
import { useForm } from '@Components/Forms/CreateLinkForm/state/hook';

export type CreateLinkFormProps = {
  uploadedFiles: string | null;
};

const CreateLinkForm: FC<CreateLinkFormProps> = ({ uploadedFiles }) => {
  const {
    hasPassword,
    password,
    downloads,
    changeHasPassword,
    addPassword,
    addDownloads,
  } = useForm();
  const { isLogged } = useAuthenticate();
  const { createLink } = useCreateLink();

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

    const parseDownloads = parseInt(downloads);
    console.log({ downloads, password, uploadedFiles });

    createLink({ uploadedFiles, downloads: parseDownloads, password });
  };

  console.log({ uploadedFiles });

  return (
    <div className="create-link-form-container">
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
