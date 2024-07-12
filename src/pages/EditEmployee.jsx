import { useParams } from "react-router-dom";
import Form from "../components/Form";
import Select from "../components/Select";
import "./createEmployeeStyles.scss";
const EditEmployee = () => {
   const data = useParams();
   console.log(data.id);
   return (
      <main className="createEmployee">
         <div className="list">
            <div className="heading">Edit Employee</div>
            <Form
               defaultVal={{ name: "", id: data.id, date: "", address: "", experience: "",department:"", role: "", status: "" }}
            />
         </div>
      </main>
   );
};
export default EditEmployee;
