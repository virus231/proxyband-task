import { createBrowserRouter } from 'react-router-dom'
import { AlbumPage } from '../pages/albums'
import { PostsPage } from '../pages/posts'
import { UsersPage } from '../pages/users'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <UsersPage />,
	},
	{
		path: '/posts/:id',
		element: <PostsPage />,
	},
	{
		path: '/albums/:id',
		element: <AlbumPage />,
	},
])
