import { ReactNode } from "react"

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode
}) {
  return <div className="flex h-dvh flex-col">{children}</div>
}
