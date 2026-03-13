import React from "react"
import { LoadingState } from './loading-state'

interface PageWrapperProps {
  children: React.ReactNode
  isLoading?: boolean
}

export function PageWrapper({ children, isLoading = false }: PageWrapperProps) {
  if (isLoading) {
    return <LoadingState />
  }

  return <>{children}</>
}
