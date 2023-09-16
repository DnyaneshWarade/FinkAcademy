import { memo, SVGProps } from 'react';

const LoaderIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 190' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={4} width={190} height={4} rx={2} transform='rotate(90 4 0)' fill='#3EA50E' />
  </svg>
);
const Memo = memo(LoaderIcon4);
export { Memo as LoaderIcon4 };
