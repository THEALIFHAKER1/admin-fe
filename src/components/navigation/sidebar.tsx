"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SIDENAV_ITEMS } from "@/constant/constant"
import { SideNavItem } from "@/types"
import { Icon } from "@iconify/react"

import { siteConfig } from "@/config/site"

import { Icons } from "../icons/icons"
import { Button } from "../ui/button"

export default function Sidebar() {
  const [expanded, setExpanded] = useState(() => {
    const storedValue = localStorage.getItem("sidebarExpanded")
    return storedValue ? JSON.parse(storedValue) : false
  })

  useEffect(() => {
    localStorage.setItem("sidebarExpanded", JSON.stringify(expanded))
  }, [expanded])

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div
      className={`relative hidden h-dvh flex-col  md:flex ${expanded ? "w-52" : "w-16"}`}
    >
      <div className="flex flex-col">
        <div
          className={`flex w-full px-4 ${expanded && "pl-[1.15rem]"} py-4 ${expanded ? "" : "justify-center"}`}
        >
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 text-center align-middle"
          >
            <Icons.logo className="h-7 w-7" />
            {expanded && (
              <span className="flex text-sm font-bold sm:text-xl">
                {siteConfig.name}
              </span>
            )}
          </Link>
        </div>
        <div className="space-y-2 px-2">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} expanded={expanded} />
          })}
        </div>
      </div>
      <div className="absolute right-[-15px] top-[0.6rem]">
        <Button
          onClick={toggleExpanded}
          variant={"ghost"}
          className=" p-2 hover:bg-transparent"
        >
          {expanded ? (
            <Icons.left width="24" height="24" />
          ) : (
            <Icons.right width="24" height="24" />
          )}
        </Button>
      </div>
    </div>
  )
}

const MenuItem = ({
  item,
  expanded,
}: {
  item: SideNavItem
  expanded: boolean
}) => {
  const pathname = usePathname()
  return (
    <div className="">
      <Link
        href={item.path}
        className={`flex h-[40px] flex-row items-center space-x-2 rounded-lg py-2 ${expanded && "px-[1.15rem]"} hover:bg-foreground hover:text-background ${
          item.path === pathname && "bg-foreground font-bold text-background"
        }
          ${!expanded && "justify-center"}`}
      >
        {item.icon}
        {expanded && <span className="flex">{item.title}</span>}
      </Link>
    </div>
  )
}
