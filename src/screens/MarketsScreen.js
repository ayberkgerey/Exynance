import React from 'react';
import {StyleSheet, TouchableOpacity, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import CoinList from '../components/CoinList';

export default function MarketsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CoinList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#171717',
    paddingTop: 20,
  },
});
