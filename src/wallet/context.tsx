import { createContext, FC, PropsWithChildren, useContext } from 'react'
import { KeplrWallet, useKeplrConfiguration } from "./wallet";

const KeplrWalletContext = createContext<KeplrWallet>({
  connect: () => Promise.reject("Keplr wallet not found"),
  disconnect: () => {
    console.error("Keplr wallet not found")
  },
  isConnecting: false,
  state: null

})

export const useKeplrWallet = () => useContext(KeplrWalletContext)

export const KeplrWalletProvider: FC<PropsWithChildren<{}>> = ({children}) => {
  const wallet = useKeplrConfiguration()

  return (
    <KeplrWalletContext.Provider value={wallet}>
      {children}
    </KeplrWalletContext.Provider>
  )
}