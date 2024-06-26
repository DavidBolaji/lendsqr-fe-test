import { FC } from 'react';
import Heading, { Info } from '../root-component';
import './guarantor.scss';
import { Guarantor as IGuarantor } from '../../../api/fetch-users';

const Guarantor:FC<Partial<IGuarantor> & {relationship: string; phone: string; email: string}>  = ({fname, lname, relationship, phone, email}) => {
  return (
    <section className="guarantor-info">
      <Heading
        text="Guarantor"
        style={{
          marginBottom: '3rem',
        }}
      />
      <div className="g-info-cont">
        <Info title="Full Name" text={`${fname} ${lname}`} />
        <Info title="PHONE NUMBER" text={phone} />
        <Info title="Email Address" text={email} />
        <Info title="Relationship" text={relationship} />
      </div>
    </section>
  );
};

export default Guarantor;
