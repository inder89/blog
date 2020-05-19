import Head from 'next/head'
import Header from './Header'
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
      <section className="col-fill col margin">
        <Header />
        <div className={styles.container}>{children}</div>
        <div className="push"></div>
      </section>
     
      <footer className="row flex-bottom">
        <p className="article-meta sm-6 col">Built by me!</p>
      </footer>
    </>
  )
}