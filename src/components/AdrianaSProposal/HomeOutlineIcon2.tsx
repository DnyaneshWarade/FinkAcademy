import { memo, SVGProps } from 'react';

const HomeOutlineIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.5 5.92708L17.7083 10.6146V18.75H15.625V12.5H9.375V18.75H7.29167V10.6146L12.5 5.92708ZM12.5 3.125L2.08333 12.5H5.20833V20.8333H11.4583V14.5833H13.5417V20.8333H19.7917V12.5H22.9167'
      fill='#525886'
    />
  </svg>
);
const Memo = memo(HomeOutlineIcon2);
export { Memo as HomeOutlineIcon2 };
