// import { useEffect, useState } from "react";

import React from "react";
import { forwardRef, useState } from "react";
const TextField = forwardRef((props, ref) => {
   // const [disabled, setDisabled] = useState(false);
   const [defVal, setDefVal] = useState(props.value);
   
   const onChange = (e) => {
      setDefVal(e.target.value);
      if (props.onChange) props.onChange(e.target.value, props.label);
   };
   // console.log(props.disabled)

   return (
      <span className={props.className}>
         <label htmlFor={props.label} data-testid="textFieldLabel-test-id">{props.label}</label>
         <input
            type={props.type}
            ref={ref}
            name={props.label}
            value={defVal || props.value}
            placeholder={props.label}
            onChange={onChange}
            disabled={props.disabled?true:false}
            data-testid="textField-test-id"
         />
         <label htmlFor="error" className="error_msg">
            {props.error}
         </label>
      </span>
   );
});
export default TextField;
