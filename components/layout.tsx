import { LayoutFooter } from "./layout/footer"
import { LayoutHeader } from "./layout/header"

type Props = {
  children: React.ReactNode
}

export default function Layout ({ children }: Props) {
  return (
    <>
      <LayoutHeader links={[
        {
          href: "/",
          label: "Home"
        },
        {
          href: "/example",
          label: "Example"
        }
      ]} />
      {children}
      <LayoutFooter />
    </>
  )
}
