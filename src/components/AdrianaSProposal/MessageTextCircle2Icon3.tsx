import { memo, SVGProps } from 'react';

const MessageTextCircle2Icon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={40} height={40} rx={20} fill='url(#paint0_linear_449_235)' />
    <path
      d='M15.3333 17.0833H20M15.3333 21.1667H23.5M20 30.5C25.799 30.5 30.5 25.799 30.5 20C30.5 14.201 25.799 9.5 20 9.5C14.201 9.5 9.5 14.201 9.5 20C9.5 21.3967 9.77269 22.7296 10.2677 23.9486C10.3625 24.1819 10.4099 24.2985 10.431 24.3928C10.4517 24.4851 10.4592 24.5533 10.4592 24.6478C10.4593 24.7445 10.4417 24.8497 10.4066 25.0602L9.71481 29.2111C9.64237 29.6458 9.60615 29.8631 9.67355 30.0203C9.73255 30.1578 9.84216 30.2674 9.97972 30.3264C10.1369 30.3939 10.3542 30.3576 10.7889 30.2852L14.9398 29.5934C15.1503 29.5583 15.2555 29.5407 15.3522 29.5408C15.4467 29.5408 15.5149 29.5483 15.6072 29.569C15.7015 29.5901 15.8181 29.6375 16.0514 29.7323C17.2704 30.2273 18.6033 30.5 20 30.5Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient id='paint0_linear_449_235' x1={20} y1={0} x2={40} y2={36.5} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#525886' />
        <stop offset={1} stopColor='#8893DF' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(MessageTextCircle2Icon3);
export { Memo as MessageTextCircle2Icon3 };
