import "./createEmployeeStyles.scss";
import TextField from "../components/TextField";
import Button from "../components/Buttons";
import Select from "../components/Select";
import { useEffect,  useState } from "react";
import Form from "../components/Form";
const CreateEmployee = () => {
   return (
      <main className="createEmployee">
      
         <div className="list">
            <div className="heading">Create Employee</div>
            <Form defaultVal={{name: "", date: "", address: "", experience: "", department:"",role: "", status: "" }}/>
         </div>
      </main>
   );
};
export default CreateEmployee;
