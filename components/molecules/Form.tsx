import { useState } from 'react'
import Button from '@/components/atoms/Button'

interface FormProps {
  onSubmit: (value: string) => void
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  )
}

export default Form
