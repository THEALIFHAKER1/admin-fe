import { TooltipProvider } from "@radix-ui/react-tooltip"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { MailDisplay } from "./components/mail-display"
import { MailList } from "./components/mail-list"
import { Mail } from "./data"
import { useMail } from "./use-mail"

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout?: number[] | undefined
  // defaultCollapsed?: boolean
  // navCollapsedSize: number
}

export default function AllMail({ mails, defaultLayout }: MailProps) {
  const [mail] = useMail()
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full items-stretch overflow-auto "
      >
        <ResizablePanel
          defaultSize={defaultLayout?.[0] ?? 0}
          className="h-full overflow-auto"
        >
          <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
          </div>
          <div className=" h-full overflow-auto">
            <MailList items={mails} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout?.[1] ?? 0} className="">
          <div className=" h-full overflow-auto ">
            <MailDisplay
              mail={mails.find((item) => item.id === mail.selected) || null}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}
