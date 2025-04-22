
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import List from './screens/List';

import LoadingScreen from './screens/LoadingScreen';






const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }} // Hide header for loading screen
      />
      <Stack.Screen
          name="List"
          component={List}
          options={{ headerShown: false }}
        />
    

      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
