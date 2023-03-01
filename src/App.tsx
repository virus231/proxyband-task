import './App.css'
import { useGetUsersQuery } from './app/service/user'

function App() {
	const { data, isLoading, error } = useGetUsersQuery('users')

	return (
		<div className='App'>
			
		</div>
	)
}

export default App
