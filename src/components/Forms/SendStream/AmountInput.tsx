import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input, Label } from "../Common";


interface AmountInputProps {
  placeholder: string
}

const AmountInput: React.FC<AmountInputProps> = ({
  placeholder
}) => {

  const {register} = useFormContext<{ amount: string }>()

  return (
    <div>
      <Label label="Amount to send"/>
      <Input
        placeholder={placeholder}
        type="number"
        {...register("amount", {
          required: {
            value: true,
            message: "Amount is required"
          }
        })}
      />
    </div>
  );
};

export default AmountInput