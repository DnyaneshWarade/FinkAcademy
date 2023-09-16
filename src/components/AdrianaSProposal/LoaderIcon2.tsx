import { memo, SVGProps } from 'react';

const LoaderIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 936 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={936} height={4} rx={2} fill='#E7E9F9' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 2C0 0.89543 0.868781 0 1.94048 0H161.06C162.131 0 163 0.89543 163 2C163 3.10457 162.131 4 161.06 4H1.94048C0.868781 4 0 3.10457 0 2Z'
      fill='#8692DF'
    />
  </svg>
);
const Memo = memo(LoaderIcon2);
export { Memo as LoaderIcon2 };
