import Head from 'next/head'
import Header from './Header'
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

const name = 'Inder'
export const siteTitle = 'Next.js Blog'

export default function Layout({ children, home, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <Header />
        <div className={styles.container}>{children}</div>
        <div className="push"></div>
      </section>
     
      <footer className="footer">Built by me!</footer>
    </>
  )
}