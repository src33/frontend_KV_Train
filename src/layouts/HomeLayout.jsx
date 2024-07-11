import { Link, Outlet, useNavigate } from "react-router-dom";
import icon from "../assets/icon.svg";
import ".//homeLayoutStyles.scss";
import KV_logo from "../assets/kv logo.png";
import { useEffect } from "react";
const HomeLayout = () => {
   const navigate = useNavigate();

   useEffect(() => {
      console.log(localStorage.getItem("logged"));
      const token = localStorage.getItem("logged");
      if (!token || token !== "true") {
         console.log(localStorage.getItem("logged"));
         navigate("/ggggg");
      }
   }, []);

   return (
      <div className="page">
         <div className="header">
            <div className="logo">
               <img src={KV_logo} alt="KV LOGO" className="imglogo" />
            </div>
            <h1>Employee</h1>
         </div>
         <aside className="SideBar"> 
            <Link className="links">
               <div className="details">
                  <div className="icon">
                     <img src={icon} alt="icon" className="imgicon" />
                  </div>
                  <label>Employee List</label>
               </div>
            </Link>
            {/* <Link to="create" className="links">
               <div className="details">
                  <div className="icon">
                     <img src={icon} alt="icon" className="imgicon" />
                  </div>
                  <label>Create Employee</label>
               </div>
            </Link> */}
            <Link to="/" className="links">
               <div className="details">
                  <div className="icon">
                     <img src={icon} alt="icon" className="imgicon" />
                  </div>
                  <label>Log-out</label>
               </div>
            </Link>
         </aside>

         <div className="content">
            <Outlet />
         </div>
      </div>
   );
};

export default HomeLayout;
