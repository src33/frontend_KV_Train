import TextField from "../components/TextField";
import Button from "../components/Buttons";
import Logo from "../assets/kv-login.jpeg";
import KV_logo from "../assets/kv logo.png";
import "./styles.scss";
import { useEffect, useState, useRef } from "react";

const Login = ({ handleSubmit }) => {
   const [userName, setUserName] = useState("");
   const [error, setError] = useState("");
   const [password, setPassword] = useState("");

   useEffect(() => {
      userRef.current.focus();
      if (userName.length > 10) {
         setError("Max Length Exceeded");
      } else {
         setError("");
      }
      console.log(userName);
   }, [userName]);
   // const handleUserName = ({text}) => {
   //    setUserName({text});
   // };

   // const handleSubmit= (e) => {
   //    e.preventDefault();
   // };
   const userRef = useRef();

   const loginn = (e) => {
      e.preventDefault();
      handleSubmit({ username: userName, password: password });
   };
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
               <Button text="Login" handleClick={loginn} className="" />
            </form>
         </div>
      </div>
   );
};
export default Login;
