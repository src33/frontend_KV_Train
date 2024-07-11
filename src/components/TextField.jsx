// import { useEffect, useState } from "react";
import { forwardRef } from "react";
const TextField = forwardRef((props,ref) => {

   const onChange = (e) => {
      // setText(e.target.value);
      if (props.onChange) props.onChange(e.target.value,props.label);
   };
   return (
      <span className={props.className}>
         <label htmlFor={props.label}>{props.label}</label>
         <input type={props.type} ref={ref} name={props.label} value={props.value} placeholder={props.label} onChange={onChange} />
         <label htmlFor="error" className="error_msg">
            {props.error}
         </label>
      </span>
   );
})
export default TextField;
