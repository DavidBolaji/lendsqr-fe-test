import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Wrapper from '../../components/wrapper/wrapper';
import Navigation from '../../components/navigation/navigation';
import classes from './dashboard-layout.module.scss';
import { FaHome, FaRegHandshake, FaUserCheck, FaUsers } from 'react-icons/fa';
import { PiBriefcaseDuotone, PiCaretDownBold } from 'react-icons/pi';
import { MdSavings } from 'react-icons/md';
import { FaHandHoldingDollar, FaSackDollar, FaUserGroup, FaX } from 'react-icons/fa6';
import { useScreen } from '../../hooks/useScreen';

const navigationItems = [
  { name: 'Users', path: '/dashboard/users', icon: <FaUserGroup size={15} /> },
  { name: 'Guarantors', path: '/guarantors', icon: <FaUsers size={15} /> },
  { name: 'Loans', path: '/loans', icon: <FaSackDollar size={15} /> },
  { name: 'Decision Models', path: '/decision-models', icon: <FaRegHandshake size={15} />},
  { name: 'Savings', path: '/savings', icon: <MdSavings size={15} /> },
  { name: 'Loan Requests', path: '/loan-requests', icon:<FaHandHoldingDollar size={15} /> },
  { name: 'Whitelist', path: '/whitelist', icon: <FaUserCheck size={15} /> },
  { name: 'Karma', path: '/karma', icon: '☯️' },
];



const DashboardLayout = () => {
  const [activeItem, setActiveItem] = useState('/dashboard/users');
  const [open, setOpen] = useState(false);
  const screen = useScreen()

  const handleDrawer = () => setOpen(prev => !prev);

  return (
    <Wrapper>
      <div className={classes.mainOne}>
        <Navigation toggle={handleDrawer} />
        <div className={classes.main}>
          <div className={`${classes.sidebar} ${screen === "small" && classes.mobile} ${open && classes.visible}`}>
            <div className={`${classes.close} ${screen === "small" && classes.mobile}`} onClick={handleDrawer}><FaX size={16} /></div>
            <ul className={classes['nav-list']}>
              <li style={{ marginBottom: '3.2rem' }} className={classes['title']}>
                <NavLink to={'#'}>
                  <div className={classes.icon} style={{ marginTop: '0.3rem' }}>
                    <PiBriefcaseDuotone size={18} />
                  </div>
                  <div className={`${classes.name} ${classes.organization}`} style={{ marginTop: '0.5rem' }}>
                    Switch Organization
                  </div>
                  <div className={classes.caret}>
                    <PiCaretDownBold />
                  </div>
                </NavLink>
              </li>

              <li style={{ marginBottom: '2rem' }} className={'/dashboard' === activeItem ? classes.active : ''}>
                <NavLink to={'#'} onClick={() => setActiveItem('/dashboard')}>
                  <div className={classes.icon} style={{ marginTop: '0.4rem' }}>
                    <FaHome />
                  </div>
                  <div className={`${classes.name} work-sans-regular`}>Dashboard</div>
                </NavLink>
              </li>

              <li style={{ marginBottom: '-1.2rem' }} className={classes['title']}>
                <NavLink to={'#'}>
                  <div className={`${classes.name} work-sans-regular`}>CUSTOMERS</div>
                </NavLink>
              </li>

              {navigationItems.map((item) => (
                <li key={item.path} className={item.path === activeItem ? classes.active : ''}>
                  <NavLink to={'#'} onClick={() => setActiveItem(item.path)}>
                    <span className={classes.icon}>{item.icon}</span>
                    <span className={classes.name}>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${classes.page} ${classes.mobile}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DashboardLayout;
