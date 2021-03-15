import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CoinCard from './CoinCard';
import CoinGecko from '../api/CoinGecko';

export default function CoinList() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await CoinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };
    fetchData();
  });

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.symbol.toString()}
        data={coins}
        renderItem={({item}) => (
          <View>
            <CoinCard
              symbol={item.symbol}
              current_price={item.current_price}
              price_change={item.price_change_percentage_24h}
              image={item.image}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
