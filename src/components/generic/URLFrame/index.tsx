import type { FC } from 'react';
import styles from '@Components/generic/URLFrame/URLFrame.module.css';
import { DuplicateIcon } from '@Components/Icons/duplicate.icon';

interface URLFrameProps {
  url: string;
}

const URLFrame: FC<URLFrameProps> = ({ url }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className={styles.urlWrapper}>
      <p className="h3">Your URL is:</p>
      <div className={styles.linkWrapper}>
        <pre>
          <code>{url}</code>
        </pre>
        <button
          className={`button-primary ${styles.copyButton}`}
          onClick={handleCopyLink}
        >
          <span>
            <DuplicateIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default URLFrame;
