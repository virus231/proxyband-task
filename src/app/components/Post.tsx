import { useParams } from 'react-router-dom'
import { useGetPostByIdQuery } from '../service/user'

export const Post = () => {
	let { id } = useParams()

	const data = useGetPostByIdQuery(String(id))

	return (
		<>
			<div>Post</div>
		</>
	)
}
