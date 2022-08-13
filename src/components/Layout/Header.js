import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meal-img2.jpg';
import classes from './Header.module.css';

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MyMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A serving of a delicious plate of dinner" />
      </div>
    </React.Fragment>
  );
};

export default Header;
