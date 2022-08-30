import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Components from '../../models/components'
import { RootState } from '../../store'

export const sonarApiSlice = createApi({
    reducerPath: 'sonarApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://sonarcloud.io/api',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).token.value
            if (token) {
              headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
          },
    }),
    tagTypes: [],
    endpoints: builder => ({
      tryAccessToken: builder.mutation<Components, undefined >({
        query: () => '/components/search?organization=openwebtechnologyfoundry'
      }),
      getComponents: builder.query<Components, undefined >({
        query: () => '/components/search?organization=openwebtechnologyfoundry'
      })
    })
})

export const {
  useTryAccessTokenMutation,
  useGetComponentsQuery
} = sonarApiSlice