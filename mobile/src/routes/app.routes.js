import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

import Header from '../components/Header';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTintColor: '#fff',
        cardStyle: {
          backgroundColor: '#F8FAFC'
        },
        headerStyle: {
          backgroundColor: '#4CAF50',

        }
      }}>
        <Stack.Screen
          options={{
            header: () => <Header />,
            headerBackTitle: 'Voltar',
            headerTitle: 'Home',
          }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;