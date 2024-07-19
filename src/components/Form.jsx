import TextField from "../components/TextField";
import Button from "../components/Buttons";
import Select from "../components/Select";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Form = (props) => {
   const [form, setField] = useState(props.defaultVal);

   useEffect(() => {
      // console.log(form)
      setField(props.defaultVal);
   }, [props.defaultVal]);
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
         id: "email",
         name: "Email",
         type: "email",
      },
      {
         id: "age",
         name: "Age",
         type: "number",
      },
      {
         id: "password",
         name: "Password",
         type: "password",
      },
      {
         id: "date",
         name: "Joining Date",
         type: "date",
      },
      {
         id: "department",
         name: "Department",
         values: [{ value: "Development" }, { value: "Testing" }, { value: "Management" }, { value: "Design" }],
         Component: Select,
      },
      {
         id: "role",
         name: "Role",
         values: [{ value: "UX" }, { value: "UI" }, { value: "HR" }, { value: "Developer" }],
         Component: Select,
      },
      {
         id: "status",
         name: "Status",
         values: [{ value: "Active" }, { value: "Inactive" }, { value: "Probation" }],
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
      {
         id: "pincode",
         name: "Pincode",
         type: "number",
      },
   ];
   const handleChange = (changed) => {
      setField((prevState) => {
         return { ...prevState, ...changed };
      });
   };

   const onCreateOrEdit = (e) => {
      e.preventDefault();
      // console.log("form");
      props.handleCreateOrEdit(form);
   };
   return (
      <form action="">
         {form_fields
            .filter((field) => form.hasOwnProperty(field.id))
            .map((field) => {
               if (field.Component)
                  return (
                     <field.Component
                        key={field.name}
                        // ref={fieldRef}
                        label={field.name}
                        values={field.values}
                        value={props.defaultVal[field.id]}
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
                        value={props.defaultVal[field.id]}
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
         <div className="formButtons">
            <Button text="Create" className="Create" handleClick={onCreateOrEdit} />
            <Link to="/employees" className="cancelLink">
               <Button text="Cancel" className="Cancel" />
            </Link>
         </div>
      </form>
   );
};

export default Form;
