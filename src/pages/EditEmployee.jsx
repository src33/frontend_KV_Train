import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Form from "../components/Form";
// import Select from "../components/Select";
import "./createEmployeeStyles.scss";
// import { editEmployee } from "../store/employeeReducer";
import { useLazyGetEmployeeDetailsQuery, useUpdateEmployeeMutation } from "./employee.api";
import { useEffect, useState } from "react";
import { notifyError, notifySuccess } from "../utils/toastFns";
const EditEmployee = () => {
   const { id } = useParams();
   const [getEmployee, { data = {} }] = useLazyGetEmployeeDetailsQuery();
   const [detailDefault, setDefault] = useState({});
   const [updateEmployee, { isSuccess ,isError, error}] = useUpdateEmployeeMutation();

   const navigate = useNavigate();

   useEffect(() => {
      if (id) {
         getEmployee(id);
      }
   }, [id]);

   useEffect(() => {
      const detail = {
         ...data,
         date: new Date(data.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
         }),
         address: data.address?.line1 ? data.address.line1 : "",
         pincode: data.address?.pincode ? data.address.pincode : null,
      };
      setDefault(detail);
   }, [data]);
   
   useEffect(() => {
      if (isError) {
         error.data.errors.forEach((err) => {
            notifyError(err);
         });
      }
      if (isSuccess) {
         notifySuccess(`${detailDefault.name} edited successfully !!`);
         navigate("/employees");
      }
   }, [isError, data, error, isSuccess]);
   // console.log(detailDefault)

   const edit = async (props) => {
      const updated = {
         id: props.id,
         name: props.name,
         email: props.email,
         age: Number(props.age),
         role: props.role,
         experience: props.experience,
         status: props.status,
         address: {
            line1: props.address,
            pincode: Number(props.pincode),
         },
         department: {
            name: props.department,
         },
      };
      // console.log(updated);
      setDefault(props);
      await updateEmployee(updated);
      // console.log(response)
   };

   return (
      <main className="createEmployee">
         <div className="list">
            <div className="heading">Edit Employee</div>
            <Form
               defaultVal={{
                  name: detailDefault.name,
                  email: detailDefault.email,
                  age: detailDefault.age,
                  date: data.createdAt,
                  id: detailDefault.id,
                  address: detailDefault.address,
                  experience: detailDefault.experience,
                  department: detailDefault.department,
                  role: detailDefault.role,
                  status: detailDefault.status,
                  pincode: detailDefault.pincode,
               }}
               handleCreateOrEdit={edit}
            />
         </div>
      </main>
   );
};
export default EditEmployee;
