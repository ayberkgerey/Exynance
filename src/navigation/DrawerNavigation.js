import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './Contents/DrawerContent';
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
