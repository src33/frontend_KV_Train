import { useReducer, useState } from "react";
import CreateEmployee from "./pages/CreateEmployee";
import Login from "./pages/Login";
import "./pages/styles.scss";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import EmployeeList from "./pages/EmployeeList";
import EditEmployee from "./pages/EditEmployee";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import store from "./store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
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
            { path: "edit/:id", element: <EditEmployee /> },
            { path: "details/:id", element: <EmployeeDetailsPage /> },
         ],
      },
   ]);

   return (
      
      <Provider store={store}>
      <main className="App">
         <RouterProvider router={router} />
         {/* {stateValue ? <CreateEmployee /> : <Login handleSubmit={handleClick} />} */}
      </main>
      <ToastContainer limit={4}
      style={{
         '--toastify-color-success':"#9ffd64ee",
         '--toastify-color-error':"#ff5353ef",
      }}/>
      </Provider>
       
   );
};
export default App;
