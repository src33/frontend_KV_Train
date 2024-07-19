import "./createEmployeeStyles.scss";
import Form from "../components/Form";
import { useAddEmployeeMutation } from "./employee.api";

import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "../utils/toastFns";
const CreateEmployee = () => {
   const [create, { isSuccess, isError, data, error }] = useAddEmployeeMutation();
   const [defaultVal, setDefaultVal] = useState({
      name: "",
      email: "",
      password: "",
      age: null,
      date: "",
      address: "",
      pincode: null,
      experience: "",
      department: "",
      role: "",
      status: "",
   });
   const navigate = useNavigate();
   useEffect(() => {
      if (isError) {
         error.data.errors.forEach((err) => {
            notifyError(err);
         });
      }
      if (isSuccess) {
         notifySuccess(`${defaultVal.name} added successfully !!`);
         navigate("/employees");
      }
   }, [isError, data, error, isSuccess]);

   const add = (props) => {
      const new_employee = {
         name: props.name,
         email: props.email,
         age: Number(props.age),
         role: props.role,
         password: props.password,
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
      create(new_employee);
      setDefaultVal(props);
      console.log(`isSucces : ${isSuccess} `);
   };
   return (
      <main className="createEmployee">
         <div className="list">
            <div className="heading">Create Employee</div>
            <Form defaultVal={defaultVal} handleCreateOrEdit={add} />
         </div>
      </main>
   );
};
export default CreateEmployee;
