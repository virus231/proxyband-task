import { useParams } from 'react-router-dom'
import { useGetPostsByIdQuery } from '../service/user'

export const Posts = () => {
	let { id } = useParams()

	const { data, isLoading } = useGetPostsByIdQuery(String(id))

	const loading = !data && isLoading

	return (
		<>
			<h3>Пости</h3>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div>
					{data?.map(post => (
						<div>
							<p>UserId: {post?.userId}</p>
							<p>Title: {post?.title}</p>
							<p>Body: {post?.body}</p>
						</div>
					))}
				</div>
			)}
		</>
	)
}
