import { AiOutlineUser } from 'react-icons/ai';
import './user-details.scss';
import { FaStar } from 'react-icons/fa';
import { FC } from 'react';
import { IUser } from '../../../api/fetch-users';


const UserDetail:FC<{user: Partial<IUser>}> = ({user}) => {
  return (
   <div className='detail-cont'>
      <div className='personal-cont'>
        <div className='avatar'><AiOutlineUser /></div>
        <div className='name-cont'>
          <h2 className='name'>{user.fname} {user.lname}</h2>
          <p className='id'>{user.bvn}</p>
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
          <h2 className='name'>₦{new Intl.NumberFormat('NGN').format(user!.amount as unknown as number)}</h2>
          <p className='id'>9912345678/Providus Bank</p>
        </div>
      </div>
   </div>
  );
};

export default UserDetail;
