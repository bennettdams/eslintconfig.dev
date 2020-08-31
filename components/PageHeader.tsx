import { Title } from './Title'

export const PageHeader: React.FC = ({ children }) => {
  return (
    <div className="page-header">
      <Title>{children}</Title>
    </div>
  )
}
