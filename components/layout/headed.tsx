import Link from "next/link"

type Props = {
  // cf. /types/global.ts
  links: Link[]
}

export function LayoutHeader({ links }: Props) {
  const showMenu = links.length>0
  const menu = links.map((link, key) => {
    return <Link key={key} href={link.href}>{link.label}</Link>
  })
  return (
    <header>
      <pre>HEADER</pre>
      { showMenu&& <nav>{menu}</nav> }
    </header>
  )
}
