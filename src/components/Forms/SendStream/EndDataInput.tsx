import React from 'react';
import { useFormContext } from "react-hook-form";
import { Input, Label } from "../Common";


interface EndDateInputProps {
  placeholder: string
}

const EndDateInput: React.FC<EndDateInputProps> = ({
  placeholder
}) => {

  const {register} = useFormContext<{ endDate: string }>()

  return (
    <div className="w-full">
      <Label label="End date"/>
      <Input
        placeholder={placeholder}
        type="date"
        {...register("endDate", {
          required: {
            value: true,
            message: "End date is required"
          }
        })}
      />
    </div>
  );
};

export default EndDateInput