import { ReactNode } from "react"

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 mr-4 flex h-dvh flex-grow flex-col space-y-2 overflow-auto rounded-lg border-2 border-foreground p-4">
      {children}
    </div>
  )
}
