import React, { HTMLAttributes } from 'react';

interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
  text: string 
}

const Heading: React.FC<IHeading> = ({ text, className, style, ...rest }) => {
  return (
    <h2
      className={`text-blue work-sans-regular ${className}`}
      style={{
        fontSize: '2.4rem',
        fontWeight: 500,
        ...style
      }}
      {...rest}
    >
      {text}
    </h2>
  );
};

export default Heading;

const Info: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <div className='detail'>
      <h2
        className="text-blue work-sans-regular"
        style={{
          fontSize: '1.6rem',
          fontWeight: 400,
          color: '#545F7D',
          textTransform: "uppercase",
          marginBottom: "0.8rem"
        }}
      >
        {title}
      </h2>
      <p
       style={{
        color:" #545F7D",
        fontSize: '1.6rem',
        fontWeight: 500,
        width: "100%"
      }}
     
      >{text}</p>
    </div>
  );
};

export { Info };
