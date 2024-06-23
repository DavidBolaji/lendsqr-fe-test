
import React from 'react'
import { ErrorMessage, useFormikContext } from 'formik'
import InputComponent, { IInput } from './input-component'
import FormError from '../form-error/form-error'
// import FormError from '../form-error/form-error'

const StyledInput: React.FC<IInput> = ({ name, ...rest }) => {
  const {
    getFieldProps,
    handleBlur,
    handleChange,
  } = useFormikContext()

  const fieldProps = getFieldProps(name!)
  if (!fieldProps) {
    return null
  }


  return (
    <div className="">
       <ErrorMessage name={name!}>
        {(msg) => <FormError msg={msg} />}
      </ErrorMessage>
      <InputComponent
        name={name}
        {...rest}
      
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {name === "password" && (
        <p
        style={{
          margin: "2.4rem auto",
          fontSize: "1.2rem",
          color: "#39cdcc",
          marginLeft: "0.2rem",
          textTransform: "uppercase",
          fontWeight: 500
        }}
        >Forgot password?</p>
      )} 
     
    </div>
  )
}

export default StyledInput
