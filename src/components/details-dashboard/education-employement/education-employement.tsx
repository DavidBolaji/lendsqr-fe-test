
import { FC } from 'react';
import Heading, { Info } from '../root-component';
import './education-employement.scss';
import { IUser } from '../../../api/fetch-users';

const EducationEmployment:FC<Partial<IUser>> = ({education, employmentStatus, empDuration, oEmail, loan, sector, amount }) => {
  return (
    <section className="education-info">
      <Heading text='Education and Employment' style={{
        marginBottom: "3rem"
      }}  />
      <div className='e-info-cont'>
        <Info title='level of education' text={education!} />
        <Info title='employment status' text={employmentStatus ? "Employed": "Unemployed"} />
        <Info title='sector of employment' text={sector!} />
        <Info title='Duration of employment' text={`${empDuration} years`} />
        <Info title='office email' text={oEmail!} />
        <Info title='Monthly income' text={`₦${new Intl.NumberFormat('NGN').format(amount!)} - ₦${new Intl.NumberFormat('NGN').format(amount! * 2)}`} />
        <Info title='loan repayment' text={new Intl.NumberFormat('NGN').format(loan!)} />
      </div>
     
    </section>
  );
};

export default EducationEmployment;
