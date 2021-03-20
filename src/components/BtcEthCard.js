import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import CoinGecko from '../api/CoinGecko';

export default function BtcEthCard() {
  const [btc, setBtc] = useState([]);
  const [eth, setEth] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fetchData = async () => {
        const response = await CoinGecko.get('/simple/price', {
          params: {
            vs_currencies: 'usd',
            ids: 'bitcoin,ethereum',
          },
        });
        setBtc(response.data.bitcoin);
        setEth(response.data.ethereum);
      };
      fetchData();
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <View style={styles.container}>
      <View style={styles.btcView}>
        <Avatar.Image
          source={{
            uri:
              'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
          }}
          size={45}
        />
        <Text style={styles.btcText}>BTC</Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 24,
            fontSize: 23,
          }}>
          {JSON.stringify(btc.usd)}
        </Text>
      </View>
      <View style={styles.ethView}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            marginRight: 7,
            fontSize: 23,
          }}>
          {JSON.stringify(eth.usd)}
        </Text>
        <Text style={styles.ethText}>ETH</Text>
        <Avatar.Image
          source={{
            uri:
              'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
          }}
          size={45}
        />
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
