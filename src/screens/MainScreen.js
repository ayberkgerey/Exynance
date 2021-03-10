import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import CoinCard from '../components/CoinCard';

export default function MainScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CoinCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#171717',
  },
});
