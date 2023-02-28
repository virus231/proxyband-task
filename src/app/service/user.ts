import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from './../types/users'

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	endpoints: builder => ({
		getUsers: builder.query<User[], string>({
			query: name => name,
		}),
		getPostById: builder.query<User, string>({
			query: id => `posts/${id}`,
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery } = usersApi



