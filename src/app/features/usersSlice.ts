import { User } from './../types/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { UsersState } from '../types/users'

const initialState: UsersState = {
	users: [],
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		// getUsers: state => {},
		// increment: (state) => {
		//   state.value += 1
		// },
		// decrement: (state) => {
		//   state.value -= 1
		// },
		// Use the PayloadAction type to declare the contents of `action.payload`
		getUsers: (state, action: PayloadAction<User[]>) => {
      const payload = action.payload
      state.users = payload
		},
	},
})

export const { getUsers } = usersSlice.actions

export const selectUsers = (state: RootState) => state.users

export default usersSlice.reducer
