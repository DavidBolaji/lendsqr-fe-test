import React, { ButtonHTMLAttributes } from 'react'
import classes from './custom-button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | React.ReactNode
  }

const CustomButton:React.FC<IButton> = ({text, className, ...rest}) => {
  return (
    <button
      className={`${classes.btn} ${rest.disabled && classes.disabled} ${className}`}
      type="button"
      {...rest}
    >
      <span
      >
        {text}
      </span>
    </button>
  )
}

export default CustomButton