import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { UserView } from './src/ViewModel/userViewModel';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ width: '100%', height: '100%' }}>
        <UserView />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
