import { addDays, addHours, format, nextSaturday } from "date-fns"
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  Grip,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Mail } from "../_data/data"
import MailTools from "./mailtools"
import ReplayTools from "./replaytools"

interface MailDisplayProps {
  mail: Mail | null
}

export function MailDisplay({ mail }: MailDisplayProps) {
  return (
    <div className="flex h-full flex-col">
      {mail ? (
        <>
          <div className="flex items-center p-2">
            <MailTools mail={mail} />
            <ReplayTools mail={mail} />
          </div>
          <Separator />
          <div className="flex flex-1 flex-col">
            <div className="flex items-start p-4">
              <div className="flex items-start gap-4 text-sm">
                <Avatar>
                  <AvatarImage alt={mail.name} />
                  <AvatarFallback>
                    {mail.name
                      .split(" ")
                      .map((chunk) => chunk[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">{mail.name}</div>
                  <div className=" text-xs">{mail.subject}</div>
                  <div className=" text-xs">
                    <span className="font-medium">Reply-To:</span> {mail.email}
                  </div>
                </div>
              </div>
              {mail.date && (
                <>
                  <div className="ml-auto whitespace-nowrap text-xs text-muted-foreground">
                    {format(new Date(mail.date), "PP")}
                    <br />
                    {format(new Date(mail.date), "pp")}
                  </div>
                </>
              )}
            </div>
            <Separator />
            <div className="line-clamp-2 h-full overflow-auto whitespace-pre-wrap p-4 text-sm">
              {mail.text}
            </div>
            <Separator className="mt-auto" />
            <div className="p-4">
              <form>
                <div className="grid gap-4">
                  <Textarea
                    className="p-4"
                    placeholder={`Reply ${mail.name}...`}
                  />
                  <div className="flex items-center">
                    <Label
                      htmlFor="mute"
                      className="flex items-center gap-2 whitespace-nowrap text-xs font-normal"
                    >
                      <Switch id="mute" aria-label="Mute thread" />
                      Mute this thread
                    </Label>
                    <Button
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                      className="ml-auto"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="grid h-full place-items-center p-8  text-center text-muted-foreground">
          Select an email to read
        </div>
      )}
    </div>
  )
}
