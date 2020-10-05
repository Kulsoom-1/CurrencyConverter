import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {useKeepAwake} from '@sayem314/react-native-keep-awake';
import AppContainer from './utils/router';

const App = () => {
  if(__DEV__)
    useKeepAwake();

  return (
    <View style={styles.appContainer}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  }
})

export default App;