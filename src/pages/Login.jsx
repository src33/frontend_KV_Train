import TextField from "../components/TextField";
import Button from "../components/Buttons";
import Logo from "../assets/kv-login.jpeg";
import KV_logo from "../assets/kv logo.png";
import "./styles.scss";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./login.api";

const Login = () => {
   const [userName, setUserName] = useState("");
   const [err, setError] = useState("");
   const [password, setPassword] = useState("");

   const [login, { isSuccess, isError, data, error }] = useLoginMutation();
   const unameRef = useRef();
   const navigate = useNavigate();

   useEffect(() => {
      localStorage.setItem("token", false);
      if (isError) setError(error.data.errors);
      if (unameRef?.current) unameRef.current.focus();
   }, [isError, error]);
   useEffect(() => {
      if (userName.length > 25) {
         setError("Max Length Exceeded");
      } else {
         setError("");
      }
      // console.log(userName);
   }, [userName]);
   useEffect(() => {
      console.log(`isSucces : ${isSuccess} `);
      console.log(`data : ${data} `);
      if (isSuccess && data.token) {
         localStorage.setItem("token", data.token);
         navigate("/employees");
      }
   }, [isSuccess, data]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const response = login({ email: userName, password: password });
      // if (isError) setError(response.error.data.errors);

      // if (localStorage.getItem("token")) navigate("/employees");
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
                  ref={unameRef}
                  type="text"
                  className=""
                  error={err}
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
