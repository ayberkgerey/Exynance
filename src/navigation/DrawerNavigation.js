import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="MainScreen">
        <Drawer.Screen name="MainScreen" component={MainScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
