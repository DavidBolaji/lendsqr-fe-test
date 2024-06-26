
import Heading, { Info } from '../root-component';
import './education-employement.scss';

const EducationEmployment = () => {
  return (
    <section className="education-info">
      <Heading text='Education and Employment' style={{
        marginBottom: "3rem"
      }}  />
      <div className='e-info-cont'>
        <Info title='level of education' text={"B.Sc"} />
        <Info title='employment status' text={"Employed"} />
        <Info title='sector of employment' text={"FinTech"} />
        <Info title='Duration of employment' text={"2 years"} />
        <Info title='office email' text={"grace@lendsqr.com"} />
        <Info title='Monthly income' text={"₦200,000.00- ₦400,000.00"} />
        <Info title='loan repayment' text={"40,000"} />
      </div>
     
    </section>
  );
};

export default EducationEmployment;
