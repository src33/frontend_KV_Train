import trash_icon from "../assets/trash.svg";
import edit_icon from "../assets/pen.svg";
import Status from "./Status";
import { Link } from "react-router-dom";
import DeletePopup from "./DeletePopup";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
const EmployeeDetail = (props) => {
   const [popup, setPopup] = useState(false);

   const handleClick = (e) => {
      e.preventDefault();
      // console.log(props)
      setPopup(true);
   };
   const handleDelete = (value) => {
      // console.log(value)
      if (value) props.handleDelete({ id: props.id });
      setPopup(false);
   };
   return (
      <Link to={`details/${props.id}`} className="detailsLink">
         <div className="EmployeeData">
            <div className="name">{props.name}</div>
            <div className="id">{props.id}</div>
            <div className="date">{props.date}</div>
            <div className="role">{props.role}</div>
            <Status statusVal={props.status} />
            {/* </div> */}
            <div className="experience">{props.experience}</div>
            <div className="action">
               <img src={trash_icon} alt="delete-icon" className="delete-icon" onClick={handleClick} />
               {popup ? <DeletePopup onConfirm={(value) => handleDelete(value)} /> : null}
               <Link to={`edit/${props.id}`}>
                  <img src={edit_icon} alt="edit-icon" className="edit-icon" />
               </Link>
            </div>
         </div>
      </Link>
   );
};
export default EmployeeDetail;
