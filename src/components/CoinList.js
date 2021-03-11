import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import CoinGecko from '../api/CoinGecko';

export default function CoinList() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await CoinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: 'bitcoin,ethereum',
        },
      });
      console.log(response.data);
    };
    fetchData();
  });

  return (
    <View>
      <Text>CoinList</Text>
    </View>
  );
}
