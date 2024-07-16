import { Link } from "react-router-dom";
import "./deletePopupStyles.scss";
import Button from "./Buttons";
const DeletePopup = (props) => {
   // const [hidden,setHidden]=useState("")
   const onConfirm = (e) => {
      // console.log("blah");
      e.preventDefault();
      props.onConfirm(true);
   };
   const onCancel = (e) => {
      e.preventDefault();
      props.onConfirm(false);
   };
   return (
      <div className="deletePopup">
         <div className="popupContent">
            <p className="closeBttn" onClick={onCancel}>
               X
            </p>
            <h2>Are you sure?</h2>
            <p>
               Do you really want to delete <br />
               employee?
            </p>
            <div className="popupButtons">
               <Button className="Confirm" text="Confirm" handleClick={onConfirm} />

               {/* </button> */}
               <Button className="Cancel" text="Cancel" handleClick={onCancel} />

               {/* </button> */}
            </div>
         </div>
      </div>
   );
};
export default DeletePopup;
