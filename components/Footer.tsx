import { GitHubIcon } from './GitHubIcon'

export const Footer: React.FC = () => {
  return (
    <footer className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-sm text-gray-500">Created with</span>
          <span className="ml-3 text-sm text-gray-500">
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js,
            </a>
          </span>
          <span className="ml-3 text-sm text-gray-500">
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </a>
          </span>
          <span className="ml-3 text-sm text-gray-500">
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              and Tailwind CSS
            </a>
          </span>
        </div>
        <div className="flex text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          <span>© 2020 eslintconfig.dev —</span>
          <div className="ml-3 inline-block">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </div>
          <span className="text-gray-500 ml-1">
            <a
              href="https://twitter.com/bennettdams"
              target="_blank"
              rel="noopener noreferrer"
            >
              @bennettdams
            </a>
          </span>
          <div className="ml-3 inline-block">
            <GitHubIcon />
          </div>
          <span className="text-gray-500 ml-1">
            <a
              href="https://github.com/bennettdams/eslintconfig.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
