import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import { router } from './app/routes/root'
import { store } from './app/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<RouterProvider router={router} />
		<App />
	</Provider>
)
