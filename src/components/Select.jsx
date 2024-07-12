const Select = (props) => {
   const onSelect = (e) => {
      // setText(e.target.value);
      if (props.onSelect) props.onSelect(e.target.value, props.label);
   };
   return (
      <span className={props.className}>
         <label htmlFor={props.label}> {props.label} </label>
         <select required defaultValue="default" onChange={onSelect}>
            <option value="default" disabled>
               {props.className}
            </option>
            {props.values.map((element) => {
               // console.log(element.value)
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
