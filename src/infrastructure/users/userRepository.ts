import { Users } from '../../Api';
import { iUsersRepository } from '../../Domain/Users/interface';
import { IUser } from '../../Domain/Users/user';

export const usersRepository: iUsersRepository = {
  getUsers: () => {
    return Users;
  },
  getUserById: (id: number) => {
    return Users.find((user) => user.id === id);
  },
  createUser: (arg: IUser) => {
    return Users.push(arg);
  },
  updateUser: (arg: IUser) => {
    const index = Users.findIndex((user) => user.id === arg.id);
    Users[index] = arg;
    return Users[index];
  },
  deleteUsers: (id: number) => {
    const index = Users.findIndex((user) => user.id === id);
    Users.splice(index, 1);
    return Users;
  },
};
