import { useState } from 'react'

export const CodeBlock: React.FC<{
  isScrollable?: boolean
}> = ({ children, isScrollable = false }) => {
  const [isHovered, setIsHovered] = useState<boolean>()
  const [isClicked, setIsClicked] = useState<boolean>()

  const handleClick = () => {
    setIsClicked(true)
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(children.toString())
  }

  return (
    <div
      className="code-block shadow-lg bg-gray-800 font-mono text-gray-100 rounded-lg h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {(isHovered || isClicked) && (
        <div
          className="float-left p-2 m-2 cursor-pointer rounded-md bg-gray-600"
          onClick={handleCopyClick}
          title="copy"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="text-gray-200 "
          >
            <path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z" />
          </svg>
        </div>
      )}
      <div className="px-8 md:px-20 py-10">
        <p
          className={`whitespace-pre` + ` ${isScrollable && 'overflow-x-auto'}`}
        >
          {children}
        </p>
      </div>
    </div>
  )
}
