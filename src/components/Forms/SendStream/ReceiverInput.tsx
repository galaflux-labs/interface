import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input, Label } from "../Common";


interface ReceiverInputProps {
  placeholder: string,
  maxLength?: number
}

const ReceiverInput: React.FC<ReceiverInputProps> = ({
  placeholder,
  maxLength = 10
}) => {

  const {register} = useFormContext<{ receiver: string }>()

  return (
    <div>
      <Label label="Archway receiver address"/>
      <Input
        placeholder={placeholder}
        {...register("receiver", {
          required: {
            value: true,
            message: "Receiver address is required"
          },
          maxLength: {
            value: maxLength,
            message: `Receiver address must be less than ${maxLength} characters`
          }
        })}
      />
    </div>
  );
};

export default ReceiverInput