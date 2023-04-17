import React from 'react';
import { Text, View } from 'react-native';
import { IUserViewModel } from './type';
const User: IUserViewModel = {
  id: 0,
  name: 'sajjad',
  lastName: 'seyfollah',
  age: 26,
  birthday: '1376/6/6',
};

export function UserView() {
  return (
    <View style={{ flexDirection: 'row', gap: 10 }}>
      <Text>{User.name + User.lastName}</Text>
      <Text>{User.age}</Text>
      <Text>{User.birthday}</Text>
    </View>
  );
}
