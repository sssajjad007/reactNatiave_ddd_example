export interface iUsersRepository {
  getUsers: () => IUser[];
  getUserById: (id: number) => IUser;
  createUser: (arg: IUser) => IUser;
  updateUser: (arg: IUser) => IUser;
  deleteUsers: (id: number) => IUser;
}
export interface IUser {
  id: number;
  name: string;
  lastName: string;
  age: number;
  birthday: string;
  // createUser: (name: string, lastName: string, age: number, birthday: string) => any;
  // updateUser: (id: number, name: string, lastName: string, age: number, birthday: string) => any;
}
