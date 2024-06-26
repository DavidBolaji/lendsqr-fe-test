
// import EducationEmployment from '../education-employement/education-employement';
// import Guarantor from '../guarantor/guarantor';
// import PersonalInfo from '../personal-info/personal-info';
// import Socials from '../socials/socials';
import { AiOutlineUser } from 'react-icons/ai';
import './user-details.scss';
import { FaStar } from 'react-icons/fa';
// import Tabs from '../../tab/tab';


const UserDetail = () => {
  return (
   <div className='detail-cont'>
      <div className='personal-cont'>
        <div className='avatar'><AiOutlineUser /></div>
        <div className='name-cont'>
          <h2 className='name'>Grace Effiom</h2>
          <p className='id'>LSQFf587g90</p>
        </div>
        <div className='star-cont'>
          <h2 className='name'>User's Tier</h2>
          <div className='star'>
            <FaStar  />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className='balance-cont'>
          <h2 className='name'>₦200,000.00</h2>
          <p className='id'>9912345678/Providus Bank</p>
        </div>
      </div>
   </div>
  );
};

export default UserDetail;
