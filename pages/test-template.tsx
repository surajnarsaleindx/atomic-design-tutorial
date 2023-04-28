// src/pages/index.tsx
import type { NextPage } from 'next'
import MainTemplate from '@/components/templates/MainTemplate'

const HomePage: NextPage = () => {
  const handleFormSubmit = (value: string) => {
    console.log('Form submitted with value:', value)
  }

  return (
    <MainTemplate onFormSubmit={handleFormSubmit}>
      <h2>This is the test-page with MainTemplate</h2>
    </MainTemplate>
  )
}

export default HomePage
