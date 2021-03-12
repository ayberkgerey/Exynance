import React, {useEffect, useState, useContext} from 'react';
import {View, Text} from 'react-native';
import CoinGecko from '../api/CoinGecko';
import {CoinContext} from '../context/CoinProvider';

export default function CoinList() {
  const [coins, setCoins] = useState([]);
  const watchList = useContext(CoinContext);
  const [isLoading, setIsLoading] = useState(false);

  console.log(watchList);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await CoinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: 'bitcoin',
        },
      });
      setCoins(response.data);
      console.log('data : ' + JSON.stringify(coins));
      setIsLoading(false);
    };
    fetchData();
  });

  return (
    <View>
      <Text>CoinList</Text>
    </View>
  );
}
