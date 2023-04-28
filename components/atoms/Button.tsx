import classNames from 'classnames'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={classNames('button', className)}>
      {children}
      <style jsx>{`
        .button {
          /* Your button styling here */
        }
      `}</style>
    </button>
  )
}

export default Button
