import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {CoinContext} from "../context/CoinProvider";
import CoinCard from "./CoinCard";

export default function CoinList() {
  const coins = useContext(CoinContext)

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.symbol.toString()}
        data={coins.coins}
        renderItem={({item}) => (
          <View>
            <CoinCard symbol={item.symbol} current_price={item.current_price} price_change={item.price_change_percentage_24h} />
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
