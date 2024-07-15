// import { Link, Outlet } from "react-router-dom";
import trash_icon from "../assets/trash.svg";
import edit_icon from "../assets/pen.svg";
import EmployeeDetail from "../components/EmployeeDetail";
import "./employeeListStyles.scss";
import { Link, useOutletContext } from "react-router-dom";
import Select from "../components/Select";
import { useState } from "react";
import { actionTypes } from "../store/useReducer";

const EmployeeList = () => {
   const {state, dispatch} = useOutletContext();
   const [filter, setFilter] = useState("All");

   const style = {
      marginLeft: "310px",
      textALign: "center",
   };
   console.log(state);
   const handleDelete = (value) => {
      console.log(`kityyo ${value.id}`);

      dispatch({
         type: actionTypes.DELETE_EMPLOYEE,
         payload: value.id,
      });
   };

   return (
      <div className="EmployeeList" style={style}>
         {/* <div className="listHeader"> */}
         <div className="heading">
            <div className="listLabel">Employee List</div>
            <div className="createAndFilter">
               <Select
                  label="Filter by"
                  className="Status"
                  values={[{ value: "All" }, { value: "Active" }, { value: "Inactive" }, { value: "Probation" }]}
                  onSelect={setFilter}
               />

               <Link to="create" className="createBttnSectn">
                  <div className="createBttn">+</div>
                  <div className="createBttnLbl">Create employee</div>
               </Link>
            </div>
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
            {state.employees
               .filter((field) => (filter === "All" ? field : field.status === filter))
               .map((field) => {
                  // console.log(field.status);
                  return <EmployeeDetail key={field.id} {...field} handleDelete={(value) => handleDelete(value)} />;
               })}
         </div>
      </div>
   );
};
export default EmployeeList;
