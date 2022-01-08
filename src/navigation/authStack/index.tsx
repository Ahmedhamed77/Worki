import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen} from '../../screens';
import {AuthParamList, AuthParams} from './interface';

const Stack = createNativeStackNavigator<AuthParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AuthParams.login} component={LoginScreen} />
    </Stack.Navigator>
  );
};
