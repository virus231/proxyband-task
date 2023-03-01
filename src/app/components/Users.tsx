import { useGetUsersQuery } from '../service/user'
import { UserItem } from './User'

export const Users = () => {
	const { data, isLoading, error } = useGetUsersQuery('users')

	return (
		<>
			<div>
				{error && 'Oh no, there was an error.'}
				{isLoading && 'Loading...'}
				{data ? data.map(user => <UserItem user={user} />) : null}
			</div>
		</>
	)
}
