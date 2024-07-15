import { useOutletContext, useParams } from "react-router-dom";
import Form from "../components/Form";
import Select from "../components/Select";
import "./createEmployeeStyles.scss";
import { actionTypes } from "../store/useReducer";
const EditEmployee = () => {
   const data = useParams();
   console.log(data.id);
   const { state, dispatch } = useOutletContext();
   const editEmployee = (props) => {
      dispatch({
         type: actionTypes.EDIT_EMPLOYEE,
         payload: props,
      });
   };
   const employee=state.employees.find((employee) => employee.id === data.id)
   // console.log(employee)
   return (
      <main className="createEmployee">
         <div className="list">
            <div className="heading">Edit Employee</div>
            <Form
               defaultVal={{
                  name: employee.name,
                  id: data.id,
                  date: employee.date,
                  address: employee.address,
                  experience:employee.experience,
                  department: employee.department,
                  role: employee.role,
                  status: employee.status,
               }}
               handleCreateOrEdit={editEmployee}
            />
         </div>
      </main>
   );
};
export default EditEmployee;
