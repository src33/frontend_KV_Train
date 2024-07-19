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
         invalidatesTags: ["EMPLOYEE_LIST"],
      }),
      getEmployeeDetails: builder.query({
         query: (id) => `/employee/${id}`,
      }),
      updateEmployee: builder.mutation({
         query: (payload) => ({
            url: `/employee/${payload.id}`,
            method: "PUT",
            body: payload,
         }),
         invalidatesTags: ["EMPLOYEE_LIST"],
      }),
      deleteEmployee: builder.mutation({
         query: (id) => ({
            url: `/employee/${id}`,
            method: "DELETE",
            body: id,
         }),
         invalidatesTags: ["EMPLOYEE_LIST"],
      }),
   }),
});

export const {
   useGetEmployeeListQuery,
   useAddEmployeeMutation,
   useGetEmployeeDetailsQuery,
   useLazyGetEmployeeDetailsQuery,
   useUpdateEmployeeMutation,
   useDeleteEmployeeMutation,
} = employeeApi;
