// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
        setLoading(false);
      },
      (error) => {
        console.error('Error in auth state change:', error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// AuthStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerStyle: { backgroundColor: '#4caf50' }, // Custom header background
        headerTintColor: '#fff', // Header text color
        headerTitleStyle: { fontSize: 20, fontWeight: 'bold' }, // Header title style
      }}
    >
      <Stack.Screen 
        name="SignIn" 
        component={SignInScreen} 
        options={{ title: 'Sign In' }} 
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{ 
          title: 'Sign Up', 
          headerBackTitle: 'Back' 
        }} 
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

// AppNavigator.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { AuthContext } from '../context/AuthContext';

const AppNavigator = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingScreen />; // Add a loading screen component
  }

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
