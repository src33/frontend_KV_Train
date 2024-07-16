import apiWithTag from "../api/employeeApi";

export const employeeApi = apiWithTag.injectEndpoints({
   endpoints: (builder) => ({
      getEmployeeList: builder.query({
         query: () => "/employee",
         providesTags: ["EMPLOYEE_LIST"],
      }),
      addEmployee: builder.mutation({
         query: (body) => ({
            url: "/employee",
            method: "POST",
            body,
         }),
      }),
      getEmployeeDetails: builder.query({
         query: (id) => `/employee/${id}`,
      }),
   }),
});

export const { useGetEmployeeListQuery, useAddEmployeeMutation, useGetEmployeeDetailsQuery } = employeeApi;
