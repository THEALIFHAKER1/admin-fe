export type SiteConfig = {
  name: string
  author: string
  description: string
  keywords: Array<string>
  url: {
    base: string
    author: string
  }
  links: {
    github: string
  }
  ogImage: string
}

export type SideNavItem = {
  title: string
  path: string
  icon?: JSX.Element
  submenu?: boolean
  subMenuItems?: SideNavItem[]
}

export type Tab = {
  value: string
  label: string
  icon?: JSX.Element
  component: JSX.Element
}
