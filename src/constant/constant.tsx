import exp from "constants"
import { SideNavItem, Tab } from "@/types"

import { Icons } from "@/components/icons/icons"
import AllDrive from "@/app/main/(pages)/drive/components/alldrive/alldrive"
import MySpaces from "@/app/main/(pages)/drive/components/myspaces/myspaces"
import SharedSpaces from "@/app/main/(pages)/drive/components/sharedspaces/sharespaces"
import Starred from "@/app/main/(pages)/drive/components/starred/starred"
import TrashDrive from "@/app/main/(pages)/drive/components/trash/trash"
import { mails } from "@/app/main/(pages)/email/_data/data"
import AllMail from "@/app/main/(pages)/email/_pages/all/allmail"
import Draft from "@/app/main/(pages)/email/_pages/draft/draft"
import Important from "@/app/main/(pages)/email/_pages/important/important"
import Inbox from "@/app/main/(pages)/email/_pages/inbox/inbox"
import Sent from "@/app/main/(pages)/email/_pages/sent/sent"
import Spam from "@/app/main/(pages)/email/_pages/spam/spam"
import TrashEmail from "@/app/main/(pages)/email/_pages/trash/trash"

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Dashboard",
    path: "/main/dashboard",
    icon: <Icons.dashboard width="15" height="15" />,
  },
  {
    title: "Drive",
    path: "/main/drive",
    icon: <Icons.drive width="15" height="15" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/main/drive" },
      { title: "My Spaces", path: "/main/drive/MySpaces" },
      { title: "Shared Spaces", path: "/main/drive/SharedSpaces" },
      { title: "Starred", path: "/main/drive/Starred" },
      { title: "Trash", path: "/main/drive/Trash" },
    ],
  },
  {
    title: "Email",
    path: "/main/email",
    icon: <Icons.mail width="15" height="15" />,
    submenu: true,
    subMenuItems: [
      { title: "Inbox", path: "/main/email/inbox" },
      { title: "Sent", path: "/main/email/sent" },
      { title: "Drafts", path: "/main/email/drafts" },
      { title: "Trash", path: "/main/email/trash" },
    ],
  },
  {
    title: "Task",
    path: "/main/task",
    icon: <Icons.task width="15" height="15" />,
  },
]

export const EMAIL_TABS: Tab[] = [
  {
    value: "all",
    label: "All",
    component: <AllMail key={"all"} />,
    icon: <Icons.mail width="15" height="15" />,
  },
  {
    value: "inbox",
    label: "Inbox",
    component: <Inbox key={"inbox"} />,
    icon: <Icons.inbox width="15" height="15" />,
  },
  {
    value: "important",
    label: "Important",
    component: <Important key={"important"} />,
    icon: <Icons.important width="15" height="15" />,
  },
  {
    value: "sent",
    label: "Sent",
    component: <Sent key={"sent"} />,
    icon: <Icons.sent width="15" height="15" />,
  },
  {
    value: "draft",
    label: "Drafts",
    component: <Draft key={"draft"} />,
    icon: <Icons.draft width="15" height="15" />,
  },
  {
    value: "trash",
    label: "Trash",
    component: <TrashEmail key={"trash"} />,
    icon: <Icons.trash width="15" height="15" />,
  },
  {
    value: "spam",
    label: "Spam",
    component: <Spam key={"spam"} />,
    icon: <Icons.spam width="15" height="15" />,
  },
]

export const DRIVE_TABS: Tab[] = [
  {
    value: "all",
    label: "All",
    component: <AllDrive />,
    icon: <Icons.drive width="15" height="15" />,
  },
  {
    value: "mySpaces",
    label: "My Spaces",
    component: <MySpaces />,
    icon: <Icons.personal width="15" height="15" />,
  },
  {
    value: "sharedSpaces",
    label: "Shared Spaces",
    component: <SharedSpaces />,
    icon: <Icons.share width="15" height="15" />,
  },
  {
    value: "starred",
    label: "Starred",
    component: <Starred />,
    icon: <Icons.star width="15" height="15" />,
  },
  {
    value: "trash",
    label: "Trash",
    component: <TrashDrive />,
    icon: <Icons.trash width="15" height="15" />,
  },
]
