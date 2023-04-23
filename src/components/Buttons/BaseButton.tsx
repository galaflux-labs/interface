import React, { FC } from 'react';

interface Props {
  text: string;
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BaseButton: FC<Props> = (props) => {
  return (
    <button onClick={props.onClick}
            disabled={props.disabled}
            className={"rounded-lg text-white bg-orange-400 w-full p-3 " + (props.disabled ? "opacity-50" : "hover:bg-orange-500")}>
      {props.text}
    </button>
  );
};

export default BaseButton;