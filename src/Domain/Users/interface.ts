import { IUser } from './user';

export interface iUsersRepository {
  getUsers: () => IUser[];
  getUserById: (id: number) => IUser;
  createUser: (arg: IUser) => IUser;
  updateUser: (arg: IUser) => IUser;
  deleteUsers: (id: number) => IUser;
}
