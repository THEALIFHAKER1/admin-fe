"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SideNavItem } from "@/types"

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

export default MenuItem
