import EmployeeDetail from "../components/EmployeeDetail";
import "./employeeListStyles.scss";
import { Link} from "react-router-dom";
import Select from "../components/Select";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterEmployee } from "../store/employeeReducer";
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from "./employee.api";
import { notifyError, notifySuccess } from "../utils/toastFns";

const EmployeeList = () => {

   const defFilter=useSelector((state) => state.employee.filter)
   // console.log(defFilter)
   const [filter, setFilter] = useState(defFilter); 
   const [list, setList] = useState([]);
   const { data = [] } = useGetEmployeeListQuery();

   useEffect(() => {
      const employees = data.map((employee) => ({
         ...employee,
         date: new Date(employee.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
         }),
      }));
      setList(employees);
   }, [data]);
   
   
   const dispatch=useDispatch()
   useEffect(()=>{
      dispatch(setFilterEmployee(filter))
   },[filter])

   const style = {
      marginLeft: "310px",
      textALign: "center",
   };

   const [deleteEmployee, { isSuccess,isError, error }] = useDeleteEmployeeMutation();

   useEffect(() => {
      if (isError) {
         error.data.errors.forEach((err) => {
            notifyError(err);
         });
      }
      if (isSuccess) {
         notifySuccess(`Deleted successfully !!`);
      }
   }, [isError, error, isSuccess]);


   const handleDelete = async (value) => {
      console.log(`kityyo ${value.id}`);

      await deleteEmployee(value.id);
      console.log(isSuccess)
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
            {list
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
