import React from 'react';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
