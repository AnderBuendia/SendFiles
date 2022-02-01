import { FC, useState, useCallback } from 'react';
import '@Components/Dropzone/Dropzone.css';
import { useDropzone } from 'react-dropzone';
import { useAuthenticate } from '@Application/authenticate';
import { useUploadFiles } from '@Application/file/uploadFiles';
import ListFiles from '@Components/Dropzone/ListFiles';
import CreateLinkForm from '@Components/Forms/CreateLinkForm';
import { FileSize } from '@Enums/file/file.enum';

const Dropzone: FC = () => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploaded, setUploaded] = useState<string | null>(null);
  const { isLogged } = useAuthenticate();
  const { uploadFiles } = useUploadFiles();
  const maxSize = isLogged ? FileSize.IS_LOGGED : FileSize.DEFAULT;

  const onDrop = useCallback(
    async (files) => {
      const [file] = files;

      setUploading(true);
      const uploadedFilename = await uploadFiles(file);

      setUploading(false);

      if (uploadedFilename) setUploaded(uploadedFilename);
    },
    [uploadFiles]
  );

  const { isDragActive, acceptedFiles, getRootProps, getInputProps } =
    useDropzone({
      onDrop,
      maxSize,
    });

  return (
    <div className="dropzone-container">
      {acceptedFiles && acceptedFiles.length > 0 ? (
        <>
          {uploading ? (
            <p> Uploading Files...</p>
          ) : (
            <>
              <ListFiles files={acceptedFiles} />
              <CreateLinkForm uploadedFiles={uploaded} />
            </>
          )}
        </>
      ) : (
        <div className="drop-container" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop file</p>
          ) : (
            <>
              <p>Drag and drop files</p>
              <button className="primary-button">Select files to upload</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropzone;
