import { FC, useState, useCallback } from 'react';
import '@Components/Dropzone/Dropzone.css';
import { useDropzone } from 'react-dropzone';
import { useAuthenticate } from '@Application/authenticate';
import { useUploadFiles } from '@Application/file/uploadFiles';
import { getFilenameExtension } from '@Lib/utils/file-extension.utils';
import ListFiles from '@Components/Dropzone/ListFiles';
import CreateLinkForm from '@Components/Dropzone/CreateLinkForm';
import { FileSize } from '@Enums/file/file.enum';

const Dropzone: FC = () => {
  const [uploading, setUploading] = useState<boolean>(false);
  const { isLogged } = useAuthenticate();
  const { uploadFiles } = useUploadFiles();
  const maxSize = isLogged ? FileSize.IS_LOGGED : FileSize.DEFAULT;

  const onDrop = useCallback(
    async (files) => {
      const [file] = files;
      const extension = getFilenameExtension(file.name);

      const fileUrl = await uploadFiles(file, extension);
    },
    [uploadFiles]
  );

  const { isDragActive, acceptedFiles, getRootProps, getInputProps } =
    useDropzone({
      onDrop,
      maxSize,
    });

  const dropContainer =
    acceptedFiles && acceptedFiles.length > 0 ? (
      <>
        <ListFiles files={acceptedFiles} />
        {isLogged && <CreateLinkForm files={acceptedFiles} />}
      </>
    ) : (
      <div className="form-container">
        <p>Drag and drop files</p>
        <button className="primary-button">Select files to upload</button>
      </div>
    );

  return (
    <div className="dropzone-container">
      <div className="drop-container" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive && (
          <div className="form-container">
            <p>Drop file</p>
          </div>
        )}

        {uploading ? <p>Uploading File...</p> : dropContainer}
      </div>
    </div>
  );
};

export default Dropzone;
