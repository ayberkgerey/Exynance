import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import MarketsScreen from '../screens/MarketsScreen';
import MyCoinsScreen from '../screens/MyCoinsScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="MarketsScreen" component={MarketsScreen} />
      <Stack.Screen name="MyCoinsScreen" component={MyCoinsScreen} />
    </Stack.Navigator>
  );
}
