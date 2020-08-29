import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/index.css'
import Link from 'next/link'
import { Footer } from '../components/Footer'

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-blue-900 text-gray-300 min-h-screen h-full w-full">
      <div className="flex flex-col items-center justify-center mx-auto py-20 min-h-full h-64 w-full">
        <div className="flex-1">
          <Link href="/">
            <a>
              <h1 className="text-4xl">eslintconfig.dev ⚙️📋</h1>
            </a>
          </Link>
        </div>
        <div className="flex-1">
          <h2 className="italic text-gray-600">
            Skip reading a new Medium article every 2 months
          </h2>
        </div>
      </div>
      <div className="container px-32 min-h-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
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
