import { InputHTMLAttributes, useEffect, useState } from "react";
import classes from "./input.module.scss";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  password?: boolean;
}

const InputComponent: React.FC<IInput> = ({ password, ...rest }) => {
  const [pass, setPass] = useState(rest.type);

  useEffect(() => {
    if (password) {
      setPass(rest.type);
    }
  }, [rest.type, password]);

  return (
    <div className={classes['input-cont']}>
     <div className={classes['input-wrapper']}>
     <input {...rest} type={pass} className={classes.input} />
      {password && (
        <span
          className={classes['pass-control']}
          onClick={() =>
            pass === "text" ? setPass("password") : setPass("text")
          }
        >
          {pass === "password" ? "SHOW" : "HIDE"}
        </span>
      )}
     </div>
    </div>
  );
};

export default InputComponent;
