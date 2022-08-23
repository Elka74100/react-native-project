import { apiSlice } from "./apiSlice";
import Post from '../models/post';

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPostsByUserId: builder.query<Post[], number>({
            query: id => `/posts/?userId=${id}`,
            providesTags: (result) => 
                result
                ? [
                    ...result.map(({id}) => ({ type: 'Post' as const, id })),
                    { type: 'Post', id: "LIST" },
                ]
                : [{ type: 'Post', id: "LIST" }]
        }),
        updatePost: builder.mutation<Post[], Post>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: { ...post },
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Post', id: arg.id }
            ]       
         }),
    }),
    overrideExisting: true
})

export const {
    useGetPostsByUserIdQuery,
    useUpdatePostMutation
} = extendedApiSlice
