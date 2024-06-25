import { FC } from 'react';
import Heading, { Info } from '../root-component';
import './socials.scss';

const Socials: FC<{ twitter: string; facebook: string; instagram: string }> = ({
  twitter,
  facebook,
  instagram,
}) => {
  return (
    <section className="social-info">
      <Heading
        text="Socials"
        style={{
          marginBottom: '3rem',
        }}
      />
      <div className="s-info-cont">
        <Info title="Twitter" text={twitter!} />
        <Info title="Facebook" text={facebook!} />
        <Info title="Instagram" text={instagram!} />
      </div>
    </section>
  );
};

export default Socials;
