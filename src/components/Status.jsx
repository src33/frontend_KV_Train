import Select from "./Select";
const Status = ({ statusVal }) => {
   const handleStatus = () => {
      if (statusVal === "Active") return "#d3f4be";
      else if (statusVal === "Probation") return "#f5ecb8";
      else return "#ffbfbf";
   };
   return (
      // <Select
      //    label=""
      //    className="Status"
      //    values={[{ value: "All" }, { value: "Active" }, { value: "Inactive" }, { value: "Probation" }]}
      //    style={{ backgroundColor: handleStatus() }}
      //    // onSelect={setFilter}
      // />
      <div className="status" style={{ backgroundColor: handleStatus() }}>
         {statusVal}
      </div>
   );
};
export default Status;
