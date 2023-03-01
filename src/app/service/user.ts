import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Album } from './../types/album'
import type { Post } from './../types/post'
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
		getPostsById: builder.query<Post[], string>({
			query: userId => `/users/${userId}/posts`,
		}),
		getAlbomById: builder.query<Album[], string>({
			query: userId => `/users/${userId}/albums`,
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetPostsByIdQuery, useGetAlbomByIdQuery } =
	usersApi
