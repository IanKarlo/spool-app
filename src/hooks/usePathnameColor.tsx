import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'expo-router'
import type { Colors } from '@/themes'
import { type TabColor, tabColors } from '@/themes/tabColors'

type PathnameColorContextType = {
  tabColor: Colors | undefined
}

const PathnameColorContext = createContext<PathnameColorContextType | undefined>(
  undefined
)

const DEFAULT_COLOR = 'gray'

const getColorFromPathname = (pathname: string): Colors => {
  const [,main, tab] = pathname.split('/')
  if (main && tab) {
    const path = `/${main}/${tab}` as TabColor
    return tabColors[path] || DEFAULT_COLOR
  }
  return DEFAULT_COLOR
}

export function PathnameColorProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [tabColor, setTabColor] = useState<Colors>(DEFAULT_COLOR)

  useEffect(() => {
    setTabColor(getColorFromPathname(pathname))
  }, [pathname])

  return (
    <PathnameColorContext.Provider value={{ tabColor }}>
      {children}
    </PathnameColorContext.Provider>
  )
}

export function usePathnameColor() {
  const context = useContext(PathnameColorContext)
  if (context === undefined) {
    throw new Error('usePathnameColor must be used within a PathnameColorProvider')
  }
  return {...context, tabColor: context.tabColor || DEFAULT_COLOR}
}
