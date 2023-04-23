import { FC, useState } from 'react';
import { useForm } from "react-hook-form";
import { SendStreamSubmitProps } from "./types";


const SendStreamForm: FC = () => {

  const [submitProps, setSubmitProps] = useState<SendStreamSubmitProps>()

  const methods = useForm<SendStreamSubmitProps>({
    mode: "onChange",
    defaultValues: {
      receiver: "",
      amount: "",
      cliff: "",
      startDate: "",
      endDate: ""
    }
  })

  return (
    <div>
      SendStreamForm
    </div>
  );
};

export default SendStreamForm;