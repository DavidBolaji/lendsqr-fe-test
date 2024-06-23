import React from 'react'
import classes from './tag.module.scss'

const Tag:React.FC<{value: string, text: string}> = ({value, text}) => {
  return (
    <div className={classes[value]}>{text}</div>
  )
}

export default Tag