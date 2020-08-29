import Head from 'next/head'
import Link from 'next/link'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>eslintconfig.dev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <p className="text-center">Select your framework:</p>

      <div className="flex">
        <div className="flex-1">
          <Link href="/react">
            <a>React</a>
          </Link>
        </div>
        <div className="flex-1">
          <Link href="/nextjs">
            <a>Next.js</a>
          </Link>
        </div>
        <div className="flex-1">
          <Link href="/vue">
            <a>Vue</a>
          </Link>
        </div>
      </div>
    </main>
  </>
)

export default Home
