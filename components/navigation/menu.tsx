"use client"
// Note: `use client` permet d'exploiter `usePathname`
// Documentation :
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating

import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./menu.module.css"

type Props = {
  links: LinkType[]
}

export default function Menu({ links }: Props) {
  const pathname = usePathname()
  return (
    <>{
      links.map((link) => {
        const isActive = link.href !== "/" && pathname.startsWith(link.href)
        const classe = `${styles.link} ${isActive && styles["link-active"]}`
        return (
          <Link
            className={ classe }
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        )
      })
    }</>
  )
}
