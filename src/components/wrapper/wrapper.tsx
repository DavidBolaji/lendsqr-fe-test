import React, { PropsWithChildren } from 'react'
import classes from './wrapper.module.scss'

const Wrapper:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={`${classes.wrapper} no-s`}>{children}</div>
  )
}

export default Wrapper