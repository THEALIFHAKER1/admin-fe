import { Forward, Indent, Reply, ReplyAll } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Mail } from "../_data/data"

interface ReplaytoolsProps {
  mail: Mail | null
}

function ReplayTools({ mail }: ReplaytoolsProps) {
  const menuItems = [
    { icon: Reply, label: "Replay" },
    { icon: ReplyAll, label: "Replay all" },
    { icon: Forward, label: "Forward" },
  ]
  return (
    <>
      <div className="ml-auto flex items-center gap-2 sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Indent />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex">
            {menuItems.map((item) => (
              <DropdownMenuItem key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" disabled={!mail}>
                      <item.icon className="h-4 w-4" />
                      <span className="sr-only">{item.label}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{item.label}</TooltipContent>
                </Tooltip>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="ml-auto hidden items-center gap-2 sm:flex">
        {menuItems.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!mail}>
                <item.icon className="h-4 w-4" />
                <span className="sr-only">{item.label}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </>
  )
}

export default ReplayTools
