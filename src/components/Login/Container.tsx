import { useEffect, FC, ReactNode } from 'react';
import styles from '@Components/Login/Login.module.css';
import { useLocation } from 'wouter';
import { useAuthenticate } from '@Application/authenticate';
import Spinner from '@Components/generic/Spinner';
import { MainPaths } from '@Enums/paths/main-paths.enum';

export type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  const [_, pushLocation] = useLocation();
  const { isLogged } = useAuthenticate();

  useEffect(() => {
    if (isLogged) pushLocation(MainPaths.INDEX);
  }, [isLogged, pushLocation]);

  if (isLogged) {
    return (
      <div className={styles.loginMsgContainer}>
        <p className="normal-bold">Redirecting...</p>
        <Spinner />
      </div>
    );
  }

  return <div>{children}</div>;
};

export default Container;
