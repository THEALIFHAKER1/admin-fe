"use client"

import React, { ChangeEvent, useState } from "react"
import { DRIVE_TABS } from "@/constant/constant"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CurrentPage from "@/components/navigation/currentpage"

export default function DrivePage() {
  const [activeTab, setActiveTab] = useState("all")

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <div>
      <div
        onChange={(event: ChangeEvent<HTMLDivElement>) =>
          handleTabChange((event.target as HTMLInputElement).value)
        }
      >
        <Tabs defaultValue={activeTab}>
          <div className="flex items-center justify-between text-center align-middle">
            <TabsList>
              {DRIVE_TABS.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  <p className="hidden md:block">{tab.label}</p>
                  <p className="md:hidden">{tab.icon}</p>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="w-full p-1 sm:hidden">
              <CurrentPage />
            </div>
          </div>
          {DRIVE_TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.component}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
