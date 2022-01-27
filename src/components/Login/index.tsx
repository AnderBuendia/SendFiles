import { FC } from 'react';
import '@Components/Login/Login.css';
import { Link } from 'wouter';
import { Auth } from '@supabase/ui';
import { supabase } from '@Services/api';
import Container from '@Components/Login/Container';
import { SendFilesIcon } from '@Components/Icons/sendfiles.icon';
import { MainPaths } from '@Enums/paths/main-paths.enum';

const Login: FC = () => {
  return (
    <div className="login-form">
      <Link to={MainPaths.INDEX}>
        <a className="login-title">
          <span>Sendfiles</span>
          <SendFilesIcon style="login-icon" />
        </a>
      </Link>

      <Auth.UserContextProvider supabaseClient={supabase}>
        <Container>
          <Auth supabaseClient={supabase} providers={['github']} />
        </Container>
      </Auth.UserContextProvider>
    </div>
  );
};

export default Login;
