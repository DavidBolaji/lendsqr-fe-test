import Heading, { Info } from '../root-component';
import './guarantor.scss';

const Guarantor = () => {
  return (
    <section className="guarantor-info">
      <Heading
        text="Guarantor"
        style={{
          marginBottom: '3rem',
        }}
      />
      <div className="g-info-cont">
        <Info title="Full Name" text={'Debby Ogana'} />
        <Info title="PHONE NUMBER" text={'07060780922'} />
        <Info title="Email Address" text={'debby@gmail.com'} />
        <Info title="Relationship" text={'Sister'} />
      </div>
    </section>
  );
};

export default Guarantor;
