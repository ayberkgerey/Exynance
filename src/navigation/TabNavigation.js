import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MarketsScreen from '../screens/MarketsScreen';
import MainScreen from '../screens/MainScreen';
import MyCoinsScreen from '../screens/MyCoinsScreen';
import TabContent from './Contents/TabContent';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator tabBar={(props) => <TabContent {...props} />}>
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="MarketsScreen" component={MarketsScreen} />
      <Tab.Screen name="MyCoinsScreen" component={MyCoinsScreen} />
    </Tab.Navigator>
  );
}
