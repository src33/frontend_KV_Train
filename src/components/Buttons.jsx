const Button = (props) => {
   //   props.handleClick = (e) => {
   //       console.log(e.target.value);
   //       console.log("njekkiii");
   //    };
   return (
      <button className={props.className} onClick={props.handleClick}>
         {props.text}
      </button>
   );
};

export default Button;
