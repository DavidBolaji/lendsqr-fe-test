import React from 'react';
import  classes from './card.module.scss'

interface ICard {
    icon: string;
    title: string;
    value: string
}

const Card: React.FC<ICard> = ({ icon, title, value }) => {
  return (
    <div className={classes.card}>
      <div className={`${classes["card-icon"]}`}>
        <img src={icon} alt={title} />
      </div>
      <div className={`${classes["card-content"]}`}>
        <h3 className={`${classes["card-title"]}`}>{title}</h3>
        <p className={`${classes["card-value"]}`}>{value}</p>
      </div>
    </div>
  );
};

export default Card;
