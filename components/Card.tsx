interface CardProps {
  isHoverable?: boolean
  isNotAllowed?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  isHoverable = false,
  isNotAllowed = false,
}) => {
  return (
    <div
      className={
        `bg-blue-200 text-blue-800 rounded-lg shadow-md` +
        ` ${isHoverable && 'hover:bg-blue-300 cursor-pointer'}` +
        ` ${isNotAllowed && 'hover:bg-blue-300 cursor-not-allowed'}`
      }
    >
      {children}
    </div>
  )
}
