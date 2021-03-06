import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import DrawerContent from './DrawerContent';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="MainScreen">
      <Drawer.Screen name="Home" component={TabNavigation} />
    </Drawer.Navigator>
  );
}
