import { useState } from "react";
import CreateEmployee from "./pages/CreateEmployee";
import Login from "./pages/login";
import "./pages/styles.scss";

const App = () => {
   const [stateValue, setState] = useState(false);

   const handleClick = (props) => {
      // console.log(props);
      if (props.username == "sanoj" && props.password == "hi") {
         setState(true);
      }
   };

   return <main>{stateValue ? <CreateEmployee /> : <Login handleSubmit={handleClick} />}</main>;
};
export default App;
