import { FC } from 'react';
import '@Components/Footer/Footer.css';
import { SocialPaths } from '@Enums/paths/social-paths.enum';
import { CreatorIcon } from '@Components/Icons/creator.icon';

const Footer: FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="creator-row">
          <p>Developed by</p>

          <a href={SocialPaths.URL_CREATOR} target="_blank">
            <span>anderb</span>
            <CreatorIcon />
          </a>
        </div>
        <div className="network-links-row">
          <a href={SocialPaths.GITHUB} target="_blank">
            <span>Github</span>
          </a>
          <span className="separator-links">•</span>
          <a href={SocialPaths.LINKEDIN} target="_blank">
            <span>Linked In</span>
          </a>
          <span className="separator-links">•</span>
          <a href={SocialPaths.TWITTER} target="_blank">
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
