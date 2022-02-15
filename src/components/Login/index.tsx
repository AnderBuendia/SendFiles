import type { FC } from 'react';
import styles from '@Components/Login/Login.module.css';
import { Link } from 'wouter';
import { Auth } from '@supabase/ui';
import { supabase } from '@Services/api';
import Container from '@Components/Login/Container';
import { SendFilesIcon } from '@Components/Icons/sendfiles.icon';
import { MainPaths } from '@Enums/paths/main-paths.enum';

const Login: FC = () => {
  return (
    <div className="App-wrapper">
      <Link to={MainPaths.INDEX}>
        <a className={styles.loginTitle}>
          <span>Sendfiles</span>
          <SendFilesIcon style={styles.loginIcon} />
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
