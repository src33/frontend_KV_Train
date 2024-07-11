import trash_icon from "../assets/trash.svg";
import edit_icon from "../assets/pen.svg";
import Status from "./Status";
const EmployeeDetail = (props) => {


   return (
      <div className="EmployeeData">
         <div className="name">{props.name}</div>
         <div className="id">{props.id}</div>
         <div className="date">{props.date}</div>
         <div className="role">{props.role}</div>

         {/* <div className="status" style={{ textAlign:"center",backgroundColor: handleStatus(props.status) ,borderRadius:"20%"}}> */}
         <Status statusVal= {props.status}/> 
         {/* </div> */}
         <div className="experience">{props.experience}</div>
         <div className="action">
            <img src={trash_icon} alt="delete-icon" className="delete-icon" />
            <img src={edit_icon} alt="edit-icon" className="edit-icon" />
         </div>
      </div>
   );
};
export default EmployeeDetail;
