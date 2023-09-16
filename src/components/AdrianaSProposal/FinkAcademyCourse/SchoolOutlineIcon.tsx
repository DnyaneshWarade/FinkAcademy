import { memo, SVGProps } from 'react';

const SchoolOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.5 3.125L1.04167 9.375L5.20833 11.6458V17.8958L12.5 21.875L19.7917 17.8958V11.6458L21.875 10.5104V17.7083H23.9583V9.375L12.5 3.125ZM19.6042 9.375L12.5 13.25L5.39583 9.375L12.5 5.5L19.6042 9.375ZM17.7083 16.6667L12.5 19.5L7.29167 16.6667V12.7813L12.5 15.625L17.7083 12.7813V16.6667Z'
      fill='#525886'
    />
  </svg>
);
const Memo = memo(SchoolOutlineIcon);
export { Memo as SchoolOutlineIcon };
