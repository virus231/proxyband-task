import { Album } from './../types/album';
import type { Post } from './../types/post';
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
		getPostById: builder.query<Post, string>({
			query: id => `posts/${id}`,
		}),
		getAlbomById: builder.query<Album, string>({
			query: id => `albums/${id}`,
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetPostByIdQuery } = usersApi



