import { IMAGES } from '../../assets';
import LoginForm from '../../components/forms/login-form';
import classes from './login-page.module.scss';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link  type="description" content='Sign up or log in to manage your loan and lending APIs with ..s' />
        <title>Login</title>
      </Helmet>
      <div className={classes.cont}>
        <div className={classes.left}>
          <div className={classes.logo}>
            <img src={IMAGES.Logo} alt="logo" />
          </div>
          <div className={classes['sign-in']}>
            <img src={IMAGES.SignIn} alt="logo" />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes['right_cont']}>
            <h1 className={`font-bold text-blue ${classes.heading}`}>
              Welcome!
            </h1>
            <p className={`text-ash font-regular ${classes.para}`}>
              Enter details to login
            </p>
            <LoginForm />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default LoginPage;
