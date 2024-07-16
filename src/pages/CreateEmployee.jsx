import "./createEmployeeStyles.scss";
import { v4 as uuidv4 } from "uuid";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employeeReducer";
import { useAddEmployeeMutation } from "./employee.api";
const CreateEmployee = () => {
   // const { state, dispatch } = useOutletContext();
   // const dispatch = useDispatch();
   const [create, { isSuccess }] = useAddEmployeeMutation();

   const add = async(props) => {
      // props = { ...props, id: uuidv4() };
      const new_employee = {
         name: props.name,
         email: "sample@gmail.com",
         age: Number(props.experience),
         role: props.role,
         password: "sample",
         address: {
            line1: props.address,
            pincode: 679900,
         },
         department: {
            name: props.department,
         },
      };
      const response = await create(new_employee);
      console.log(`isSucces : ${isSuccess} `);
   };
   return (
      <main className="createEmployee">
         <div className="list">
            <div className="heading">Create Employee</div>
            <Form
               defaultVal={{ name: "", date: "", address: "", experience: "", department: "", role: "", status: "" }}
               handleCreateOrEdit={add}
            />
         </div>
      </main>
   );
};
export default CreateEmployee;
