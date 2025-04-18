// filepath: d:\6th\project\Vital\VitalfitApp\navigation\AppNavigator.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import LoadingScreen from '../screens/LoadingScreen';
import { AuthContext } from '../context/AuthContext';

const AppNavigator = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingScreen />; // Show a loading screen while determining auth state
  }

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;