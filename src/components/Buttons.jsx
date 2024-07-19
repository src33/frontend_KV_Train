import React from "react";
const Button = (props) => {
   return (
      <button className={props.className} onClick={props.handleClick} data-testid="button-test-id">
         {props.text}
      </button>
   );
};

export default Button;
