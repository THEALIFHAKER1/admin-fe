"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SIDENAV_ITEMS } from "@/constant/constant"

import { siteConfig } from "@/config/site"

import { Icons } from "../icons/icons"
import { Button } from "../ui/button"
import MenuItem from "./MenuItem"

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storeValue = localStorage.getItem("sidebarExpanded")
      setExpanded(storeValue === "true")
    }
  }, [])

  const toggleExpanded = () => {
    const newExpandedValue = !expanded
    setExpanded(newExpandedValue)
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarExpanded", JSON.stringify(newExpandedValue))
    }
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
