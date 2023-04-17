import { User } from '../../../../Domain/Users/user';
import { IUserViewModel } from '../../../../ViewModel/type';
import { usersRepository } from '../../../../infrastructure/users/userRepository';
import { ICreateUserCommon } from './interface';

// export interface ICreateUserCommonHandler extends ICreateUserCommon {
//   execute: (arg: IUserViewModel) => IUserViewModel;
// }
const ICreateUserCommonHandler: ICreateUserCommon = {
  execute: (arg: IUserViewModel) => {
    const newUser = User.createUser(arg.name, arg.lastName, arg.age, arg.birthday);
    const temp = usersRepository.createUser(newUser);
    arg.id = temp.id;
    return arg;
  },
};
