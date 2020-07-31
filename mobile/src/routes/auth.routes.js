import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Start from '../pages/Start'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Header from '../components/Header';

const Stack = createStackNavigator();

const AuthRoutes = () => {
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
        <Stack.Screen options={{
          header: () => <Header />,
        }}
          name="Start"
          component={Start} />
        <Stack.Screen options={{
          headerBackTitle: 'Voltar',
          headerTitle: 'Entrar',
        }} name="SignIn" component={SignIn} />
        <Stack.Screen options={{
          headerBackTitle: 'Voltar',
          headerTitle: 'Cadastrar',
        }} name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoutes;