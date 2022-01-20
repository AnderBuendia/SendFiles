import { FC } from 'react';

export type SendFilesIconProps = {
  style: string;
};

export const SendFilesIcon: FC<SendFilesIconProps> = ({ style }) => {
  return (
    <img
      src="/sendfiles-logo.png"
      loading="lazy"
      className={style}
      alt="sendfiles-logo"
    />
  );
};
