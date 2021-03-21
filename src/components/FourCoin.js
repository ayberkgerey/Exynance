import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CoinList from './CoinList';

export default function FourCoin() {
  return <CoinList entry="litecoin,cardano,chiliz,ripple" />;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
