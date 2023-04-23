import { FC } from 'react';

interface ArchwayIconProps {
  size?: number,
  color?: string
}

const ArchwayIcon: FC<ArchwayIconProps> = ({size, color}) => {
  return (
    <svg viewBox="0 0 120 120"
         width={size ?? 20}
         height={size ?? 20}
    >
      <path
        d="M0 60.48C0 27.0778 26.8629 0 60 0C93.137 0 120 27.0778 120 60.48V119.94C119.968 86.8305 93.1171 60 60 60C26.863 60 5.85937e-05 86.8629 5.85937e-05 120L0 60.48Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};

export default ArchwayIcon;