import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '../constants';
import { Profile } from '../screens';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () =>{
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.profile}
        component={Profile}
        options={{ headerLargeTitle: true }}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
