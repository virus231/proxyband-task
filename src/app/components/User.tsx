import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetAlbomByIdQuery } from '../service/user'
import { User } from '../types/users'
import { Modal } from './Modal'

type UserProps = {
	user: User
}

export const UserItem = (props: UserProps) => {
	const { user } = props
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const { data, isLoading } = useGetAlbomByIdQuery(String(user.id))

	const handleModalDialog = () => {
		setIsOpen(true)
	}

	return (
		<>
			<div className='card'>
				<div className='container'>
					<h4>{user.name}</h4>
					<Link to={`/users/${user.id}/posts`}>Пости</Link>
					<button onClick={handleModalDialog}>Альбоми</button>
				</div>
			</div>
			<Modal data={data!} isOpen={isOpen} closeModal={() => setIsOpen(false)} />
		</>
	)
}
