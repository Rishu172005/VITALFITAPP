// filepath: d:\6th\project\Vital\VitalfitApp\navigation\HomeStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import StepsTracker from '../screens/Trackers/StepsTracker';
import WaterTracker from '../screens/Trackers/WaterTracker';
import SleepTracker from '../screens/Trackers/SleepTracker';
import FoodTracker from '../screens/Trackers/FoodTracker';
import WorkoutTracker from '../screens/Trackers/WorkoutTracker';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4caf50' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
      <Stack.Screen name="StepsTracker" component={StepsTracker} />
      <Stack.Screen name="WaterTracker" component={WaterTracker} />
      <Stack.Screen name="SleepTracker" component={SleepTracker} />
      <Stack.Screen name="FoodTracker" component={FoodTracker} />
      <Stack.Screen name="WorkoutTracker" component={WorkoutTracker} />
    </Stack.Navigator>
  );
};

export default HomeStack;