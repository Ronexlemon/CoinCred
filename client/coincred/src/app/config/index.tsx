import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { liskSepolia } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = "a354850f4268cf041c5c0ba35d69e4ae"

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [liskSepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
//   ...wagmiOptions // Optional - Override createConfig parameters
})