import { TooltipProvider } from "@radix-ui/react-tooltip"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { MailDisplay } from "./mail-display"
import { MailList } from "./mail-list"
import { Mail } from "../_data/data"
import { useMail } from "../_data/use-mail"

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout?: number[] | undefined
}

export default function Mail({ mails, defaultLayout }: MailProps) {
  const [mail] = useMail()
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
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
