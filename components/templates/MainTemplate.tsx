import React from 'react'
import Header from '@/components/organisms/Header'

interface MainTemplateProps {
  onFormSubmit: (value: string) => void
  children: React.ReactNode
}

const MainTemplate: React.FC<MainTemplateProps> = ({ onFormSubmit, children }) => {
  return (
    <div>
      <Header onFormSubmit={onFormSubmit} />
      <main>{children}</main>
    </div>
  )
}

export default MainTemplate
