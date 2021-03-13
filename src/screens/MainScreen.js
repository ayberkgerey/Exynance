import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import CoinList from '../components/CoinList';

export default function MainScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Main Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flex: 1,
    backgroundColor: '#171717',
  },
});
