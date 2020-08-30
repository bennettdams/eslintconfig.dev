import Head from 'next/head'
import Link from 'next/link'
import { Card } from '../components/Card'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>eslintconfig.dev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h2 className="text-xl text-center font-bold">Select your template:</h2>

      <div className="flex mt-20 space-x-40">
        <div className="flex-1">
          <Link href="/cra">
            <div>
              <Card isHoverable>
                <div className="h-20 w-full mx-auto flex items-center justify-center">
                  <a>Create React App</a>
                </div>
              </Card>
            </div>
          </Link>
        </div>
        <div className="flex-1">
          <Link href="/nextjs">
            <div>
              <Card isNotAllowed>
                <div className="h-20 w-full mx-auto flex items-center justify-center">
                  <a>Next.js</a>
                </div>
              </Card>
            </div>
          </Link>
        </div>
        <div className="flex-1">
          <Link href="/vue">
            <div>
              <Card isNotAllowed>
                <div className="h-20 w-full mx-auto flex items-center justify-center">
                  <a>Vue</a>
                </div>
              </Card>
            </div>
          </Link>
        </div>
      </div>
    </main>
  </>
)

export default Home
