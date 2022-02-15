import type { FC } from 'react';
import styles from '@Components/generic/Loading/Loading.module.css';
import Spinner from '@Components/generic/Spinner';
import { Helmet } from 'react-helmet-async';

const Loading: FC = () => {
  return (
    <>
      <Helmet>
        <title>Loading...</title>
      </Helmet>
      <div className="App-wrapper">
        <div className={styles.loadingWrapper}>
          <h4>Checking files...</h4>
          <Spinner />
        </div>
      </div>
    </>
  );
};

export default Loading;
