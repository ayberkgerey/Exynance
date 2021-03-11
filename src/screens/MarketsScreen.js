import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import CoinCard from '../components/CoinCard';

export default function MarketsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CoinCard />
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
