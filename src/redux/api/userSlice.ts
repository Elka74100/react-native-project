import { apiSlice } from "./apiSlice";
import User from "../models/user";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query<User[], undefined>({
            query: () => '/users',
            providesTags: (result, error, arg) => 
                result
                    ? [
                        ...result.map(({id}) => ({ type: 'User' as const, id })),
                        { type: 'User', id: "LIST" },
                      ]
                    : [{ type: 'User', id: "LIST" }]
        })
    }),
    overrideExisting: true
})

export const {
    useGetUsersQuery
} = usersApiSlice

