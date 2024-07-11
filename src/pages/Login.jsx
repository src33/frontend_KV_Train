import TextField from "../components/TextField";
import Button from "../components/Buttons";
import Logo from "../assets/kv-login.jpeg";
import KV_logo from "../assets/kv logo.png";
import "./styles.scss";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const [userName, setUserName] = useState("");
   const [error, setError] = useState("");
   const [password, setPassword] = useState("");
   useEffect(() => {
      localStorage.setItem("logged",false)
      userRef.current.focus();
      if (userName.length > 10) {
         setError("Max Length Exceeded");
      } else {
         setError("");
      }
      console.log(userName);
   }, [userName]);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      // console.log(props);
      e.preventDefault();
      if (userName == "sanoj" && password == "hi") {
         // setState(true);
         localStorage.setItem("logged",true)
         navigate("/employees");
      }
   };
   const userRef = useRef();

   return (
      <div className="loginPage">
         {/* <!-- Hero Section --> */}
         <div className="hero">
            <div className="wrapper-hero">
               <img src={Logo} alt="Login Image" className="login-image" />
            </div>
         </div>
         {/* <!-- Login Section --> */}
         <div className="login">
            <form action="/" method="post">
               <img src={KV_logo} alt="Logo" className="logo" />
               <TextField
                  label="Username"
                  value={userName}
                  ref={userRef}
                  type="text"
                  className=""
                  error={error}
                  onChange={setUserName}
               />
               <TextField label="Password" type="password" className="" onChange={setPassword} />
               <Button text="Login" handleClick={handleSubmit} className="" />
            </form>
         </div>
      </div>
   );
};
export default Login;
