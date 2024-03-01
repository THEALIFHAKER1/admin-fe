"use client"

import { useState } from "react"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { Mail } from "../_data/data"
import { useMail } from "../_data/use-mail"
import { MailDisplay } from "./mail-display"
import { MailList } from "./mail-list"

interface MailProps {
  mails: Mail[]
  defaultLayout?: number[] | undefined
}

export default function MailComponent({ mails, defaultLayout }: MailProps) {
  const [mail] = useMail()
  const [filteredMails, setFilteredMails] = useState(mails)
  const SearchMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const filteredMails = mails.filter((mail) => {
      return (
        mail.subject.toLowerCase().includes(value.toLowerCase()) ||
        mail.date.toLowerCase().includes(value.toLowerCase()) ||
        mail.email.toLowerCase().includes(value.toLowerCase()) ||
        mail.text.toLowerCase().includes(value.toLowerCase()) ||
        mail.name.toLowerCase().includes(value.toLowerCase())
      )
    })
    setFilteredMails(filteredMails)
  }
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
                <Input
                  placeholder="Search email"
                  className="pl-8"
                  onChange={SearchMail}
                />
              </div>
            </form>
          </div>
          <div className=" h-full overflow-auto">
            <MailList items={filteredMails} />
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
