import { createBrowserRouter } from 'react-router-dom'
import { PostsPage } from '../pages/posts'
import { UsersPage } from '../pages/users'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <UsersPage />,
	},
	{
		path: '/users/:id/posts',
		element: <PostsPage />,
	},
])
