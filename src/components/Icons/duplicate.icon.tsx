import type { FC, ComponentProps } from 'react';

export const DuplicateIcon: FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="icon icon-tabler icon-tabler-copy"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <rect width="12" height="12" x="8" y="8" rx="2"></rect>
      <path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"></path>
    </svg>
  );
};
