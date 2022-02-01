import { FC, useState, useEffect } from 'react';

interface DownloadPageProps {
  params: {
    id: string;
  };
}

const DownloadPage: FC<DownloadPageProps> = ({ params }) => {
  return (
    <div>
      <h1>Hello from Download Page</h1>
    </div>
  );
};

export default DownloadPage;
