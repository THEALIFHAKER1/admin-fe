import {
  ArrowUpDown,
  Bell,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronUp,
  Circle,
  EyeOff,
  Github,
  HardDrive,
  HelpCircle,
  Home,
  LayoutList,
  LayoutPanelLeft,
  Loader,
  Mails,
  Moon,
  MoreHorizontal,
  PlusCircle,
  SlidersHorizontal,
  SunMedium,
  Timer,
  X,
  XCircle,
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
  task: LayoutList,

  left: ChevronLeft,
  doubleLeft: ChevronsLeft,
  right: ChevronRight,
  doubleRight: ChevronsRight,
  up: ChevronUp,
  down: ChevronDown,

  sort: ArrowUpDown,
  hide: EyeOff,
  check: Check,
  plus: PlusCircle,
  dotsHorizontal: MoreHorizontal,
  cross: X,
  crossCircle: XCircle,
  mixer: SlidersHorizontal,
  circle: Circle,
  checkCircle: CheckCircle,
  stopWatch: Timer,
  question: HelpCircle,
}

export const Icons: IconsType = icons
