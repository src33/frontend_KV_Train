// import { useEffect, useState } from "react";
import { forwardRef, useState } from "react";
const TextField = forwardRef((props, ref) => {
   const [disabled, setDisabled] = useState(false);
   const [defVal, setDefVal] = useState(props.value);
   if (props.disabled === "true") {
      setDisabled(true);
   }
   const onChange = (e) => {
      // setText(e.target.value);
      setDefVal(e.target.value);
      console.log(props.disabled);
      if (props.onChange) props.onChange(e.target.value, props.label);
   };
   // console.log(props.disabled)

   return (
      <span className={props.className}>
         <label htmlFor={props.label}>{props.label}</label>
         <input
            type={props.type}
            ref={ref}
            name={props.label}
            value={props.disabled ? props.value : defVal}
            placeholder={props.label}
            onChange={onChange}
            disabled={disabled}
         />
         <label htmlFor="error" className="error_msg">
            {props.error}
         </label>
      </span>
   );
});
export default TextField;
