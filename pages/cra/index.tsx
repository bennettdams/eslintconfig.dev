import React from 'react'
import Link from 'next/link'
import { Card } from '../../components/Card'
import { TemplateSelection } from '../../components/TemplateSelection'
import { Section } from '../../components/Section'
import { Title } from '../../components/Title'

export default function PageCreateReactApp() {
  return (
    <>
      <Section>
        <TemplateSelection />
      </Section>
      <Section>
        <Title>Select your setup:</Title>

        <div className="flex mt-10 space-x-4 md:space-x-40">
          <div className="flex-1">
            <Link href="/cra/typescript-prettier">
              <div>
                <Card isHoverable>
                  <div className="h-20 w-full mx-auto flex items-center justify-center">
                    <a>TypeScript &amp; Prettier</a>
                  </div>
                </Card>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <Link href="/cra/typescript">
              <div>
                <Card isNotAllowed>
                  <div className="h-20 w-full mx-auto flex items-center justify-center">
                    <a>TypeScript</a>
                  </div>
                </Card>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <Link href="/cra/javascript-prettier">
              <div>
                <Card isHoverable>
                  <div className="h-20 w-full mx-auto flex items-center justify-center">
                    <a>JavaScript &amp; Prettier</a>
                  </div>
                </Card>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <Link href="/cra/JavaScript">
              <div>
                <Card isNotAllowed>
                  <div className="h-20 w-full mx-auto flex items-center justify-center">
                    <a>JavaScript</a>
                  </div>
                </Card>
              </div>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
