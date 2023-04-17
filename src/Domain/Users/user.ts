//slice
export interface IUser {
  id: number;
  name: string;
  lastName: string;
  age: number;
  birthday: string;
  createUser: (name: string, lastName: string, age: number, birthday: string) => any;
  updateUser: (id: number, name: string, lastName: string, age: number, birthday: string) => any;
}

export const User: IUser = {
  id: 0,
  name: '',
  lastName: '',
  age: 0,
  birthday: '',
  createUser: (name, lastName, age, birthday) => {
    User.name = name;
    User.lastName = lastName;
    User.age = age;
    User.birthday = birthday;
    if (age < 18) {
      return { error: ' age must be higher 18' };
    }
    return User;
  },
  updateUser: (id, name, lastName, age, birthday) => {
    User.id = id;
    User.name = name;
    User.lastName = lastName;
    User.age = age;
    User.birthday = birthday;
  },
};

// export function createUser(name, lastName, age, birthday) {
//   return User;
// }

// export function updateUser(id, name, lastName, age, birthday) {
//   User.id = id;
//   User.name = name;
//   User.lastName = lastName;
//   User.age = age;
//   User.birthday = birthday;
// }
