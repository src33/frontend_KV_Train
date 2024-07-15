import "./createEmployeeStyles.scss";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Form from "../components/Form";
import { actionTypes } from "../store/useReducer";
import { useOutletContext } from "react-router-dom";

const CreateEmployee = () => {
   const { state, dispatch } = useOutletContext();
   const addEmployee = (props) => {
      props = { ...props, id: uuidv4() };
      dispatch({
         type: actionTypes.ADD_EMPLOYEE,
         payload: props,
      });
   };
   return (
      <main className="createEmployee">
         <div className="list">
            <div className="heading">Create Employee</div>
            <Form
               defaultVal={{ name: "", date: "", address: "", experience: "", department: "", role: "", status: "" }}
               handleCreateOrEdit={addEmployee}
            />
         </div>
      </main>
   );
};
export default CreateEmployee;
