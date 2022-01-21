import { FC } from 'react';
import '@Components/Header/Header.css';
import { useRoute, Link } from 'wouter';
import { useUserStorage } from '@Services/storageAdapter';
import { useAuthenticate } from '@Application/authenticate';
import { SendFilesIcon } from '@Components/Icons/sendfiles.icon';
import { MainPaths } from '@Enums/paths/main-paths.enum';

const Header: FC = () => {
  const { user, isLogged } = useUserStorage();
  const { signOut } = useAuthenticate();

  const renderLoginButtons = ({ isLogged }: { isLogged: boolean }) => {
    return isLogged ? (
      <>
        <span>Hello, {user?.email}</span>
        <button
          className="header-button logout-color-button"
          onClick={() => signOut()}
        >
          <span>Sign Out</span>
        </button>
      </>
    ) : (
      <Link to={MainPaths.LOGIN}>
        <a className="header-button login-color-button">
          <span>Sign In</span>
        </a>
      </Link>
    );
  };

  return (
    <header className="header-container">
      <Link to={MainPaths.INDEX}>
        <a>
          <SendFilesIcon style="header-logo" />
        </a>
      </Link>

      {renderLoginButtons({ isLogged })}
    </header>
  );
};

export default Header;
