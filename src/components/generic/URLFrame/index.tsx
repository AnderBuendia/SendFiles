import type { FC } from 'react';
import '@Components/generic/URLFrame/URLFrame.css';
import { DuplicateIcon } from '@Components/Icons/duplicate.icon';

interface URLFrameProps {
  url: string;
}

const URLFrame: FC<URLFrameProps> = ({ url }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="url-container">
      <p>Your URL is:</p>
      <div className="link-container">
        <pre>
          <code>{url}</code>
        </pre>
        <button className="button-primary copy-button" onClick={handleCopyLink}>
          <span>
            <DuplicateIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default URLFrame;
