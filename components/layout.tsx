import { LayoutFooter } from "./layout/footer"
import { LayoutHeader } from "./layout/headed"

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
        }
      ]} />
      {children}
      <LayoutFooter />
    </>
  )
}
