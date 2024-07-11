import { useEffect, useRef, useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);
   const [status, setStatus] = useState("NO Change !!");
   const [flag, setFlag] = useState("");

   useEffect(() => {
      setTimeout(() => {
         setStatus("ayin");
      }, 2000);
      inpRef.current.focus();
      console.log("callbk");
      return () => {
         console.log("cleanupp");
         // setStatus(flag);
      };
   }, [count, flag]);

   const inpRef = useRef(0);

   const buttonstyle = {
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      fontSize: "20px",
      boxShadow: "3px 1px 3px 1px #ccc",
      border: "1px solid #ccc",
      backgroundColor: "white",
   };
   return (
      <div
         className="main"
         style={{
            width: "500px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "black",
            color: "wheat",
            rowGap: "20px",
         }}
      >
         <div
            className="count"
            style={{
               height: "250px",
               width: "250px",
               textAlign: "center",
               fontSize: `50px`,
               fontWeight: "700",
               backgroundColor: "white",
               borderRadius: "100%",
               marginLeft: "125px",
               alignContent: "center",
               boxShadow: "3px 3px 1px 1px white",
            }}
         >
            {count}
         </div>
         <div className="status" style={{ width: "100%", marginLeft: "200px" }}>
            {status}
         </div>
         <div
            className="buttons"
            style={{
               width: "500px",
               display: "flex",
               flexDirection: "row",
               justifyContent: "center",
               alignContent: "center",
               gap: "20px",
            }}
         >
            <button
               style={buttonstyle}
               onClick={() => {
                  setStatus("Increased");
                  setCount(count + 1);
                  console.log(inpRef.current);
               }}
               ref={inpRef}
            >
               +
            </button>
            <button
               style={buttonstyle}
               onClick={() => {
                  setStatus("Decreased");
                  setCount(count - 1);
               }}
            >
               -
            </button>
         </div>
      </div>
   );
};
export default Counter;
