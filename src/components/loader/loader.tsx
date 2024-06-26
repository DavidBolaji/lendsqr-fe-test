import { HTMLAttributes } from 'react';
import './loader.scss';

interface ILoader extends HTMLAttributes<HTMLDivElement> {}

const Loader: React.FC<ILoader> = ({ style, ...rest }) => {
  return (
    <div
      className="loader"
      style={{
        ...style,
      }}
      {...rest}
      data-testid="loader"
    ></div>
  );
};

export default Loader;
