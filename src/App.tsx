import './App.css'
import { useGetUsersQuery } from './app/service/user'

function App() {
	const { data, isLoading, error } = useGetUsersQuery('users')

	return (
		<div className='App'>
			{error ? (
				<>Oh no, there was an error</>
			) : isLoading ? (
				<>Loading...</>
			) : data ? (
				<>
					<div>{JSON.stringify(data)}</div>
				</>
			) : null}
		</div>
	)
}

export default App
