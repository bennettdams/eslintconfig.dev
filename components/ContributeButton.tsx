import { GitHubIcon } from './GitHubIcon'

export const ContributeButton = () => {
  return (
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
  )
}
