import React from 'react'
import { CodeBlock } from '../../components/CodeBlock'
import { Section } from '../../components/Section'
import { PageHeader } from '../../components/PageHeader'

export default function PageCreateReactAppTypeScriptPrettier() {
  return (
    <div>
      <PageHeader>TypeScript &amp; Prettier</PageHeader>
      <Section title="Dependencies">
        <CodeBlock>
          {`npm install --save-dev eslint-config-react-app @typescript-eslint/eslint-plugin@^3.0.0 @typescript-eslint/parser@^3.0.0
babel-eslint@^10.0.0 eslint@^7.0.0 eslint-plugin-flowtype@^5.2.0 eslint-plugin-import@^2.22.0 eslint-plugin-jsx-a11y@^6.3.1
eslint-plugin-react@^7.20.3 eslint-plugin-react-hooks@^4.0.8
`}
        </CodeBlock>
      </Section>
      <Section title=".eslintrc.json">
        <CodeBlock isScrollable>
          {`module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app", // Uses the recommended rules Create React App
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Should be last in the list. Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  rules: {},
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};

`}
        </CodeBlock>
      </Section>
    </div>
  )
}
