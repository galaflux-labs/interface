import { FC, useCallback, useState } from 'react';
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
import { BN } from "bn.js"
import TokenInput from "./TokenInput";
import { KeplerWalletState } from "../../../wallet/wallet";
import bigDecimal from "js-big-decimal";
import CustomAlert from "../../Animation/Alert";

const SendStreamForm: FC<KeplerWalletState> = (props) => {

  const methods = useForm<SendStreamSubmitProps>({
    mode: "onChange",
    defaultValues: {
      receiver: "",
      amount: "",
      startDate: "",
      endDate: "",
      streamImmediately: false
    }
  })

  const {handleSubmit, reset} = methods

  const [startDate, endDate] = methods.watch(["startDate", "endDate"])

  const [showAlert, setShowAlert] = useState(false)
  const [isAlertError, setIsAlertError] = useState(true)
  const [alertMsg, setAlertMsg] = useState("Error")

  const alert = useCallback((msg: string, isErr: boolean) => {
    setIsAlertError(isErr)
    setAlertMsg(msg)
    setShowAlert(true)
    setTimeout(function () {
      setShowAlert(false)
    }, 4000)
  }, [setIsAlertError, setAlertMsg, setShowAlert])

  const startDateTimestamp = new Date(startDate).getTime()
  const endDateTimestamp = new Date(endDate).getTime()

  const onSubmit = useCallback(handleSubmit(fields => {
    console.log("onSubmit")
    const startDateTimestamp = Math.floor(new Date(fields.startDate).getTime() / 1000)
    const endDateTimestamp = Math.floor(new Date(fields.endDate).getTime() / 1000)
    const amount = new bigDecimal(fields.amount).multiply(new bigDecimal(new BN(10).pow(new BN(18)).toString())).floor().getValue()

    const promise = createStream({
      gasPrice: props.gasPrice,
      ownerAddress: props.walletAddress,
      signingClient: props.signingClient,
      amount: amount,
      receiver: fields.receiver,
      startDate: startDateTimestamp,
      endDate: endDateTimestamp,
      streamImmediately: fields.streamImmediately
    })

    promise
    .then(tx => {
      alert("Stream created successfully", false)
      methods.reset({
        receiver: "",
        amount: "",
        startDate: "",
        endDate: "",
        streamImmediately: false
      })
    })
    .catch((e) => {
      if (e.toString().startsWith("Error: Account does not exist on chain.")){
        alert("Not enough funds: Use Archway Discord faucet ", true)
      } else {
        alert("Error while creating a stream", true)
      }
    })

  }), [props, alert, methods])

  return (
    <FormProvider {...methods}>
      {showAlert && (
        <div className="absolute top-10 right-10">
          <CustomAlert msg={alertMsg} isError={isAlertError} />
        </div>
      )}
      <div className="w-[600px] p-8 rounded-2xl ring-1 ring-gray-300 bg-white">
        <div className="flex flex-col justify-center gap-4 w-full mb-8">
          <span className="text-xl flex gap-3 items-center justify-end">
            <ArchwayIcon size={30} />
            <ArchwayNameIcon height={30} width={100} />
          </span>
          <ReceiverInput placeholder="satoshi.archway" />
          <TokenInput />
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
                      || startDateTimestamp > endDateTimestamp
                    }
                    onClick={onSubmit}
        />
      </div>
    </FormProvider>
  );
};

export default SendStreamForm;