import { memo, SVGProps } from 'react';

const StarLargeIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.15 7.15L5.5 11L3.85 7.15L0 5.5L3.85 3.85L5.5 0L7.15 3.85L11 5.5L7.15 7.15Z'
      fill='#8893DF'
      stroke='white'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(StarLargeIcon6);
export { Memo as StarLargeIcon6 };
