import Navbar from "../navigation/menu"
import settingsNavigation from "../../content/settings/navigation.json"
import Link from "next/link"

const linksMain = settingsNavigation.main
const linksSecondary = settingsNavigation.secondary

export function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      { linksMain.length>0 && <Navbar links={linksMain} /> }
      { linksSecondary.length>0 && <Navbar links={linksSecondary} /> }
    </header>
  )
}
