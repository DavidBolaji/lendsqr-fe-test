import React from 'react';
import classes from './card.module.scss';
import { IMAGES } from '../../assets';

interface ICard {
  icon?: string;
  title?: string;
  value?: string;
}

const Card: React.FC<ICard> = ({
  icon = `${IMAGES.UserWithSavings}}`,
  title = 'Users',
  value = '20000',
}) => {
  return (
    <div className={classes.card}>
      <div className={`${classes['card-icon']}`}>
        <img src={icon} alt={title} />
      </div>
      <div className={`${classes['card-content']}`}>
        <h3 className={`${classes['card-title']}`}>{title}</h3>
        <p className={`${classes['card-value']}`}>{value}</p>
      </div>
    </div>
  );
};

export default Card;
