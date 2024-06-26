import React, { ButtonHTMLAttributes } from 'react'
import classes from './custom-button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | React.ReactNode
  }

const CustomButton:React.FC<IButton> = ({text, className, disabled = false, ...rest}) => {
  return (
    <button
      className={`${classes.btn} ${className} ${disabled && classes.disabled}`}
      type="button"
      {...rest}
      disabled={disabled}
    >
      <span
      >
        {text}
      </span>
    </button>
  )
}

export default CustomButton