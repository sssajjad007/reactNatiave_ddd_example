import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { dispatch } from '../store';
import { IUser } from './type';
import { Users } from '../../Api';

const initialState: IUser = {
  id: 0,
  name: 'sajjad',
  lastName: 'seyfollah',
  age: 26,
  birthday: '1376/6/6',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCreateUser(
      state: IUser,
      action: PayloadAction<{ name: string; lastName: string; age: number; birthday: string }>
    ) {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.age = action.payload.age;
      state.birthday = action.payload.birthday;
    },
    setUpdateUser(
      state: IUser,
      action: PayloadAction<{ id: number; name: string; lastName: string; age: number; birthday: string }>
    ) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.age = action.payload.age;
      state.birthday = action.payload.birthday;
    },
  },
});
export default authSlice.reducer;
export const { setCreateUser, setUpdateUser } = authSlice.actions;

export const getUsers = () => {
  return Users;
};
export const getUserById = (id: number) => {
  return Users.find((user: { id: number }) => user.id === id);
};
export const createUser = (arg: IUser) => {
  return Users.push(arg);
};
export const updateUser = (arg: IUser) => {
  const index = Users.findIndex((user: { id: number }) => user.id === arg.id);
  Users[index] = arg;
  return Users[index];
};
export const deleteUsers = (id: number) => {
  const index = Users.findIndex((user: { id: number }) => user.id === id);
  Users.splice(index, 1);
  return Users;
};
