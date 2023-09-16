import { memo, SVGProps } from 'react';

const MenuIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.75 9H35.25V11.8333H9.75V9ZM9.75 16.0833H35.25V18.9167H9.75V16.0833ZM9.75 23.1667H35.25V26H9.75V23.1667Z'
      fill='#525886'
    />
  </svg>
);
const Memo = memo(MenuIcon5);
export { Memo as MenuIcon5 };
