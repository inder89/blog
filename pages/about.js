import Layout from '../components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h3 className="article-title">Welcome to my blog!</h3>
        <p className="description">
          {description}
        </p>

        <p>
          Hi, my name is Inder and I am a JavaScript Developer based in Melbourne, Australia. 
          This blog is just personal ramblings written in markdown as I learn deep JavaScript concepts. 
          It's built in Next.js and deployed to Vercel and I use PaperCSS for the stylings just because that explains the nature of this blog perfectly. Handwritten scribbles which might become actual content someday.
        </p>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    },
  }
}