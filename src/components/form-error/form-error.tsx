
import React from 'react'
import { MdOutlineError } from 'react-icons/md'
import classes from './form-error.module.scss'

const FormError: React.FC<{
  msg: string
}> = ({ msg }) => {
  return (
    <div className={classes['form-cont']}>
      <div style={{
        marginTop: 5.5
      }}>
        <MdOutlineError color="#B3261E" />
      </div>
      <div className={classes.message}>{msg}</div>
    </div>
  )
}

export default FormError