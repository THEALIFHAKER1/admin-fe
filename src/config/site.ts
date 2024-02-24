import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "ADMIN FE",
  author: "THEALIFHAKER1",
  description:
    "TBA",
  keywords: [],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://ae1.pro",
  },
  links: {
    github: "https://github.com/THEALIFHAKER1/NEXT-INITIATE",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
