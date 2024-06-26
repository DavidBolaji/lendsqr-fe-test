import Heading, { Info } from '../root-component';
import './personal-info.scss';

const PersonalInfo = () => {
  return (
    <section className="personal-info">
      <Heading text='Personal Information' style={{
        marginBottom: "3rem"
      }}  />
      <div className='p-info-cont'>
        <Info title='Full Name' text={"Grace Effiom"} />
        <Info title='PHONE NUMBER' text={"07060780922"} />
        <Info title='Email Address' text={"grace@gmail.com"} />
        <Info title='BVN' text={"07060780922"} />
        <Info title='GENDER' text={"Female"} />
        <Info title='Marital status' text={"Single"} />
        <Info title='Children' text={"None"} />
        <Info title='Type of residence' text={"Parent's Apartment"} />
      </div>
     
    </section>
  );
};

export default PersonalInfo;