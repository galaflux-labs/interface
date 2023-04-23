import React, { FC } from 'react';

interface Props {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const BaseButton: FC<Props> = (props) => {
  return (
    <button onClick={props.onClick}
            className="rounded-lg text-white bg-orange-400 hover:bg-orange-500 w-full p-3">
      {props.text}
    </button>
  );
};

export default BaseButton;