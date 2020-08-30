import Link from 'next/link'
import { Card } from './Card'
import { Title } from './Title'

export const TemplateSelection = () => {
  return (
    <>
      <Title>Select your template:</Title>
      <div className="flex mt-10 space-x-4 md:space-x-40">
        <div className="flex-1">
          <Link href="/cra">
            <div>
              <Card isHoverable>
                <div className="h-20 w-full mx-auto flex text-center items-center justify-center">
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
    </>
  )
}
