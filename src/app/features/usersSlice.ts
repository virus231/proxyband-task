import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsersState } from '../types/users'
import { User } from './../types/users'

const initialState: UsersState = {
	users: [],
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUsers: (state, action: PayloadAction<User[]>) => {
			const payload = action.payload
			state.users = payload
		},
	},
})

export const { getUsers } = usersSlice.actions

// export const selectUsers = (state: RootState) => state.

export default usersSlice.reducer
