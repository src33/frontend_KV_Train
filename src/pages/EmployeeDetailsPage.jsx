import "./employeeListStyles.scss";
import "./employeeDetailsPage.scss";
import edit_icon from "../assets/penEdit.svg";
import { Link, useParams } from "react-router-dom";
import Status from "../components/Status";
import { useGetEmployeeDetailsQuery } from "./employee.api";
import { useEffect, useState } from "react";
const EmployeeDetailsPage = () => {
   const param = useParams();
   const { data = {} } = useGetEmployeeDetailsQuery(param.id);
   const detail = {
      ...data,
      date: new Date(data.createdAt).toLocaleDateString("en-GB", {
         day: "numeric",
         month: "short",
         year: "numeric",
      }),
      address:data.address?.line1,
      pincode:data.address?.pincode
   };
   console.log(detail);
   return (
      <div className="EmployeeList">
         <div className="heading">
            <div className="listLabel">Employee Details</div>
            <div className="createAndFilter">
               <Link to={`/employees/edit/${param.id}`} className="createBttnSectn">
                  <div className="createBttn">
                     <img src={edit_icon} alt="edit-icon" className="edit-icon" />
                  </div>
                  <div className="createBttnLbl">Edit</div>
               </Link>
            </div>
         </div>
         <div className="detailsContentComponent">
            <div className="detailsContent">
               <div className="name">
                  <label className="labelDetails">Employee Name</label>
                  <div className="Content"> {detail.name}</div>
               </div>
               <div className="id">
                  <label className="labelDetails">Employee ID</label>
                  <div className="Content">{detail.id}</div>
               </div>
               <div className="email">
                  <label className="labelDetails">Email</label>
                  <div className="Content"> {detail.email}</div>
               </div>
               <div className="age">
                  <label className="labelDetails">Age </label>
                  <div className="Content">{detail?.age}</div>
               </div>
               <div className="date">
                  <label className="labelDetails">Joining Date</label>
                  <div className="Content"> {detail.date}</div>
               </div>
               <div className="row-border"></div>
               <div className="department">
                  <label className="labelDetails">Department </label>
                  <div className="Content">{detail?.department?.name}</div>
               </div>
               <div className="role">
                  <label className="labelDetails"> Role</label>
                  <div className="Content"> {detail.role}</div>
               </div>
               <div className="statusField">
                  <label className="labelDetails">Status</label>
                  <div className="Content">
                     <Status statusVal={detail.status} />
                  </div>
               </div>

               <div className="experience">
                  <label className="labelDetails">Experience </label>
                  <div className="Content">{detail?.experience}</div>
               </div>
               <div className="address">
                  <label className="labelDetails">Address </label>
                  <div className="Content">{detail?.address}</div>
                  {/* <div className="Content">Pincode: {detail?.pincode}</div> */}
               </div>
            </div>
         </div>
      </div>
   );
};
export default EmployeeDetailsPage;
