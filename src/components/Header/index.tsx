import { FC } from 'react';
import '@Components/Header/Header.css';
import { useRoute, Link } from 'wouter';
import { SendFilesIcon } from '@Components/Icons/sendfiles.icon';
import { MainPaths } from '@Enums/paths/main-paths.enum';

const Header: FC = () => {
  return (
    <header className="header-container">
      <Link to={MainPaths.INDEX}>
        <a>
          <SendFilesIcon style="header-logo" />
        </a>
      </Link>

      <Link to={MainPaths.LOGIN} className="header-login-button">
        Sign In
      </Link>
    </header>
  );
};

export default Header;
