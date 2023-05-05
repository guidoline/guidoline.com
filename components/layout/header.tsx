import Navigation from "./navigation"

const links = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/example",
    label: "Example"
  },
  {
    href: "/no-ressource",
    label: "Not found"
  }
]

export function Header() {
  const showMenu = links.length>0
  return (
    <header>
      <pre>HEADER</pre>
      { showMenu && <Navigation links={links} /> }
    </header>
  )
}
