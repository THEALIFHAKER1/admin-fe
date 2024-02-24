import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Github,
  HardDrive,
  Home,
  LayoutList,
  LayoutPanelLeft,
  Loader,
  Mails,
  Moon,
  SunMedium,
} from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  logo: LayoutPanelLeft,
  sun: SunMedium,
  moon: Moon,
  bell: Bell,

  spinner: Loader,
  gitHub: Github,

  drive: HardDrive,
  dashboard: Home,
  mail: Mails,
  tasks: LayoutList,

  left: ChevronLeft,
  right: ChevronRight,
  up: ChevronUp,
  down: ChevronDown,
}

export const Icons: IconsType = icons
