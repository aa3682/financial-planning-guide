import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

const REPO_URL = 'https://github.com/aa3682/financial-planning-guide'

export const metadata = {
  title: {
    default: 'Financial Planning Guide – AlignFlow',
    template: '%s – AlignFlow'
  },
  description:
    'An open, plain-English guide to personal financial planning, organized around the planning process.'
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={<Navbar logo={<b>AlignFlow · Financial Planning Guide</b>} projectLink={REPO_URL} />}
          footer={<Footer>{new Date().getFullYear()} © AlignFlow</Footer>}
          docsRepositoryBase={`${REPO_URL}/blob/main`}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
