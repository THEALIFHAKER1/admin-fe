import { SideNavItem } from "@/types"
import { Icon } from "@iconify/react"

import { Icons } from "@/components/icons/icons"

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
  // {
  //   title: "Projects",
  //   path: "/projects",
  //   icon: <Icon icon="lucide:folder" width="15" height="15" />,
  //   submenu: true,
  //   subMenuItems: [
  //     { title: "All", path: "/projects" },
  //     { title: "Web Design", path: "/projects/web-design" },
  //     { title: "Graphic Design", path: "/projects/graphic-design" },
  //   ],
  // },
  // {
  //   title: "Messages",
  //   path: "/messages",
  //   icon: <Icon icon="lucide:mail" width="15" height="15" />,
  // },
  // {
  //   title: "Settings",
  //   path: "/settings",
  //   icon: <Icon icon="lucide:settings" width="15" height="15" />,
  //   submenu: true,
  //   subMenuItems: [
  //     { title: "Account", path: "/settings/account" },
  //     { title: "Privacy", path: "/settings/privacy" },
  //   ],
  // },
  // {
  //   title: "Help",
  //   path: "/help",
  //   icon: <Icon icon="lucide:help-circle" width="15" height="15" />,
  // },
]
