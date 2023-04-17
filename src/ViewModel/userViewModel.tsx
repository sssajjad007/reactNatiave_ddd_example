import React from 'react';
import { Text, View } from 'react-native';
import { IUserViewModel } from './type';
import { useSelector } from '../redux/store';
import { RootState } from '../redux/store';

export function UserView() {
  const User = useSelector((state: RootState) => state.user);
  return (
    <View style={{ flexDirection: 'row', gap: 10 }}>
      <Text>{User.name + User.lastName}</Text>
      <Text>{User.age}</Text>
      <Text>{User.birthday}</Text>
    </View>
  );
}
