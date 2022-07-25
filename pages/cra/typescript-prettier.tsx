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
    "react-app", // Create React App base settings
    "eslint:recommended", // recommended ESLint rules
    "plugin:@typescript-eslint/recommended", // recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display Prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {},
};

`}
        </CodeBlock>
      </Section>
    </div>
  )
}
