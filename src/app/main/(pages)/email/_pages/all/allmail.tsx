import MailComponent from "../../_components/mailcomponent"
import { mails } from "../../_data/data"

export default function AllMail() {
  const defaultLayout = [30, 80]
  return <MailComponent defaultLayout={defaultLayout} mails={mails} />
}
