import { Item } from "@radix-ui/react-dropdown-menu"

import MailComponent from "../../_components/mailcomponent"
import { mails } from "../../_data/data"

export default function Sent() {
  const defaultLayout = [30, 80]
  return (
    <MailComponent defaultLayout={defaultLayout} mails={mails.filter(Item)} />
  )
}
