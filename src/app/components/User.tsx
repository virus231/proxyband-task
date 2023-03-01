import { Link } from 'react-router-dom'
import { User } from '../types/users'

type UserProps = {
	user: User
}

export const UserItem = (props: UserProps) => {
	const { user } = props

	return (
		<div className='card'>
			<div className='container'>
				<h5>{user.name}</h5>
				{/* <button> */}
				<Link to={`/posts/${user.id}`}>Пости</Link>
				{/* </button> */}
				<button>Альбоми</button>
			</div>
		</div>
	)
}
