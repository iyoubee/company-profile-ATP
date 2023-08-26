'use client'
import React, { createContext, useContext } from 'react'
import { ContextProviderProps, LanguageContextValue } from './interface'
import { usePathname } from 'next/navigation'

const LanguageContext = createContext({} as LanguageContextValue) // TODO: Declare interface of contextValue

export const useLanguageContext = () => useContext(LanguageContext)

export const LanguageContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const path = usePathname()

  const pathSplited = path.split('/')

  const language = pathSplited[1] == 'en' ? 'en' : 'id'

  const currentPath = path.slice(3)

  const contextValue = { language, currentPath }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}
