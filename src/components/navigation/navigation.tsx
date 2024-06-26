import { FaBell, FaCaretDown, FaHamburger } from 'react-icons/fa';
import { IMAGES } from '../../assets';
import Search from '../search/search';
import classes from './navigation.module.scss';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const Navigation: FC<{ toggle: () => void }> = ({ toggle }) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.caret} onClick={toggle}>
        <FaHamburger />
      </div>
      <div className={classes.img}>
        <img src={IMAGES.Logo} className={classes['img-img']} alt="logo" />
      </div>
      <div className={classes.search}>
        <Search />
      </div>
      <div className={classes.not}>
        <div className={classes['notification-cont']}>
          <div className={classes.link}>
            <Link to={'#'}>Docs</Link>
          </div>
          <div className={classes.svg}>
            <FaBell />
          </div>
          <div className={classes['nav-end']}>
            <div className={classes['avatar-cont']}>
              <div className={classes.avatar}>
                <img src={IMAGES.Avatar} alt="avatar" />
              </div>
              <span className={classes.name}>Adedeji</span>
              <FaCaretDown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
