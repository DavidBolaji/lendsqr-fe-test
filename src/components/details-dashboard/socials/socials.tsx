
import Heading, { Info } from '../root-component';
import './socials.scss';

const Socials = () => {
  return (
    <section className="social-info">
    <Heading text='Socials' style={{
      marginBottom: "3rem"
    }}  />
    <div className='s-info-cont'>
      <Info title='Twitter' text={"@grace_effiom"} />
      <Info title='Facebook' text={"Grace Effiom"} />
      <Info title='Instagram' text={"@grace_effiom"} />
     
    </div>
   
  </section>
  );
};

export default Socials;
