import { memo, SVGProps } from 'react';

const StarLargeIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.4 10.4L8 16L5.6 10.4L0 8L5.6 5.6L8 0L10.4 5.6L16 8L10.4 10.4Z'
      fill='#8893DF'
      stroke='white'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(StarLargeIcon9);
export { Memo as StarLargeIcon9 };
