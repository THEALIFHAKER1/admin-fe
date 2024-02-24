import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  HardDrive,
  Home,
  LayoutList,
  LayoutPanelLeft,
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
