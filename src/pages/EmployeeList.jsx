// import { Link, Outlet } from "react-router-dom";
import trash_icon from "../assets/trash.svg";
import edit_icon from "../assets/pen.svg";
import EmployeeDetail from "../components/EmployeeDetail";
import "./employeeListStyles.scss";
import { Link } from "react-router-dom";
const EmployeeList = () => {
   const style = {
      // width:"calc(100vw - 300px)"
      marginLeft: "310px",
      textALign: "center",
   };
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
         status: "Probation",
         experience: "4 years",
      },
      {
         name: "Jamie",
         id: "jamie@create.com",
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
   return (
      <div className="EmployeeList" style={style}>
         {/* <div className="listHeader"> */}
         <div className="heading">
            <div className="listLabel">Employee List</div>
            <Link to="create" className="createBttnSectn">
               <div className="createBttn">+</div>
               <div className="createBttnLbl">Create employee</div>{" "}
            </Link>
         </div>

         {/* </div> */}

         <div className="EmployeeDataHeader">
            <div className="name">Employee Name</div>
            <div className="id">Employee ID</div>
            <div className="date">Joining Date</div>
            <div className="role">Role</div>
            <div className="status">Status</div>
            <div className="experience">Experience</div>
            <div className="action">Action</div>
         </div>
         <div className="EmployeeDataList">
            {employees.map((field) => {
               // console.log(field);
               return <EmployeeDetail key={field.id} {...field} />;
            })}
         </div>
      </div>
   );
};
export default EmployeeList;
