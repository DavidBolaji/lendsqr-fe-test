import {  HTMLAttributes } from 'react'
import classes from './title.module.scss'

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
    text: string
}

const Title:React.FC<ITitle> = ({text, className, ...rest}) => {
  return (
    <h2 className={`${classes.text} ${className}`} {...rest}>{text}</h2>
  )
}

export default Title