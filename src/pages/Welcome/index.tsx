import React, { FC } from 'react';
import Header from "./components/Header";
import Description from "./components/Description";
import Backers from "./components/Backers";

const Welcome: FC = () => {

  return (
    // <div className="flex flex-col justify-between items-center h-screen font-kanit py-12 mx-48">
    //   <div className="space-y-8 w-full">
    //     <Header />
    //     <Description />
    //   </div>
    //   <Backers />
    // </div>

    <div className="bg-black">
      <svg width="100%" viewBox="0 0 1920 700" fill="none">

        <path d="M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65 
285 1797.76 143.751 1921 1.00002" stroke="url(#lines-path)" vectorEffect="non-scaling-stroke"></path>

        <path d="M1 197.5C185.5 282.5 336 320 631 320C926 320 980 320 1291 320C1602 320 1746.5 276.5 1921 197.5"
              stroke="url(#lines-path)" vectorEffect="non-scaling-stroke"></path>

        <path d="M1 354H1921" stroke="url(#lines-path)" vectorEffect="non-scaling-stroke"></path>
        <path d="M1 510C185.5 425 336 387.5 631 387.5C926 387.5 980 387.5 1291 387.5C1602 387.5 1746.5 431 1921 510"
              stroke="url(#lines-path)" vectorEffect="non-scaling-stroke"></path>

        <path
          d="M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707"
          stroke="url(#lines-path)" vectorEffect="non-scaling-stroke"></path>

        <line x1="0" y1="0" x2="80" y2="0" stroke="url(#lines-gradient)" strokeWidth="2" strokeLinecap="round"
              transform="translate(-80,0)" vectorEffect="non-scaling-stroke">
          <animateMotion dur="3s" repeatCount="indefinite"
                         path="M1 3.00354C179.628 198.347 377.216 285 632.684 285C888.152 285 973.973 285 1290.31 285C1606.65 285 1797.76 143.751 1921 1.00002"
                         rotate="auto" begin="1"></animateMotion>
        </line>

        <line x1="0" y1="0" x2="80" y2="0" stroke="url(#lines-gradient)" strokeWidth="2" strokeLinecap="round"
              transform="translate(-80,0)" vectorEffect="non-scaling-stroke">
          <animateMotion dur="2.5s" repeatCount="indefinite"
                         path="M1 197.5C185.5 282.5 336 320 631 320C926 320 980 320 1291 320C1602 320 1746.5 276.5 1921 197.5"
                         rotate="auto" begin="5"></animateMotion>
        </line>

        <line x1="0" y1="0" x2="80" y2="0" stroke="url(#lines-gradient)" strokeWidth="2" strokeLinecap="round"
              transform="translate(-80,0)" vectorEffect="non-scaling-stroke">
          <animateMotion dur="4s" repeatCount="indefinite" path="M1 354H1921" rotate="auto" begin="3"></animateMotion>
        </line>

        <line x1="0" y1="0" x2="80" y2="0" stroke="url(#lines-gradient)" strokeWidth="2" strokeLinecap="round"
              transform="translate(-80,0)" vectorEffect="non-scaling-stroke">
          <animateMotion dur="3.5s" repeatCount="indefinite"
                         path="M1 510C185.5 425 336 387.5 631 387.5C926 387.5 980 387.5 1291 387.5C1602 387.5 1746.5 431 1921 510"
                         rotate="auto" begin="2"></animateMotion>
        </line>

        <line x1="0" y1="0" x2="80" y2="0" stroke="url(#lines-gradient)" strokeWidth="2" strokeLinecap="round"
              transform="translate(-80,0)" vectorEffect="non-scaling-stroke">
          <animateMotion dur="4.5s" repeatCount="indefinite"
                         path="M1 704.996C179.628 509.653 377.216 423 632.684 423C888.152 423 973.973 423 1290.31 423C1606.65 423 1797.76 564.249 1921 707"
                         rotate="auto" begin="0"></animateMotion>
        </line>

        <defs>
          <linearGradient id="lines-gradient" x1="0" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent " offset="0"></stop>
            <stop stopColor="" offset="1"></stop>
          </linearGradient>
          <linearGradient id="lines-path" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent " offset="0%"></stop>
            <stop stopColor="#3b82f6" offset="10%"></stop>
            <stop stopColor="#c2410c" offset="90%"></stop>
            <stop stopColor="transparent" offset="100%"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Welcome;