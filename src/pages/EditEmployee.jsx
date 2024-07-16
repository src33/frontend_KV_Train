import { useOutletContext, useParams } from "react-router-dom";
import Form from "../components/Form";
// import Select from "../components/Select";
import "./createEmployeeStyles.scss";
// import { editEmployee } from "../store/employeeReducer";
import { useGetEmployeeDetailsQuery, useUpdateEmployeeMutation } from "./employee.api";
const EditEmployee = () => {
   const param = useParams();
   console.log(param.id);
   const { data = {} } = useGetEmployeeDetailsQuery(param.id);
   const detailDefault = {
      ...data,
      date: new Date(data.createdAt).toLocaleDateString("en-GB", {
         day: "numeric",
         month: "short",
         year: "numeric",
      }),
      status: "Active",
      experience: data.age,
      address: data.address?.line1 ? data.address.line1 : "",
      department: data.department?.name ? data.department.name : "",
   };
   // console.log(detailDefault)

   const [updateEmployee, { isSuccess }] = useUpdateEmployeeMutation();

   const edit = async(props) => {
      const updated = {
         id: props.id,
         name: props.name,
         email: data.email,
         age: props.experience,
         role: props.role,
         // "password": "krish",
         address: {
            line1: props.address,
            pincode: 679900,
         },
         department: {
            name: props.department,
         },
      };
      console.log(updated);
     await updateEmployee(updated);
      // console.log(response)
   };
   // const employee = employees.find((employee) => employee.id === data.id);
   // console.log(employee)
   return (
      <main className="createEmployee">
         <div className="list">
            <div className="heading">Edit Employee</div>
            <Form
               defaultVal={{
                  name: detailDefault.name,
                  date: data.createdAt,
                  id: detailDefault.id,
                  address: detailDefault.address,
                  experience: detailDefault.experience,
                  department: detailDefault.department,
                  role: detailDefault.role,
                  status: detailDefault.status,
               }}
               handleCreateOrEdit={edit}
            />
         </div>
      </main>
   );
};
export default EditEmployee;
