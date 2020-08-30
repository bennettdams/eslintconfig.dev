export const CodeBlock: React.FC<{ isScrollable?: boolean }> = ({
  children,
  isScrollable = false,
}) => {
  return (
    <div className="code-block shadow-lg px-20 py-10 bg-gray-800 font-mono text-gray-100 rounded-lg h-full w-full">
      <p
        className={`whitespace-pre` + ` ${isScrollable && 'overflow-x-scroll'}`}
      >
        {children}
      </p>
    </div>
  )
}
