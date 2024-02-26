"use client"

import { useState } from "react"
import { EMAIL_TABS } from "@/constant/constant"

import { Button } from "@/components/ui/button"

export default function EmailPage() {
  const [activeTab, setActiveTab] = useState("all")

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <>
      <div className=" w-fit rounded-md bg-muted">
        {EMAIL_TABS.map((tab) => (
          <Button
            key={tab.value}
            variant="ghost"
            onClick={() => handleTabChange(tab.value)}
            className={`text-muted-foreground hover:bg-background/60 ${activeTab === tab.value && "bg-background/60 text-foreground"}`}
          >
            <p className="hidden md:block">{tab.label}</p>
            <p className="md:hidden">{tab.icon}</p>
          </Button>
        ))}
      </div>

      <>
        {EMAIL_TABS.map((tab) =>
          activeTab === tab.value ? tab.component : null
        )}
      </>
    </>
  )
}
