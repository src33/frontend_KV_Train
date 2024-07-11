import "./createEmployeeStyles.scss";
import TextField from "../components/TextField";
import Button from "../components/Buttons";
import Select from "../components/Select";
import { useEffect,  useState } from "react";

const CreateEmployee = () => {
   const form_fields = [
      {
         name: "Employee Name",
         id: "name",
         type: "text",
      },
      {
         id: "id",
         name: "Employee ID",
         type: "text",
      },
      {
         id: "date",
         name: "Joining Date",
         type: "date",
      },
      {
         id: "role",
         name: "Role",
         values: [{ value: "Dev" }, { value: "Design" }],
         Component: Select,
      },
      {
         id: "status",
         name: "Status",
         values: [{ value: "Active" }, { value: "Inactive" }],
         Component: Select,
      },
      {
         id: "experience",
         name: "Experience",
         type: "text",
      },
      {
         id: "address",
         name: "Address",
         type: "text",
      },
   ];
   // const fieldRef = useRef();
   const [form, setField] = useState({ name: "", id: "", date: "", address: "", experience: "", role: "", status: "" });
   const [changed, setChange] = useState({});
   useEffect(() => {
      handleChange();
      console.log(form);
   }, [changed]);

   const handleChange = () => {
      setField((prevState) => {
         return { ...prevState, ...changed };
      });
   };

   return (
      <main className="createEmployee">
      
         <div className="list">
            <div className="heading">Create Employee</div>
            <form action="">
               {form_fields.map((field) => {
                  // console.log(field.name)
                  if (field.Component)
                     return (
                        <field.Component
                           key={field.name}
                           // ref={fieldRef}
                           label={field.name}
                           values={field.values}
                           className="fields"
                           onSelect={(value) => setChange({ [field.id]: value })}
                        />
                     );
                  return (
                     <TextField
                        key={field.name}
                        label={field.name}
                        type={field.type}
                        className="fields"
                        onChange={(value) => setChange({ [field.id]: value })}
                     />
                  );
               })}
               <div className="buttons">
                  <Button text="Create" className="Create" />
                  <Button text="Cancel" className="Cancel" />
               </div>
            </form>
         </div>
      </main>
   );
};
export default CreateEmployee;
