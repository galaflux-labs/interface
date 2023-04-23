import { FC } from 'react';

interface KeplrIconProps {
  size: number
}

const KeplrIcon: FC<KeplrIconProps> = ({size}) => {
  return (
      <svg width={size} height={size} viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_160_36632)">
          <rect width="158" height="158" rx="79" fill="#0A0718" />
          <g clipPath="url(#clip1_160_36632)">
            <circle cx="106.031" cy="106.031" r="106.031" transform="matrix(1 0 0 -1 -27.1929 184.857)"
                    fill="#EBF7FD" />
            <g filter="url(#filter0_f_160_36632)">
              <circle cx="88.9404" cy="88.9404" r="88.9404" transform="matrix(1 0 0 -1 4.92822 152.382)"
                      fill="#1BB8FF" />
            </g>
            <g filter="url(#filter1_f_160_36632)">
              <circle cx="83.5645" cy="83.5645" r="83.5645" transform="matrix(1 0 0 -1 22.1323 137.987)"
                      fill="#232DE3" />
            </g>
            <g filter="url(#filter2_f_160_36632)">
              <circle cx="63.0245" cy="63.0245" r="63.0245" transform="matrix(1 0 0 -1 56.8926 99.3645)"
                      fill="#EBF7FD" />
            </g>
            <g filter="url(#filter3_f_160_36632)">
              <circle cx="53.0178" cy="53.0178" r="53.0178" transform="matrix(1 0 0 -1 32.3149 127.453)"
                      fill="#232DE3" />
            </g>
            <g filter="url(#filter4_f_160_36632)">
              <circle cx="40.7289" cy="40.7289" r="40.7289" transform="matrix(1 0 0 -1 38.271 119.729)"
                      fill="#0A0718" />
            </g>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_160_36632" x="-12.5111" y="-42.9378" width="212.759" height="212.759"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="8.71965" result="effect1_foregroundBlur_160_36632" />
          </filter>
          <filter id="filter1_f_160_36632" x="-12.9788" y="-64.2534" width="237.351" height="237.351"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="17.5556" result="effect1_foregroundBlur_160_36632" />
          </filter>
          <filter id="filter2_f_160_36632" x="21.7815" y="-61.7954" width="196.271" height="196.271"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="17.5556" result="effect1_foregroundBlur_160_36632" />
          </filter>
          <filter id="filter3_f_160_36632" x="4.22605" y="-6.67117" width="162.213" height="162.213"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="14.0444" result="effect1_foregroundBlur_160_36632" />
          </filter>
          <filter id="filter4_f_160_36632" x="-31.9512" y="-31.951" width="221.902" height="221.902"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="35.1111" result="effect1_foregroundBlur_160_36632" />
          </filter>
          <clipPath id="clip0_160_36632">
            <rect width="158" height="158" rx="79" fill="white" />
          </clipPath>
          <clipPath id="clip1_160_36632">
            <rect width="158" height="158" rx="79" transform="matrix(1 0 0 -1 0.0126953 158)" fill="white" />
          </clipPath>
        </defs>
      </svg>
  );
};

export default KeplrIcon;