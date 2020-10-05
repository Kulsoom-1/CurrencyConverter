import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Text } from '../components';
import { colors } from '../utils/constants';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>This is Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  }
})

export default Home;