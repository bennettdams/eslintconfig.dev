export const PageHeader: React.FC = ({ children }) => {
  return (
    <div className="page-header">
      <h2 className="text-xl text-center">{children}</h2>
    </div>
  )
}
