import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function CoinCard(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Avatar.Image source={require('../assets/mint.jpg')} size={36} />
      <View style={{width: '30%'}}>
        <Text style={styles.textStyle1}>{props.symbol}</Text>
      </View>
      <View style={{width: '30%'}}>
        <Text style={styles.textStyle2}>{props.current_price}</Text>
      </View>
      <View style={{width: '30%'}}>
        <Text style={styles.textStyle3}>{props.price_change}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 35,
    flexDirection: 'row',
  },
  textStyle1: {
    color: 'white',
    fontSize: 14,
    marginLeft: 30,
  },
  textStyle2: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  textStyle3: {
    color: 'white',
    fontSize: 14,
    textAlign: 'right',
  },
});
