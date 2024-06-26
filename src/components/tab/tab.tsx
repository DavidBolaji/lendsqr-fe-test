import { FC, ReactNode, useState, useRef } from 'react';
import './tab.scss';
import PersonalInfo from '../details-dashboard/personal-info/personal-info';
import EducationEmployment from '../details-dashboard/education-employement/education-employement';
import Socials from '../details-dashboard/socials/socials';
import Guarantor from '../details-dashboard/guarantor/guarantor';
import { FaEnvelope } from 'react-icons/fa';
import { IUser } from '../../api/fetch-users';

const Tabs: FC<{ user: Partial<IUser> }> = ({ user }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<HTMLDivElement[]>([]);

  const tabs = [
    'General Details',
    'Documents',
    'Bank Details',
    'Loans',
    'Savings',
    'App and System',
  ];

  const {
    fname,
    lname,
    email,
    bvn,
    gender,
    children,
    phoneNumber,
    maritalStatus,
    education,
    sector,
    empDuration,
    employmentStatus,
    oEmail,
    loan,
    amount,
    guarantor,
    relationship,
  } = user;

  const content: { [key: string]: ReactNode } = {
    'General Details': (
      <>
        <PersonalInfo
          {...{
            fname: fname!,
            lname: lname!,
            email: email!,
            bvn: bvn!,
            gender: gender!,
            children: children!,
            phoneNumber: phoneNumber!,
            maritalStatus: maritalStatus!,
          }}
        />
        <EducationEmployment
          {...{
            education,
            oEmail,
            sector,
            empDuration,
            employmentStatus,
            loan,
            amount,
          }}
        />
        <Socials
          {...{
            twitter: `@${fname}_${lname}`,
            facebook: `${fname} ${lname}`,
            instagram: `@${fname}_${lname}`,
          }}
        />
        <Guarantor
          {...{
            ...guarantor,
            email: email!,
            relationship: relationship!,
            phone: phoneNumber!,
          }}
        />
      </>
    ),
    Documents: (
      <div className="flex">
        <FaEnvelope />
      </div>
    ),
    'Bank Details': (
      <div className="flex">
        <FaEnvelope />
      </div>
    ),
    Loans: (
      <div className="flex">
        <FaEnvelope />
      </div>
    ),
    Savings: (
      <div className="flex">
        <FaEnvelope />
      </div>
    ),
    'App and System': (
      <div className="flex">
        <FaEnvelope />
      </div>
    ),
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    tabRefs.current[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };

  const tabWidth = 100 / tabs.length;

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
            style={{ width: `${tabWidth}%` }}
            ref={(el) => (tabRefs.current[index] = el!)}
          >
            {tab}
          </div>
        ))}
        <div
          className="border"
          style={{ width: `${tabWidth}%`, left: `${activeTab * tabWidth}%` }}
        />
      </div>
      <div className="tab-content">{content[tabs[activeTab]]}</div>
    </div>
  );
};

export default Tabs;
