import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl md:border border-black custom-bg", className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
