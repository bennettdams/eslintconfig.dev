import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/index.css'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import Head from 'next/head'
import { GitHubIcon } from '../components/GitHubIcon'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-orange-800 text-gray-300 min-h-screen h-full w-full font-sans">
        <div className="flex flex-col items-center justify-center mx-auto py-10 min-h-full h-64 w-full">
          <div className="absolute" style={{ top: 40, right: 40 }}>
            <button className="text-blue-800 bg-blue-200 rounded-md p-4 shadow-md">
              <a
                href="https://github.com/bennettdams/eslintconfig.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <GitHubIcon />
                  <span className="ml-3">Contribute</span>
                </p>
              </a>
            </button>
          </div>
          <div className="flex-1">
            <Link href="/">
              <a>
                <h1 className="text-4xl text-center">⚙️📋</h1>
                <h1 className="text-4xl hover:text-orange-500">
                  eslintconfig.dev
                </h1>
              </a>
            </Link>
          </div>
          <div className="flex-1">
            <h2 className="italic text-gray-600">
              Skip reading a new blog post every 2 months
            </h2>
          </div>
        </div>
        <div className="container px-64 mb-40 min-h-screen min-w-full">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App
