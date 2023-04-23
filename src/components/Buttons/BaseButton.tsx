import React, { FC } from 'react';

interface Props {
  text: string;
  disabled?: boolean
  loading?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BaseButton: FC<Props> = (props) => {
  return (
    <button onClick={props.onClick}
            disabled={props.disabled}
            className={"active:scale-95 transition-all rounded-xl text-white bg-orange-400 w-full p-3 focus:" + (props.disabled || props.loading ? "opacity-50" : "hover:bg-orange-500")}>
      {props.loading || props.text}
    </button>
  );
};

export default BaseButton;