import { FC, useState, FormEvent, ChangeEvent } from 'react';
import type { DropzoneFile } from '@Interfaces/domain/file.interface';
import { NumberOfDownloads } from '@Enums/file/downloads.enum';
import { useForm } from '@Components/Dropzone/CreateLinkForm/state/hook';

export type CreateLinkFormProps = {
  files: DropzoneFile[];
};

const CreateLinkForm: FC<CreateLinkFormProps> = ({ files }) => {
  const [hasPassword, setHasPassword] = useState<boolean>(false);
  const { password, downloads, addPassword, addDownloads } = useForm();

  const handleChangeNumberOfDownloads = (e: ChangeEvent<HTMLSelectElement>) => {
    const downloads = parseInt(e.target.value);

    addDownloads({ downloads });
  };

  const handleAddPassword = (e: ChangeEvent<HTMLInputElement>) => {
    addPassword({ password: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="downloads">Delete after:</label>
        <select
          id="downloads"
          value={downloads}
          onChange={handleChangeNumberOfDownloads}
        >
          <option disabled>-- Number of Downloads --</option>
          {Object.keys(NumberOfDownloads).map((download) => (
            <option key={download}>{download} Downloads</option>
          ))}
        </select>

        <label htmlFor="password">Password protect</label>
        <input type="checkbox" onChange={() => setHasPassword(!hasPassword)} />

        {hasPassword && (
          <input
            id="password"
            type="password"
            value={password}
            onChange={handleAddPassword}
          />
        )}
      </form>
    </div>
  );
};

export default CreateLinkForm;
