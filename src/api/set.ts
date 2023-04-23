import {calculateFee} from "@cosmjs/stargate";
import {CONTRACT_ADDRESS, TOKEN_ADDRESS} from "./conf";


export async function createStream(userAddress: String, signingClient: any, gasPrice: any,
                                   startDate: Number, endDate: Number, amount: String, receiver: String) {
    try {
        let code = Buffer.from(JSON.stringify({
            "create_stream": {
                "recipient": receiver,
                "start_time": startDate,
                "end_time": endDate
            }
        })).toString('base64')
        console.log(code)
        let entrypoint = {
            send: {
                contract: CONTRACT_ADDRESS,
                amount: amount,
                msg: code
            }
        };
        let txFee = calculateFee(500000, gasPrice);

        let tx = await signingClient.execute(userAddress, TOKEN_ADDRESS, entrypoint, txFee);
        return true
    } catch (e) {
        console.log('Error', e);
        return false
    }
}

export async function withdraw(userAddress: String, signingClient: any, gasPrice: any, id: Number) {
    try {
        let entrypoint = {
            withdraw: {
                id: id
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