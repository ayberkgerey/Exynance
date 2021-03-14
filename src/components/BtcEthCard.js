import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function BtcEthCard() {
  return (
    <View style={styles.container}>
      <View style={styles.btcView}>
        <Avatar.Image source={require('../assets/darthvader.jpg')} size={45} />
        <Text style={styles.btcText}>BTC</Text>
      </View>
      <View style={styles.ethView}>
        <Text style={styles.ethText}>ETH</Text>
        <Avatar.Image source={require('../assets/darthvader.jpg')} size={45} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 26,
  },
  btcView: {
    flexDirection: 'row',
    height: '100%',
    width: '50%',
    backgroundColor: 'black',
    alignItems: 'center',
    borderTopLeftRadius: 26,
    borderBottomLeftRadius: 26,
  },
  btcText: {color: 'white', fontWeight: 'bold', fontSize: 18},
  ethView: {
    flexDirection: 'row',
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'purple',
    borderTopRightRadius: 26,
    borderBottomRightRadius: 26,
  },
  ethText: {color: 'black', fontWeight: 'bold', fontSize: 18},
});
