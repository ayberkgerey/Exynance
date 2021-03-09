import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/core';

export default function TabContent() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.MarketsContainer}
        onPress={() => {
          navigation.navigate('MarketsScreen', {screen: 'MarketsScreen'});
        }}>
        <Icon name="inbox" color={'#acee0f'} size={35} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.HomeContainer}
        onPress={() => {
          navigation.navigate('MainScreen', {screen: 'MainScreen'});
        }}>
        <Icon name="home" color={'#acee0f'} size={35} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CoinsContainer}
        onPress={() => {
          navigation.navigate('MyCoinsScreen', {screen: 'MyCoinsScreen'});
        }}>
        <Icon name="bitcoin" color={'#acee0f'} size={35} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    height: 46,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 2,
    borderColor: '#acee0f',
    borderTopWidth: 2,
  },
  MarketsContainer: {},
  HomeContainer: {},
  CoinsContainer: {},
});
