import React from 'react';

export type ReactInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


const Input = React.forwardRef<HTMLInputElement, ReactInputProps>(
  (props, ref
  ) => {
    const {children, ...inputProps} = props

    return (
      <div className="flex flex-col justify-start w-full font-thin">
        <div className="items-center inline-flex gap-3 w-full">
          <div className={
            "ring-gray-300 ring-[1px] hover:ring-gray-600 font-light " +
            "focus-within:hover:ring-orange-300 focus-within:ring-orange-300 focus-within:ring-2 " +
            "w-full flex transition-all rounded-lg overflow-hidden"
          }
          >
            <input ref={ref}
                   className="w-full outline-none border-0 focus:ring-0 bg-transparent p-3"
                   {...inputProps}
            />
          </div>
          {children}
        </div>
      </div>
    );
  });

export default Input;