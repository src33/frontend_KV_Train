const Status = ({statusVal}) => {
   const handleStatus = () => {
      if (statusVal === "Active") return "#d3f4be";
      else if(statusVal === "Probation") return "#f5ecb8"
      else return "#ffbfbf"
   };
   return (
      <div className="status" style={{ backgroundColor: handleStatus() }}>
         {statusVal}
      </div>
   );
};
export default Status;
