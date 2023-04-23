import {CosmWasmClient} from "@cosmjs/cosmwasm-stargate";
import {ChainInfo} from "../wallet/chains";
import {CONTRACT_ADDRESS} from "./conf";


export async function getStream(id: Number){
    try {
        let cwClient = await CosmWasmClient.connect(ChainInfo.rpc);
        let entrypoint = {
            get_stream: {
                id: id
            }
        };
        return await cwClient.queryContractSmart(CONTRACT_ADDRESS, entrypoint);
    } catch (e) {
        console.log("getStream error:", e)
        return "error"
    }
}

export async function getIds(addr: String){
    try {
        let cwClient = await CosmWasmClient.connect(ChainInfo.rpc);
        let entrypoint = {
            get_ids: {
                addr: addr
            }
        };
        let r = await cwClient.queryContractSmart(CONTRACT_ADDRESS, entrypoint);
        return r.ids
    } catch (e) {
        console.log("getStream error:", e)
        return "error"
    }
}