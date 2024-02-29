import { Item } from "@radix-ui/react-dropdown-menu"

import MailComponent from "../../_components/mailcomponent"
import { mails } from "../../_data/data"

export default function Important() {
  const defaultLayout = [30, 80]
  return (
    <MailComponent
      defaultLayout={defaultLayout}
      mails={mails.filter((Item) => Item.labels.includes("important"))}
    />
  )
}
