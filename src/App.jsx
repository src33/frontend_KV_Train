import { useState } from "react";
import CreateEmployee from "./pages/CreateEmployee";
import Login from "./pages/Login";
import "./pages/styles.scss";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import EmployeeList from "./pages/EmployeeList";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
   },
   {
      path: "/employees",
      element: <HomeLayout />,
      children: [
         { index: true, element: <EmployeeList /> },
         { path: "create", element: <CreateEmployee /> },
      ],
   },
]);

const App = () => {
   // const [stateValue, setState] = useState(false);
   return (
      <main className="App">
         <RouterProvider router={router} />
         {/* {stateValue ? <CreateEmployee /> : <Login handleSubmit={handleClick} />} */}
      </main>
   );
};
export default App;
