import { FC } from 'react';
import '@Components/Header/Header.css';
import { Link } from 'wouter';
import { useUserStorage } from '@Services/storageAdapter';
import { useAuthenticate } from '@Application/authenticate';
import { SendFilesIcon } from '@Components/Icons/sendfiles.icon';
import { MainPaths } from '@Enums/paths/main-paths.enum';

const Header: FC = () => {
  const { user } = useUserStorage();
  const { isLogged, signOut } = useAuthenticate();

  const renderLoginButtons = ({ isLogged }: { isLogged: boolean }) => {
    return isLogged ? (
      <div className="header-authenticated">
        <span>Hi, {user?.email}</span>
        <button className="secondary-button" onClick={() => signOut()}>
          <span>Sign Out</span>
        </button>
      </div>
    ) : (
      <Link to={MainPaths.LOGIN}>
        <a className="primary-button">
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
