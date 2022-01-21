import { useEffect, FC, ReactNode } from 'react';
import '@Components/Login/Login.css';
import { useLocation } from 'wouter';
import { Typography } from '@supabase/ui';
import { useUserStorage } from '@Services/storageAdapter';
import Spinner from '@Components/generic/Spinner';
import { MainPaths } from '@Enums/paths/main-paths.enum';

export type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  const [_, pushLocation] = useLocation();
  const { isLogged } = useUserStorage();

  useEffect(() => {
    if (isLogged) pushLocation(MainPaths.INDEX);
  }, [isLogged, pushLocation]);

  if (isLogged) {
    return (
      <div className="login-msg-container">
        <Typography.Text strong>Redirecting...</Typography.Text>
        <Spinner />
      </div>
    );
  }

  return <div>{children}</div>;
};

export default Container;
