import React, {FC, useCallback, useState} from 'react';
import { BaseButton } from "../../components/Buttons";
import { mint } from "../../api/set";
import { useKeplrWallet } from "../../wallet";
import CustomAlert from "../../components/Animation/Alert";

const Faucet: FC = () => {

    const [loading, setLoading] = useState(false)

    const wallet = useKeplrWallet()

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

    const faucet = () => {
        setLoading(true)
        mint(wallet.state?.walletAddress, wallet.state?.signingClient, wallet.state?.gasPrice)
        .then((r) => {
            console.log("Res:", r)
            alert("+100 TEST TOKENS", false)
            setLoading(false)
        }).catch((e) => {
            console.log(e)
            if (e.toString().startsWith("Error: Account does not exist on chain.")){
                alert("Get gas tokens first: Use Archway Discord faucet", true)
            } else {
                alert("Failed to claim", true)
            }
            setLoading(false)
        })
    }

    return (
        <div className="flex items-center justify-center h-full/2">
            {showAlert ? (
                <div className="absolute top-10 right-10">
                    <CustomAlert msg={alertMsg} isError={isAlertError} />
                </div>
            ) : (
                <></>
            )}
            <div className="w-[600px] p-8 rounded-2xl ring-1 ring-gray-300 bg-white">
                <div className="flex flex-col justify-center gap-4 w-full mb-8">
                    <div className="text-center">
                        <span className={"font-bold text-lg underline"}>Faucet</span>
                    </div>
                    <div className="justify-center flex py-20">
                        <BaseButton text="Get 100 $TEST (CW20)"
                                    onClick={faucet}
                                    disabled={loading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faucet;