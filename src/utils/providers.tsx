'use client'

import { UserContextProvider } from '@/utils/contexts'
import LogInWrapper from '@/components/LogInWrapper'
import Header from '@/components/Header'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserContextProvider>
      <LogInWrapper>
        <Header />
        {children}
      </LogInWrapper>
    </UserContextProvider>
  )
}
