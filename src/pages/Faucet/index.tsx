import {FC, useState} from 'react';
import {BaseButton} from "../../components/Buttons";
import {mint} from "../../api/set";
import {useKeplerWallet} from "../../wallet";

const Faucet: FC = () => {

    const [loading, setLoading] = useState(false)

    const wallet = useKeplerWallet()

    const faucet = () => {
        setLoading(true)
        mint(wallet.state?.walletAddress, wallet.state?.signingClient, wallet.state?.gasPrice).then((r) => {
            console.log("Res:", r)
            setLoading(false)
        })
    }

    return (
        <div className="flex items-center justify-center h-full/2">
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