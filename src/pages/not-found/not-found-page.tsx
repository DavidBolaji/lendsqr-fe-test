import React from 'react';
import classes from './not-found-page.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>404 Page Not Found</h1>
      <p className={classes.message}>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
