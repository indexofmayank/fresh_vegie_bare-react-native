// App.js

import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import { increment, decrement } from '../redux/action';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

const Demo = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <Counter />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  counter: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default Demo;
