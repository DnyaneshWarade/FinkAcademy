import { memo, SVGProps } from 'react';

const LoaderIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 740' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={4} width={740} height={4} rx={2} transform='rotate(90 4 0)' fill='#C7CCF1' />
  </svg>
);
const Memo = memo(LoaderIcon3);
export { Memo as LoaderIcon3 };
