/**
 * Layout princiaple
 *
 * Note: Des templates peuvent également être utiliser pour s'intercaler entre
 * le layout et les pages.
 * Cela permet d'utiliser des animations de transission.
 * cf. https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates
 */
import { Suspense } from "react"
import { Footer } from "../components/layout/footer"
import { Header } from "../components/layout/header"
import "./global.css"
import Loading from "./loading"

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props ) {
  return (
    <html lang="fr">
      <head />
      <body>
        <Header />
        {/* <Suspense fallback={<Loading />}> */}
          {children}
        {/* </Suspense> */}
        <Footer />
      </body>
    </html>
  )
}
