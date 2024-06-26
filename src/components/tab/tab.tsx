import  { ReactNode, useState } from 'react';
import './tab.scss';
import PersonalInfo from '../details-dashboard/personal-info/personal-info';
import EducationEmployment from '../details-dashboard/education-employement/education-employement';
import Socials from '../details-dashboard/socials/socials';
import Guarantor from '../details-dashboard/guarantor/guarantor';
import { FaEnvelope } from 'react-icons/fa';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    'General Details', 
    'Documents', 
    'Bank Details', 
    'Loans', 
    'Savings', 
    'App and System'
  ];

  const content: { [key: string]: ReactNode } = {
    'General Details': <>
    <PersonalInfo />
    <EducationEmployment />
    <Socials />
    <Guarantor />
    </>,
    'Documents': <div className='flex'><FaEnvelope /></div>,
    'Bank Details': <div className='flex'><FaEnvelope /></div>,
    'Loans': <div className='flex'><FaEnvelope /></div>,
    'Savings': <div className='flex'><FaEnvelope /></div>,
    'App and System': <div className='flex'><FaEnvelope /></div>,
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
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
          >
            {tab}
          </div>
        ))}
        <div className="border" style={{ width: `${tabWidth}%`, left: `${activeTab * tabWidth}%` }} />
      </div>
      <div className="tab-content">
        {content[tabs[activeTab]]}
      </div>
    </div>
  );
};

export default Tabs;
