import type { FC } from 'react';
import '@Components/Home/Home.css';
import { Link } from 'wouter';
import { useFileStorage } from '@Services/storageAdapter';
import Dropzone from '@Components/Dropzone';
import URLFrame from '@Components/generic/URLFrame';
import { MainPaths } from '@Enums/paths/main-paths.enum';

// import { supabase } from '@Services/api';

const Home: FC = () => {
  const { urlFile } = useFileStorage();

  console.log({ urlFile });
  // const handleDownload = async () => {
  //   const { data, error } = await supabase.storage
  //     .from('files')
  //     .download(`uploads/0fbd920b-2601-4d9e-be92-961be61c475c.png`);

  //   console.log(data);

  //   if (data) setUrl(URL.createObjectURL(data));
  // };

  // useEffect(() => {
  //   downloadImage();
  // }, []);

  // async function downloadImage() {
  //   const { data, error } = await supabase.storage
  //     .from('files')
  //     .download(`uploads/0fbd920b-2601-4d9e-be92-961be61c475c.png`);

  //   if (data) setUrl(URL.createObjectURL(data));
  // }

  return (
    <div className="home-container">
      {urlFile ? <URLFrame url={urlFile} /> : <Dropzone />}

      <div className="summary-container">
        <h4>Share your files easily and privately</h4>
        <p>
          <span>ReactNodeSend</span> allows you to share files with end-to-end
          encryption and a file that is deleted after downloading. So you can
          keep what you share private and make sure your stuff doesn't stay
          online forever.
        </p>
        <Link href={MainPaths.LOGIN}>
          <a>Sign up to obtain more privileges</a>
        </Link>
      </div>
      {/* <a download onClick={handleDownload} href={url}>
        DOWNLOAAAD
      </a> */}
    </div>
  );
};

export default Home;
