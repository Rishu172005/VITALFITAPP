import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import WorkoutDetailsScreen from './WorkoutDetailsScreen';
import TrackerUploader from './screens/TrackerUploader'; // Now added to stack

const Stack = createNativeStackNavigator();
<Stack.Screen name="WaterIntake" component={WaterIntakeScreen} />

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
        <Stack.Screen name="TrackerUploader" component={TrackerUploader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}