import { calculateFee, GasPrice } from "@cosmjs/stargate";
import { CONTRACT_ADDRESS, FAUCET_ADDRESS, TOKEN_ADDRESS } from "./conf";
import { Buffer } from "buffer";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

interface CreateStreamParams {
    ownerAddress: string
    signingClient: SigningCosmWasmClient
    gasPrice: GasPrice
    startDate: number
    endDate: number
    amount: string
    receiver: string
    streamImmediately: boolean
}

interface WithdrawParams {
    walletAddress: string | undefined
    signingClient: SigningCosmWasmClient | undefined
    gasPrice: GasPrice  | undefined
    streamId: number
}


export async function createStream(params: CreateStreamParams) {
    try {
        const code = Buffer.from(JSON.stringify({
            'create_stream': {
                'recipient': params.receiver,
                'start_time': params.streamImmediately ? 0 : params.startDate,
                'end_time': params.endDate
            }
        })).toString('base64')

        const entrypoint = {
            send: {
                contract: CONTRACT_ADDRESS,
                amount: params.amount,
                msg: code
            }
        };
        let txFee = calculateFee(500000, GasPrice.fromString("0.002uconst"));

        return await params.signingClient.execute(params.ownerAddress, TOKEN_ADDRESS, entrypoint, txFee);
    } catch (e) {
        return Promise.reject(e)
    }
}

export async function withdraw(params: WithdrawParams) {
    if (params.walletAddress === undefined || params.gasPrice === undefined || params.signingClient === undefined){
        return Promise.reject()
    }
    try {
        let entrypoint = {
            withdraw: {
                id: params.streamId
            }
        };
        let txFee = calculateFee(500000, params.gasPrice);

        return await params.signingClient.execute(params.walletAddress, CONTRACT_ADDRESS, entrypoint, txFee);
    } catch (e) {
        console.log(e)
        return Promise.reject()
    }
}

export async function mint(userAddress: string | undefined, signingClient: any, gasPrice: any) {
    try {
        let entrypoint = {
            withdraw: {
            }
        };
        let txFee = calculateFee(500000, gasPrice);

        return await signingClient.execute(userAddress, FAUCET_ADDRESS, entrypoint, txFee);
    } catch (e) {
        return Promise.reject(e)
    }
}