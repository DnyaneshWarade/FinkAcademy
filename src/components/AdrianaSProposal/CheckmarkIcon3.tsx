import { memo, SVGProps } from 'react';

const CheckmarkIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={28} height={28} rx={14} fill='#F9FAFF' />
    <rect width={28} height={28} rx={14} stroke='#C7CCF1' strokeWidth={4} />
  </svg>
);
const Memo = memo(CheckmarkIcon3);
export { Memo as CheckmarkIcon3 };
