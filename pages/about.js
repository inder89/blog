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
          Hi, my name is Inder and this blog is just my notes while I learn some deep JS concepts.
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