import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '../constants';
import { Login } from '../screens/Login/Login';

const Stack = createNativeStackNavigator();

const AuthNavigator =() =>{

  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name={NAVIGATION.login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;

