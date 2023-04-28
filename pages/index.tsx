// src/pages/index.tsx
import type { NextPage } from 'next'
import MainTemplate from '@/components/templates/MainTemplate'

const HomePage: NextPage = () => {
  const handleFormSubmit = (value: string) => {
    console.log('Form submitted with value:', value)
  }

  return (
    <MainTemplate onFormSubmit={handleFormSubmit}>
      <h2>Welcome to our application!</h2>
      <p>Use the form in the header to submit a value.</p>
    </MainTemplate>
  )
}

export default HomePage
