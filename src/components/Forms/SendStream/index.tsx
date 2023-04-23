import { FC, useCallback } from 'react';
import { FormProvider, useForm } from "react-hook-form";
import { SendStreamSubmitProps } from "./types";
import ReceiverInput from "./ReceiverInput";
import AmountInput from "./AmountInput";
import { ArchwayIcon, ArchwayNameIcon } from "../../Icons";
import StartDateInput from "./StartDateInput";
import EndDateInput from "./EndDataInput";
import { BaseButton } from "../../Buttons";
import StartNowToggle from "./StartNowToggle";
import { createStream } from "../../../api/set";
import { useKeplerWallet } from "../../../wallet";
import { BN } from "bn.js"
import TokenInput from "./TokenInput";


const SendStreamForm: FC = () => {

  const methods = useForm<SendStreamSubmitProps>({
    mode: "onChange",
    defaultValues: {
      receiver: "",
      amount: "",
      startDate: "",
      endDate: ""
    }
  })

  const wallet = useKeplerWallet()

  const {handleSubmit} = methods

  const [startDate, endDate] = methods.watch(["startDate", "endDate"])

  const startDateTimestamp = new Date(startDate).getTime()
  const endDateTimestamp = new Date(endDate).getTime()

  const onSubmit = useCallback(handleSubmit(fields => {
    const startDateTimestamp = Math.floor(new Date(fields.startDate).getTime() / 1000)
    const endDateTimestamp = Math.floor(new Date(fields.endDate).getTime() / 1000)
    const amount = new BN(fields.amount).mul(new BN(10).pow(new BN(18))).toString()

    if (!wallet.state) {
      return
    }

    createStream(
      wallet.state.walletAddress,
      wallet.state.signingClient,
      wallet.state.gasPrice,
      startDateTimestamp,
      endDateTimestamp,
      amount,
      fields.receiver
    ).then(console.log)
  }), [wallet, handleSubmit])

  if (!wallet.state) {
    return <div>Wallet not connected</div>
  }

  return (
    <FormProvider {...methods}>
      <div className="w-[600px] p-8 rounded-2xl ring-1 ring-gray-300 bg-white">
        <div className="flex flex-col justify-center gap-4 w-full mb-8">
          <span className="text-xl flex gap-3 items-center justify-end">
            <ArchwayIcon size={30} />
            <ArchwayNameIcon height={30} width={100} />
          </span>
          <ReceiverInput placeholder="satoshi.archway" />
          <TokenInput/>
          <AmountInput placeholder="0.0" />
          <div className="flex flex-row gap-4 w-full justify-between">
            <StartDateInput placeholder={new Date().toLocaleDateString()} />
            <EndDateInput placeholder={new Date().toLocaleDateString()} />
          </div>
          <StartNowToggle />
        </div>
        <BaseButton text="Create stream"
                    disabled={
                      !methods.formState.isValid
                      || methods.formState.isSubmitting
                      || methods.formState.isSubmitted
                      || startDateTimestamp > endDateTimestamp
                    }
                    onClick={onSubmit}
        />
      </div>
    </FormProvider>
  );
};

export default SendStreamForm;