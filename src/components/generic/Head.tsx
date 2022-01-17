import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

export type HeadProps = {
  title: string;
};

const Head: FC<HeadProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Head;
