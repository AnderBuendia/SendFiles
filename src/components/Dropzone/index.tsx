import { FC, useCallback } from 'react';
import '@Components/Dropzone/Dropzone.css';
import { useDropzone } from 'react-dropzone';
import { useAuthenticate } from '@Application/authenticate';
import { useUploadFile } from '@Application/file/uploadFile';
import { useFileStorage } from '@Services/storageAdapter';
import ListFiles from '@Components/Dropzone/ListFiles';
import CreateLinkForm from '@Components/Forms/CreateLinkForm';
import { FileSize } from '@Enums/file/file.enum';

const Dropzone: FC = () => {
  const { isLogged } = useAuthenticate();
  const { uploadFile } = useUploadFile();
  const { uploadedFiles, loading, setLoading } = useFileStorage();
  const maxSize = isLogged ? FileSize.IS_LOGGED : FileSize.DEFAULT;

  const onDrop = useCallback(
    async (files) => {
      const [file] = files;

      setLoading(true);
      await uploadFile(file);
      setLoading(false);
    },
    [uploadFile]
  );

  const { isDragActive, getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize,
  });

  console.log({ uploadedFiles });
  return (
    <div className="dropzone">
      {uploadedFiles && uploadedFiles.length > 0 ? (
        <>
          {loading ? (
            <p className="normal-bold"> Uploading Files...</p>
          ) : (
            <>
              <ListFiles files={uploadedFiles} />
              <CreateLinkForm files={uploadedFiles} />
            </>
          )}
        </>
      ) : (
        <div className="drop" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop file</p>
          ) : (
            <>
              <p className="normal-bold">Drag and drop files</p>
              <button className="secondary-button">
                Select files to upload
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropzone;
