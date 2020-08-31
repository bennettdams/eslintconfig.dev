import { GitHubIcon } from './GitHubIcon'
import { Card } from './Card'

export const ContributeButton = () => {
  return (
    <div className="absolute" style={{ top: 40, right: 40 }}>
      <Card isHoverable>
        <div className="p-4">
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
        </div>
      </Card>
    </div>
  )
}
