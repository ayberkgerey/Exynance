import React, {useEffect, useState, useContext} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import CoinCard from './CoinCard';
import CoinGecko from '../api/CoinGecko';

export default function CoinList(props) {
  const [coins, setCoins] = useState([]);

  const fetchData = async () => {
    const response = await CoinGecko.get('/coins/markets', {
      params: {
        vs_currency: props.entry,
        page: 1,
      },
    });
    setCoins(response.data);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
