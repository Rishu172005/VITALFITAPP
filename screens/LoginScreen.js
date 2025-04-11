// LoginScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const handleLogin = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch user data from Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      console.log('User Data:', userDoc.data());
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes full height
    justifyContent: 'center', // centers vertically
    alignItems: 'center', // centers horizontally
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
