import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input, Label } from "../Common";


interface StartDateInputProps {
  placeholder: string
}

const StartDateInput: React.FC<StartDateInputProps> = ({
  placeholder
}) => {

  const {register} = useFormContext<{ startDate: string }>()

  return (
    <div className="w-full">
      <Label label="Start date"/>
      <Input
        placeholder={placeholder}
        type="date"
        {...register("startDate", {
          required: {
            value: true,
            message: "Start date is required"
          }
        })}
      />
    </div>
  );
};

export default StartDateInput