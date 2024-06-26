import { Field, Form, Formik } from 'formik';
import StyledInput from '../input/styled-input';
import * as Yup from 'yup';
import CustomButton from '../button/custom-button';
import classes from './login-form.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loader from '../loader/loader';

const initilaValues = {
  email: '',
  password: '',
};

export type ILogin = {
  email: string;
  password: string;
};

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Please enter a valid email address',
    )
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password cannot be less than 8 charcters')
    .required('Password is required'),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async () => {
    setLoading(true);

    const t = setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
      clearTimeout(t);
    }, 5000);
  };

  return (
    <Formik
      initialValues={initilaValues}
      onSubmit={onSubmit}
      validationSchema={loginSchema}
      enableReinitialize
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className={classes['login-form']}>
          <div>
            <Field
              name="email"
              as={StyledInput}
              placeholder="Email"
              type={'email'}
              text={'Email'}
            />
          </div>
          <div>
            <Field
              name="password"
              as={StyledInput}
              placeholder="Password"
              type={'password'}
              password={true}
              text={'Password'}
            />
          </div>
          <div>
            <CustomButton disabled={loading} text={loading ? <Loader style={{
              width: 20,
              height: 20
            }} /> : 'Log In'} type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
