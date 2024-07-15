import TextField from "../components/TextField";
import Button from "../components/Buttons";
import Select from "../components/Select";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Form = (props) => {
   const [form, setField] = useState(props.defaultVal);
   // const [changed, setChange] = useState({});
   useEffect(() => {
      console.log(form)
   }, [form]);
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
         disabled: "true",
      },
      {
         id: "date",
         name: "Joining Date",
         type: "date",
      },
      {
         id: "department",
         name: "Department",
         values: [{ value: "Production" }, { value: "Design" }, { value: "Management" }],
         Component: Select,
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
   const handleChange = (changed) => {
      setField((prevState) => {
         return { ...prevState, ...changed };
      });
   };

   const onCreateOrEdit = (e) => {
      // e.preventDefault();
      console.log("form");
      props.handleCreateOrEdit(form);
   };
   return (
      <form action="">
         {form_fields
            .filter((field) => form.hasOwnProperty(field.id))
            .map((field) => {
               // console.log(field.name);
               // console.log(field.name)
              
               if (field.Component)
         
                  return (
                     <field.Component
                        key={field.name}
                        // ref={fieldRef}
                        label={field.name}
                        values={field.values}
                        className="fields"
                        onSelect={(value) => handleChange({ [field.id]: value })}
                     />
                  );
               else if (field.disabled)
                  return (
                     <TextField
                        key={field.name}
                        label={field.name}
                        type={field.type}
                        className="fields"
                        value={props.defaultVal.id}
                        disabled
                     />
                  );
               return (
                  <TextField
                     key={field.name}
                     label={field.name}
                     type={field.type}
                     className="fields"
                     value={props.defaultVal[field.id]}
                     onChange={(value) => handleChange({ [field.id]: value })}
                  />
               );
            })}
         {/* <div className="buttons"> */}
            <Link to="/employees" className="formButtons">
               <Button text="Create" className="Create" handleClick={onCreateOrEdit} />
               <Button text="Cancel" className="Cancel" />
            </Link>
         {/* </div> */}
      </form>
   );
};

export default Form;
