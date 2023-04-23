import React, { memo } from 'react';

interface RequiredFiledLabelProps {
  label: string | React.ReactNode,
}

const Label: React.FC<RequiredFiledLabelProps> = ({
  label,
}) => {
  return (
    <span className="pl-2">
      {label}
    </span>
  )
};

export default memo(Label);