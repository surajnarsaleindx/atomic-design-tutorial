import Form from '@/components/molecules/Form'

interface HeaderProps {
  onFormSubmit: (value: string) => void
}

const Header: React.FC<HeaderProps> = ({ onFormSubmit }) => {
  return (
    <header>
      <h1>My App</h1>
      <Form onSubmit={onFormSubmit} />
    </header>
  )
}

export default Header
