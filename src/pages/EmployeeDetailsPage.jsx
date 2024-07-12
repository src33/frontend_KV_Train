import "./employeeListStyles.scss";
import "./employeeDetailsPage.scss";
import { Link, useParams } from "react-router-dom";
import Status from "../components/Status";
const EmployeeDetailsPage = () => {
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
   const data = useParams();
   return (
      <div className="EmployeeList">
         <div className="heading">
            <div className="listLabel">Employee Details</div>
            <div className="createAndFilter">
               <Link to={`/employees/edit/${data.id}`} className="createBttnSectn">
                  <div className="createBttn">+</div>
                  <div className="createBttnLbl">Edit</div>
               </Link>
            </div>
         </div>
         <div className="detailsContentComponent">
            {employees
               .filter((field) => field.id === data.id)
               .map((field) => {
                  return (
                     <div className="detailsContent">
                        <div className="name">
                           <label className="labelDetails">Employee Name</label>
                           <div className="Content"> {field.name}</div>
                        </div>
                        <div className="id">
                           <label className="labelDetails">Employee ID</label>
                           <div className="Content">{field.id}</div>
                        </div>
                        <div className="date">
                           <label className="labelDetails">Joining Date</label>
                           <div className="Content"> {field.date}</div>
                        </div>
                        <div className="role">
                           <label className="labelDetails"> Role</label>
                           <div className="Content"> {field.role}</div>
                        </div>
                        <div className="statusField">
                           <label className="labelDetails">Status</label>
                           <div className="Content">
                              <Status statusVal={field.status} />
                           </div>
                        </div>
                        <div className="row-border"></div>
                        <div className="experience">
                           <label className="labelDetails">Experience </label>
                           <div className="Content">{field.experience}</div>
                        </div>
                     </div>
                  );
               })}
         </div>
      </div>
   );
};
export default EmployeeDetailsPage;
