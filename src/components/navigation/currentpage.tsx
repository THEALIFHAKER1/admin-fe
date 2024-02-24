import { usePathname } from "next/navigation"

export default function CurrentPage() {
  const page = usePathname().replace("/main/", "").replace("/", " > ")

  return (
    <span className="w-full text-nowrap font-bold uppercase text-foreground">
      {page}
    </span>
  )
}
