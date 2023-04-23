import { calculateFee, GasPrice } from "@cosmjs/stargate";
import {CONTRACT_ADDRESS, FAUCET_ADDRESS, TOKEN_ADDRESS} from "./conf";
import { Buffer } from "buffer";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";


export async function createStream(
  userAddress: string,
  signingClient: SigningCosmWasmClient,
  gasPrice: GasPrice,
  startDate: number,
  endDate: number,
  amount: string,
  receiver: string
) {
    try {
        let code = Buffer.from(JSON.stringify({
            "create_stream": {
                "recipient": receiver,
                "start_time": startDate,
                "end_time": endDate
            }
        })).toString('base64')
        let entrypoint = {
            send: {
                contract: CONTRACT_ADDRESS,
                amount: amount,
                msg: code
            }
        };
        let txFee = calculateFee(500000, GasPrice.fromString("0.002uconst"));

        return  await signingClient.execute(userAddress, TOKEN_ADDRESS, entrypoint, txFee);
    } catch (e) {
        console.log('Error', e);
        return false
    }
}

export async function withdraw(userAddress: string, signingClient: any, gasPrice: any, id: number) {
    try {
        let entrypoint = {
            withdraw: {
                id
            }
        };
        let txFee = calculateFee(500000, gasPrice);

        let tx = await signingClient.execute(userAddress, CONTRACT_ADDRESS, entrypoint, txFee);
        return true
    } catch (e) {
        console.log('Error', e);
        return false
    }
}

export async function mint(userAddress: string | undefined, signingClient: any, gasPrice: any) {
    try {
        let entrypoint = {
            withdraw: {
            }
        };
        let txFee = calculateFee(500000, gasPrice);

        let tx = await signingClient.execute(userAddress, FAUCET_ADDRESS, entrypoint, txFee);
        return true
    } catch (e) {
        console.log('Error', e);
        return false
    }
}