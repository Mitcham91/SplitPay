import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultHomeScreen from './app/screens/DefaultHomeScreen';
import RenterPhoneScreen from './app/screens/RenterPhoneScreen';
import RenterCodeScreen from './app/screens/RenterCodeScreen';
import { RootStackParamList } from './app/navigation/types';
import RenterBankConnectScreen from './app/screens/RenterBankConnectScreen';
import RenterVerifyLandlord from './app/screens/RenterVerifyLandlord';





const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DefaultHome">
        <Stack.Screen name="DefaultHome" component={DefaultHomeScreen} />
        <Stack.Screen name="RenterPhone" component={RenterPhoneScreen} />
        <Stack.Screen name="RenterCode" component={RenterCodeScreen} />
        <Stack.Screen name="RenterBankConnect" component={RenterBankConnectScreen} />
       <Stack.Screen name="RenterVerifyLandlord" component={RenterVerifyLandlord} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


