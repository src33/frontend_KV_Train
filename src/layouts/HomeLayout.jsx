import { Link, Outlet, useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
import icon from "../assets/icon.svg";
import ".//homeLayoutStyles.scss";
import KV_logo from "../assets/kv logo.png";
import { useEffect } from "react";
import reducer from "../store/useReducer.js"

const HomeLayout = () => {
   const navigate = useNavigate();
   const employees = [
      {
         name: "Shaheen",
         id: "shaheen@fun.com",
         date: "2021-09-01",
         role: "Software Developer",
         status: "Active",
         experience: "2 years",
      },
      {
         name: "Alex",
         id: "alex@company.com",
         date: "2020-08-15",
         role: "Project Manager",
         status: "Inactive",
         experience: "5 years",
      },
      {
         name: "Jordan",
         id: "jordan@tech.com",
         date: "2019-04-22",
         role: "UI/UX Designer",
         status: "Active",
         experience: "3 years",
      },
      {
         name: "Casey",
         id: "casey@innovate.com",
         date: "2022-01-10",
         role: "Marketing Specialist",
         status: "Active",
         experience: "1 year",
      },
      {
         name: "Morgan",
         id: "morgan@develop.com",
         date: "2018-07-19",
         role: "Backend Developer",
         status: "Inactive",
         experience: "4 years",
      },
      {
         name: "Jamie",
         id: "jamie@create.com",
         date: "2021-03-03",
         role: "Frontend Developer",
         status: "Probation",
         experience: "2 years",
      },
      {
         name: "Taylor",
         id: "taylor@solution.com",
         date: "2020-11-12",
         role: "Data Analyst",
         status: "Active",
         experience: "2 years",
      },
      {
         name: "Drew",
         id: "drew@enterprise.com",
         date: "2019-06-08",
         role: "System Administrator",
         status: "Active",
         experience: "3 years",
      },
      {
         name: "Pat",
         id: "pat@network.com",
         date: "2022-02-20",
         role: "Network Engineer",
         status: "Probation",
         experience: "1 year",
      },
      {
         name: "Joan",
         id: "jordan@te.com",
         date: "2019-04-22",
         role: "UI/UX Designer",
         status: "Active",
         experience: "3 years",
      },
      {
         name: "Casy",
         id: "casey@innoe.com",
         date: "2022-01-10",
         role: "Marketing Specialist",
         status: "Active",
         experience: "1 year",
      },
      {
         name: "Mon",
         id: "morgan@deop.com",
         date: "2018-07-19",
         role: "Backend Developer",
         status: "Probation",
         experience: "4 years",
      },
      {
         name: "Jame",
         id: "jame@create.com",
         date: "2021-03-03",
         role: "Frontend Developer",
         status: "Active",
         experience: "2 years",
      },
      {
         name: "Sam",
         id: "sam@cloud.com",
         date: "2021-05-16",
         role: "Cloud Solutions Architect",
         status: "Active",
         experience: "2 years",
      },
   ];
   const [state,dispatch] = useReducer(reducer,{employees:employees, filter:"All"})
   useEffect(() => {
      console.log(localStorage.getItem("logged"));
      const token = localStorage.getItem("logged");
      if (!token || token !== "true") {
         console.log(localStorage.getItem("logged"));
         navigate("/");
      
      }else navigate("/employees")
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
            <Outlet context={{state, dispatch}}/>
         </div>
      </div>
   );
};

export default HomeLayout;
