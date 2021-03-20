import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import CoinList from '../components/CoinList';
import BtcEthCard from '../components/BtcEthCard';
import FourCoin from '../components/FourCoin';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topCard}>
        <BtcEthCard />
        <Image
          source={require('../assets/12345.png')}
          style={styles.imageLayout}
        />
        <View style={styles.fourcoinStyle}>
          <FourCoin />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flex: 1,
    backgroundColor: '#171717',
  },
  topCard: {
    alignItems: 'center',
  },
  imageLayout: {
    marginTop: 40,
    width: '100%',
    height: 140,
  },
  fourcoinStyle: {
    marginTop: 80,
  },
});
