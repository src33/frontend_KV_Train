import { useState } from "react";

const Select = ({value,label,className,values,onSelect}) => {
   const [defVal,setDefVal]=useState("default")
   const handleSelect = (e) => {
      // setText(e.target.value);
      setDefVal(e.target.value)
      if (onSelect) onSelect(e.target.value, label);
   };
   console.log(value)
   return (
      <span className={className}>
         <label htmlFor={label}> {label} </label>
         <select required defaultValue={value || defVal} onChange={handleSelect}>
            <option value="default" disabled>
               {label}
            </option>
            {values.map((element) => {
               return (
                  <option key={element.value} value={element.value}>
                     {element.value}
                  </option>
               );
            })}
         </select>
      </span>
   );
};
export default Select;


