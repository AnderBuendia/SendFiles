import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Login from '@Components/Login';

const LoginPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Log in | Sendfiles</title>
      </Helmet>
      <Login />
    </>
  );
};

export default LoginPage;
