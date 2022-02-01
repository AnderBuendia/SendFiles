import type { FC } from 'react';

export type SendFilesIconProps = {
  style: string;
};

export const SendFilesIcon: FC<SendFilesIconProps> = ({ style }) => {
  return (
    <img src="/sendfiles-logo.png" className={style} alt="sendfiles-logo" />
  );
};
