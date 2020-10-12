import React from 'react'
import { CodeBlock } from '../../components/CodeBlock'
import { Section } from '../../components/Section'
import { PageHeader } from '../../components/PageHeader'

export default function PageCreateReactAppTypeScriptPrettier() {
  return (
    <div className="animate-fade-in">
      <PageHeader>TypeScript &amp; Prettier</PageHeader>
      <Section title="Dependencies">
        <CodeBlock isScrollable>
          {`npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier`}
        </CodeBlock>
      </Section>
      <Section title=".eslintrc.js">
        <CodeBlock isScrollable>
          {`module.exports = {
  extends: [
    "react-app", // create-react-app base settings
    "eslint:recommended", // recommended eslint rules
    "plugin:@typescript-eslint/recommended", // recommended typescript rules
    "prettier/@typescript-eslint", // disables typescript formatting rules
    "plugin:prettier/recommended", // disables eslint formatting rules and uses prettier (must be last)
  ],
  rules: {},
};

`}
        </CodeBlock>
      </Section>
    </div>
  )
}
