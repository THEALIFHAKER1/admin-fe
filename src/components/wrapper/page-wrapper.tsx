import { ReactNode } from "react"

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-4 mb-4 flex h-dvh w-[95dvw] flex-grow flex-col space-y-2 overflow-auto rounded-lg border border-foreground p-4 md:mb-4 md:mr-4 md:w-auto">
      {children}
    </div>
  )
}
