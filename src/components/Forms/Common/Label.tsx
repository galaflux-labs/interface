import React, { memo } from 'react';

interface RequiredFiledLabelProps {
  label: string | React.ReactNode,
}

const Label: React.FC<RequiredFiledLabelProps> = ({
  label,
}) => {
  return (
    <div className="pl-2 pb-1" >
      {label}
    </div>
  )
};

export default memo(Label);