import Layout from "../components/layout"

type Params={
  params: {
    slug: string
  }
}

type Props = {
  // page data
  // contentHTML
}

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking"
    }
  }

  // 1. Récupérer les slugs des pages
  // 2. Construire les routes à partir des pages
  const pages: any[]=[] // <- type à modifier

  return {
    paths: pages.map(p => ({params: { slug: p.slug }})),
    fallback: false
  }
}

export async function getStaticProps({ params }: Params) {
  // 1. Récupérer la page à partir du param slig de route
  // 2. si null alors throw 404
  // construire les props

  if (params.slug !== 'example') return { notFound: true }

  return {
    props: {}
  }
}

export default function Page() {
  return (
    <Layout>
      <main>
        <pre>EXEMPLE DE PAGE</pre>
      </main>
    </Layout>
  )
}
