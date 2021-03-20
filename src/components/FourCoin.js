import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CoinGecko from '../api/CoinGecko';

export default function FourCoin() {
  const [liteCoin, setLiteCoin] = useState();
  const [chiliz, setChiliz] = useState();
  const [cardano, setCardano] = useState();
  const [ripple, setRipple] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fetchData = async () => {
        const response = await CoinGecko.get('/simple/price', {
          params: {
            vs_currencies: 'usd',
            ids: 'litecoin,cardano,chiliz,ripple',
          },
        });
        setLiteCoin(response.data.litecoin);
        setChiliz(response.data.cardano);
        setCardano(response.data.chiliz);
        setRipple(response.data.ripple);
      };
      fetchData();
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.singlebar}>
          <Text style={styles.coinText}>Coin</Text>
          <Text style={styles.coinText}>Coin</Text>
        </View>
        <View style={styles.singlebar}>
          <Text style={styles.coinText}>Coin</Text>
          <Text style={styles.coinText}>Coin</Text>
        </View>
        <View style={styles.singlebar}>
          <Text style={styles.coinText}>Coin</Text>
          <Text style={styles.coinText}>Coin</Text>
        </View>
      </View>
      <View style={styles.bar}>
        <View style={styles.singlebar}>
          <Text style={styles.coinText}>Coin</Text>
          <Text style={styles.coinText}>Coin</Text>
        </View>
        <View style={styles.singlebar}>
          <Text style={styles.coinText}>Coin</Text>
          <Text style={styles.coinText}>Coin</Text>
        </View>
        <View style={styles.singlebar}>
          <Text style={styles.coinText}>Coin</Text>
          <Text style={styles.coinText}>Coin</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 300,
    borderColor: '#aee00f',
    borderWidth: 2,
  },
  bar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50,
    flexDirection: 'row',
    borderColor: '#aee00f',
    backgroundColor: 'black',
    borderWidth: 2,
    width: '100%',
  },
  singlebar: {},
  coinText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});
