"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SIDENAV_ITEMS } from "@/constant/constant"

export default function MobileBar() {
  const pathname = usePathname()

  return (
    <div className=" mx-4 mb-4 flex items-center justify-center rounded-xl border border-foreground bg-background p-5 md:hidden ">
      <div className="flex space-x-6">
        {SIDENAV_ITEMS.map((item, idx) => {
          return (
            <div key={idx}>
              <Link
                href={item.path}
                className={`flex h-[40px] w-[40px] flex-row items-center justify-center space-x-2 rounded-lg py-2 hover:bg-foreground hover:text-background ${
                  item.path === pathname &&
                  "bg-foreground font-bold text-background"
                }`}
              >
                {item.icon}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
