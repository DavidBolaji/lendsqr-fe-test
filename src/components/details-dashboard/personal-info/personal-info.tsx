import { FC } from 'react';
import { IUser } from '../../../api/fetch-users';
import Heading, { Info } from '../root-component';
import './personal-info.scss';

const PersonalInfo: FC<Partial<IUser>> = ({
  fname,
  lname,
  email,
  bvn,
  gender,
  children,
  phoneNumber,
  maritalStatus
}) => {
  return (
    <section className="personal-info">
      <Heading
        text="Personal Information"
        style={{
          marginBottom: '3rem',
        }}
      />
      <div className="p-info-cont">
        <Info title={`FULL NAME`} text={`${fname} ${lname}`} />
        <Info title="PHONE NUMBER" text={phoneNumber!} />
        <Info title="Email Address" text={email!} />
        <Info title="BVN" text={String(bvn)!} />
        <Info title="GENDER" text={gender!} />
        <Info title="Marital status" text={maritalStatus!} />
        <Info title="Children" text={!children ? 'None' : String(children)!} />
        <Info title="Type of residence" text={"Parent's Apartment"} />
      </div>
    </section>
  );
};

export default PersonalInfo;
