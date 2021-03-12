import React from 'react';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import {CoinProvider} from './src/context/CoinProvider';

export default function App() {
  return (
    <CoinProvider>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </CoinProvider>
  );
}
