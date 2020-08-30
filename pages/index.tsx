import Head from 'next/head'
import { TemplateSelection } from '../components/TemplateSelection'
import { Section } from '../components/Section'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>eslintconfig.dev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Section>
        <TemplateSelection />
      </Section>
    </main>
  </>
)

export default Home
