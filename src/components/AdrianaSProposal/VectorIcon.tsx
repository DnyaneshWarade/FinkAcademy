import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 25.375L23.3786 13L0 0.625V10.25L16.699 13L0 15.75V25.375Z' fill='#525886' />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
