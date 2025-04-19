import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import WorkoutDetailsScreen from './WorkoutDetailsScreen';
import TrackerUploader from './screens/TrackerUploader';
import WaterIntakeScreen from './screens/WaterIntakeScreen'; // Import this if you have a WaterIntake screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
        <Stack.Screen name="TrackerUploader" component={TrackerUploader} />
        <Stack.Screen name="WaterIntake" component={WaterIntakeScreen} />
      </Stack.Navigator>
    </NavigationCo