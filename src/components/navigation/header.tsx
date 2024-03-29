"use client"

import React from "react"
import { useSelectedLayoutSegment } from "next/navigation"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import { cn } from "@/lib/utils"
import useScroll from "@/hooks/use-scroll"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import { ModeToggle } from "../theme/mode-toggle"
import { Button } from "../ui/button"
import CurrentPage from "./currentpage"
import Notification from "./notification"
import UserMenu from "./usermenu"

const Header = () => {
  const scrolled = useScroll(5)
  const selectedLayout = useSelectedLayoutSegment()

  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])
  return (
    <>
      <div
        className={cn(
          `sticky inset-x-0 top-0 z-30  w-full bg-background transition-all`,
          {
            " border-b-2 border-foreground backdrop-blur-lg": scrolled,
            // "border-b border-blue-700 bg-white": selectedLayout,
          }
        )}
      >
        <div className="flex h-[60px] items-center justify-between space-x-2 pl-2 pr-4 sm:px-4">
          <div className="hidden w-3 items-center space-x-4 sm:flex">
            <CurrentPage />
          </div>
          <div className="flex w-full items-center sm:justify-center">
            <Button
              className=" flex h-full w-full justify-between rounded-md border border-foreground bg-background text-sm text-muted-foreground focus-visible:ring-0 sm:w-1/3"
              onClick={() => setOpen(true)}
            >
              <p>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  Search
                </kbd>
              </p>
              <p className="">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>J
                </kbd>
              </p>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex rounded-md border border-foreground">
              <Notification />
              <ModeToggle />
            </div>
            <UserMenu />
          </div>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default Header
