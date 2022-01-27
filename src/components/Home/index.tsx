import { FC } from 'react';
import '@Components/Home/Home.css';
import Dropzone from '@Components/Dropzone';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="home-container">
      <Dropzone />
    </div>
  );
};

export default Home;
