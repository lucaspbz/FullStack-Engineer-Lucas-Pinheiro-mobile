import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './pages/MainPage';
import Statement from './pages/Statement';
import StatisticsPage from './pages/StatisticsPage';
const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer theme={{ colors: { background: '#fff' } }}>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="MainPage" component={MainPage} />
        <AppStack.Screen name="Statement" component={Statement} />
        <AppStack.Screen name="StatisticsPage" component={StatisticsPage} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
