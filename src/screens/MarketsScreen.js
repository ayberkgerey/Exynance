import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MarketsScreen() {
  return (
    <View style={styles.container}>
      <Text>MarketsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
