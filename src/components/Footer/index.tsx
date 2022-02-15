import type { FC } from 'react';
import styles from '@Components/Footer/Footer.module.css';
import { SocialPaths } from '@Enums/paths/social-paths.enum';
import { CreatorIcon } from '@Components/Icons/creator.icon';

const CREATOR_NAME = 'anderb';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.creatorRow}>
        <p>Developed by</p>

        <a href={SocialPaths.URL_CREATOR} target="_blank">
          <span>{CREATOR_NAME}</span>
          <CreatorIcon />
        </a>
      </div>
      <div className={styles.networkLinksRow}>
        <a href={SocialPaths.GITHUB} target="_blank">
          <span>Github</span>
        </a>
        <span className={styles.separatorLinks}>•</span>
        <a href={SocialPaths.LINKEDIN} target="_blank">
          <span>Linked In</span>
        </a>
        <span className={styles.separatorLinks}>•</span>
        <a href={SocialPaths.TWITTER} target="_blank">
          <span>Twitter</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
