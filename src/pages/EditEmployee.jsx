import { useOutletContext, useParams } from "react-router-dom";
import Form from "../components/Form";
// import Select from "../components/Select";
import "./createEmployeeStyles.scss";
import { actionTypes } from "../store/useReducer";
import { useDispatch, useSelector } from "react-redux";
import { editEmployee } from "../store/employeeReducer";
const EditEmployee = () => {
   const data = useParams();
   console.log(data.id);
   // const { state, dispatch } = useOutletContext();
   const dispatch = useDispatch();
   // const employees = useSelector((state) => state.employee.list);
   const edit = (props) => {
      dispatch(editEmployee(props));
   };
   // const employee = employees.find((employee) => employee.id === data.id);
   // console.log(employee)
   return (
      <main className="createEmployee">
         <div className="list">
            <div className="heading">Edit Employee</div>
            <Form
               defaultVal={{ name: "", date: "",id:data.id, address: "", experience: "", department: "", role: "", status: "" }}
               handleCreateOrEdit={edit}
            />
         </div>
      </main>
   );
};
export default EditEmployee;
