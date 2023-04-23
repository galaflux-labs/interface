import { createContext, FC, PropsWithChildren, useContext } from 'react'
import { useKeplerWalletState, KeplrWallet } from "./wallet";

const CosmWasmContext = createContext<KeplrWallet>({
  connect: () => Promise.reject("Kepler wallet not found"),
  disconnect: () => {
    console.error("Kepler wallet not found")
  },
  loading: false,
  error: null,
  state: null
})

export const useKeplerWallet = () => useContext(CosmWasmContext)

export const KeplerWalletProvider: FC<PropsWithChildren<{}>> = ({children}) => {
  const wallet = useKeplerWalletState()

  return (
    <CosmWasmContext.Provider value={wallet}>
      {children}
    </CosmWasmContext.Provider>
  )
}