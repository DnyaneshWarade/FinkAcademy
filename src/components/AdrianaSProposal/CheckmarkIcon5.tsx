import { memo, SVGProps } from 'react';

const CheckmarkIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={28} height={28} rx={14} fill='#C7CCF1' />
    <path d='M16.4 16.4L14 22L11.6 16.4L6 14L11.6 11.6L14 6L16.4 11.6L22 14L16.4 16.4Z' fill='white' />
    <rect width={28} height={28} rx={14} stroke='#C7CCF1' strokeWidth={4} />
  </svg>
);
const Memo = memo(CheckmarkIcon5);
export { Memo as CheckmarkIcon5 };
