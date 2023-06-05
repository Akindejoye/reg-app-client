import { useState } from "react";
import { FormInterface } from "../../Interface";
import "./style.css";

const CustomInput = (props: FormInterface) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <>
      <div className="custom-input">
        <label htmlFor={props.name}>{props.label}</label>
        <input
          className="input"
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          pattern={props.pattern}
          onBlur={handleFocus}
          onFocus={() => props.name === "confirmpassword" && setFocused(true)}
          // focused={focused.toString()}
        />
        <span className="input-errorMessage">{props.errorMessage}</span>
      </div>
    </>
  );
};

export default CustomInput;
