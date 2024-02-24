import MarginWidthWrapper from "@/components/wrapper/margin-width-wrapper"
import PageWrapper from "@/components/wrapper/page-wrapper"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex">
        <main className="flex-1">
          <MarginWidthWrapper>
            <div className="m-4 flex h-dvh flex-grow flex-col space-y-2 overflow-auto rounded-lg border-2 border-foreground p-4">
              {children}
            </div>
          </MarginWidthWrapper>
        </main>
      </div>
    </div>
  )
}
