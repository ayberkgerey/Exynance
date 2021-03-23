import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CoinGecko from '../api/CoinGecko';
import {Avatar} from 'react-native-paper';

export default function FourCoin() {
  const [liteCoin, setLiteCoin] = useState();
  const [chiliz, setChiliz] = useState();
  const [cardano, setCardano] = useState();
  const [ripple, setRipple] = useState();
  const [stellar, setStellar] = useState();
  const [polkadot, setPolkadot] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fetchData = async () => {
        const response = await CoinGecko.get('/simple/price', {
          params: {
            vs_currencies: 'usd',
            ids: 'litecoin,cardano,chiliz,ripple,stellar,polkadot',
          },
        });
        setLiteCoin(response.data.litecoin.usd);
        setChiliz(response.data.chiliz.usd);
        setCardano(response.data.cardano.usd);
        setRipple(response.data.ripple.usd);
        setStellar(response.data.stellar.usd);
        setPolkadot(response.data.polkadot.usd);
      };
      fetchData();
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.singlebar}>
          <Avatar.Image
            source={{
              uri:
                'https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580',
            }}
            size={50}
          />
          <Text style={styles.coinText}>LTC</Text>
          <Text style={styles.coinText}>{JSON.stringify(liteCoin)}$</Text>
        </View>
        <View style={styles.singlebar}>
          <Avatar.Image
            source={{
              uri:
                'https://assets.coingecko.com/coins/images/8834/large/Chiliz.png?1561970540',
            }}
            size={50}
          />
          <Text style={styles.coinText}>CHZ</Text>
          <Text style={styles.coinText}>{JSON.stringify(chiliz)}$</Text>
        </View>
        <View style={styles.singlebar}>
          <Avatar.Image
            source={{
              uri:
                'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
            }}
            size={50}
          />
          <Text style={styles.coinText}>ADA</Text>
          <Text style={styles.coinText}>{JSON.stringify(cardano)}$</Text>
        </View>
      </View>
      <View style={styles.bar}>
        <View style={styles.singlebar}>
          <Avatar.Image
            source={{
              uri:
                'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731',
            }}
            size={50}
          />
          <Text style={styles.coinText}>XRP</Text>
          <Text style={styles.coinText}>{JSON.stringify(ripple)}$</Text>
        </View>
        <View style={styles.singlebar}>
          <Avatar.Image
            source={{
              uri:
                'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157',
            }}
            size={50}
          />
          <Text style={styles.coinText}>XLM</Text>
          <Text style={styles.coinText}>{JSON.stringify(stellar)}$</Text>
        </View>
        <View style={styles.singlebar}>
          <Avatar.Image
            source={{
              uri:
                'https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776',
            }}
            size={50}
          />
          <Text style={styles.coinText}>DOT</Text>
          <Text style={styles.coinText}>{JSON.stringify(polkadot)}$</Text>
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
    padding: 25,
    flexDirection: 'row',
    borderColor: '#aee00f',
    backgroundColor: 'black',
    borderWidth: 2,
    width: '100%',
  },
  singlebar: {alignItems: 'center'},
  coinText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});
