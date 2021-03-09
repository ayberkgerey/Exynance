import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CoinCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Name</Text>
      <Text style={styles.textStyle}>Value</Text>
      <Text style={styles.textStyle}>Raise</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    flexDirection: 'row',
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
  },
});
