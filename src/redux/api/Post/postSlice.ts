import { sub } from 'date-fns';
import { apiSlice } from "../apiSlice";
import Post from './PostModel';

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPostsByUserId: builder.query<Post[], number>({
            query: id => `/posts/?userId=${id}`,
            providesTags: (result, error, arg) => 
                result
                ? [
                    ...result.map(({id}) => ({ type: 'Post' as const, id })),
                    { type: 'Post', id: "LIST" },
                ]
                : [{ type: 'Post', id: "LIST" }]
        }),
    }),
    overrideExisting: true
})

export const {
    useGetPostsByUserIdQuery,
} = extendedApiSlice
