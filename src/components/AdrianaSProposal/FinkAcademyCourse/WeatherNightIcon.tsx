import { memo, SVGProps } from 'react';

const WeatherNightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.4896 4.26041L15.8542 6.28125L16.8021 9.46875L14.0625 7.58333L11.3229 9.46875L12.2708 6.28125L9.63542 4.26041L12.9583 4.16666L14.0625 1.04166L15.1667 4.16666L18.4896 4.26041ZM22.1354 11.4583L20.4271 12.7604L21.0417 14.8229L19.2708 13.6042L17.5 14.8229L18.1146 12.7604L16.4063 11.4583L18.5521 11.4062L19.2708 9.375L19.9896 11.4062L22.1354 11.4583ZM19.7604 16.6146C20.625 16.5312 21.5521 17.7604 21 18.5417C20.6667 19.0104 20.3125 19.4479 19.875 19.8646C15.8021 23.9583 9.20833 23.9583 5.14583 19.8646C1.07292 15.8021 1.07292 9.19792 5.14583 5.13541C5.5625 4.71875 6 4.34375 6.46875 4.01041C7.25 3.45833 8.47917 4.38541 8.39583 5.25C8.11458 8.22916 9.11458 11.3229 11.4063 13.6042C13.6875 15.8958 16.7708 16.8958 19.7604 16.6146ZM18.0521 18.7187C15.1042 18.5521 12.1875 17.3333 9.92708 15.1042C7.66667 12.8229 6.45833 9.89583 6.29167 6.95833C3.36458 10.2292 3.47917 15.25 6.61458 18.3958C9.76042 21.5312 14.7813 21.6458 18.0521 18.7187Z'
      fill='#525886'
    />
  </svg>
);
const Memo = memo(WeatherNightIcon);
export { Memo as WeatherNightIcon };