import { FC, useState, useEffect, FormEvent } from 'react';
import '@Pages/download/download.css';
import { Helmet } from 'react-helmet-async';
import { useGetLink } from '@Application/link/getLink';
import { useDownloadFile } from '@Application/file/downloadFile';
import { useVerifyLinkPassword } from '@Application/link/verifyLinkPassword';
import { useUpdateOrRemoveLink } from '@Application/link/updateOrRemoveLink';
import { useFileStorage, useLinkStorage } from '@Services/storageAdapter';
import Loading from '@Components/generic/Loading';

interface DownloadPageProps {
  params: {
    id: string;
  };
}

const DownloadPage: FC<DownloadPageProps> = ({ params }) => {
  const [passwordVerified, setPasswordVerified] = useState<boolean>(false);
  const { getLink } = useGetLink();
  const { verifyLinkPassword } = useVerifyLinkPassword();
  const { updateOrRemoveLink } = useUpdateOrRemoveLink();
  const { downloadFile } = useDownloadFile();
  const { urlDownloadFile } = useFileStorage();
  const { link, loading, setLink, setLoading } = useLinkStorage();

  console.log({ password: !link?.password });
  useEffect(() => {
    fetchLink(params.id);
  }, [params.id]);

  async function fetchLink(id: string) {
    setLoading(true);
    const response = await getLink(id);

    if (response) {
      const { data } = response;
      const hasPassword = Boolean(!data.password);

      setLink(data);
      setPasswordVerified(hasPassword);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (passwordVerified && link?.name) fetchDownloadFile(link.name);
  }, [passwordVerified, link?.name]);

  async function fetchDownloadFile(filename: string) {
    await downloadFile(filename);
  }

  console.log({ link, passwordVerified, urlDownloadFile });

  const handleSubmitConfirmPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //@ts-ignore
    const inputPassword: string = e.target.confirmpassword.value;

    const response = await verifyLinkPassword(link?.password, inputPassword);

    if (response) setPasswordVerified(response.isSamePassword);
  };

  const handleClickUpdateLink = async () => {
    await updateOrRemoveLink(link);
  };

  if (loading) return <Loading />;

  return (
    <>
      <Helmet>
        <title>Download File | Sendfiles</title>
      </Helmet>
      <div className="App-wrapper">
        {link?.password && !passwordVerified ? (
          <div className="confirm-password-wrapper">
            <h4>Introduce password to download files</h4>
            <form
              className="confirm-password-form"
              onSubmit={handleSubmitConfirmPassword}
            >
              <label htmlFor="confirmpassword">Password</label>
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
              />
              <button className="primary-button">
                <span>Confirm Password</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="download">
            <h4>Download your files</h4>

            {urlDownloadFile ? (
              <div className="download-button">
                <a
                  className="download-button"
                  download
                  href={urlDownloadFile}
                  onClick={handleClickUpdateLink}
                >
                  <span>Download Files</span>
                </a>
              </div>
            ) : (
              <button className="primary-button" disabled>
                <span>Download Files</span>
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DownloadPage;
