import { createAction, createReducer } from "@reduxjs/toolkit";

const addEmployee = createAction("ADD_EMPLOYEE");
const deleteEmployee = createAction("DELETE_EMPLOYEE");
const editEmployee= createAction("EDIT_EMPLOYEE")

const employees = [
   {
      name: "Shaheen",
      id: "shaheen@fun.com",
      date: "2021-09-01",
      role: "Software Developer",
      status: "Active",
      experience: "2 years",
   },
   {
      name: "Alex",
      id: "alex@company.com",
      date: "2020-08-15",
      role: "Project Manager",
      status: "Inactive",
      experience: "5 years",
   },
   {
      name: "Jordan",
      id: "jordan@tech.com",
      date: "2019-04-22",
      role: "UI/UX Designer",
      status: "Active",
      experience: "3 years",
   },
   {
      name: "Casey",
      id: "casey@innovate.com",
      date: "2022-01-10",
      role: "Marketing Specialist",
      status: "Active",
      experience: "1 year",
   },
   {
      name: "Morgan",
      id: "morgan@develop.com",
      date: "2018-07-19",
      role: "Backend Developer",
      status: "Inactive",
      experience: "4 years",
   },
   {
      name: "Jamie",
      id: "jamie@create.com",
      date: "2021-03-03",
      role: "Frontend Developer",
      status: "Probation",
      experience: "2 years",
   },
   {
      name: "Taylor",
      id: "taylor@solution.com",
      date: "2020-11-12",
      role: "Data Analyst",
      status: "Active",
      experience: "2 years",
   },
   {
      name: "Drew",
      id: "drew@enterprise.com",
      date: "2019-06-08",
      role: "System Administrator",
      status: "Active",
      experience: "3 years",
   },
   {
      name: "Pat",
      id: "pat@network.com",
      date: "2022-02-20",
      role: "Network Engineer",
      status: "Probation",
      experience: "1 year",
   },
   {
      name: "Joan",
      id: "jordan@te.com",
      date: "2019-04-22",
      role: "UI/UX Designer",
      status: "Active",
      experience: "3 years",
   },
   {
      name: "Casy",
      id: "casey@innoe.com",
      date: "2022-01-10",
      role: "Marketing Specialist",
      status: "Active",
      experience: "1 year",
   },
   {
      name: "Mon",
      id: "morgan@deop.com",
      date: "2018-07-19",
      role: "Backend Developer",
      status: "Probation",
      experience: "4 years",
   },
   {
      name: "Jame",
      id: "jame@create.com",
      date: "2021-03-03",
      role: "Frontend Developer",
      status: "Active",
      experience: "2 years",
   },
   {
      name: "Sam",
      id: "sam@cloud.com",
      date: "2021-05-16",
      role: "Cloud Solutions Architect",
      status: "Active",
      experience: "2 years",
   },
];
const employeeReducer = createReducer({ list: employees }, (builder) => {
   builder.addCase(addEmployee, (state, action) => {
      state.list.push(action.payload);
   });
   builder.addCase(deleteEmployee, (state, action) => {
    // console.log("reduceril ethii")
      state.list=state.list.filter((employee) => employee.id !== action.payload);
   });
   builder.addCase(editEmployee, (state, action) => {
    // console.log("reduceril ethii")
      state.list=state.list.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee)
   });
});

export { employeeReducer as default, addEmployee,deleteEmployee,editEmployee };
