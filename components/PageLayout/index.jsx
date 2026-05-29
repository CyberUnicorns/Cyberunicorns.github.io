import dynamic from 'next/dynamic'
import Head from 'next/head'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import { BackToTop } from '../BackToTop'

const VisualEffects = dynamic(
  () => import('../VisualEffects').then((mod) => mod.VisualEffects),
  { ssr: false }
)

export function PageLayout({ children, description }) {
  return (
    <>
      <Head>
        <title>Cybercorns</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <NavBar />
      <VisualEffects />
      <main className="site-main">{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
