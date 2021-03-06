import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MarketsScreen from '../screens/MarketsScreen';
import MainScreen from '../screens/MainScreen';
import MyCoinsScreen from '../screens/MyCoinsScreen';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MarketsScreen" component={MarketsScreen} />
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="MyCoinsScreen" component={MyCoinsScreen} />
    </Tab.Navigator>
  );
}
