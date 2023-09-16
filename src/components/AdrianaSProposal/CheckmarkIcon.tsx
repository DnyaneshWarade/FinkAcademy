import { memo, SVGProps } from 'react';

const CheckmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={28} height={28} rx={14} fill='#3EA50E' />
    <path
      d='M22.1876 8.31242C22.6041 8.72898 22.6041 9.40435 22.1876 9.82091L12.5876 19.4209C12.171 19.8375 11.4956 19.8375 11.0791 19.4209L6.81242 15.1542C6.39586 14.7377 6.39586 14.0623 6.81242 13.6458C7.22898 13.2292 7.90435 13.2292 8.32091 13.6458L11.8333 17.1582L20.6791 8.31242C21.0956 7.89586 21.771 7.89586 22.1876 8.31242Z'
      fill='#F9FAFF'
    />
  </svg>
);
const Memo = memo(CheckmarkIcon);
export { Memo as CheckmarkIcon };
