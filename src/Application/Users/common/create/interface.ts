import { IUserViewModel } from '../../../../ViewModel/type';

export interface ICreateUserCommon {
  execute: (arg: IUserViewModel) => IUserViewModel;
}
