import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { getAuth } from 'firebase/auth';

export default function StepsTracker() {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error('User not logged in');
      return;
    }

    const stepsDoc = doc(db, 'users', user.uid, 'trackers', 'steps');

    // Listen for real-time updates
    const unsubscribe = onSnapshot(stepsDoc, (docSnapshot) => {
      if (docSnapshot.exists()) {
        setSteps(docSnapshot.data().steps || 0);
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Steps Tracker</Text>
      <Text style={styles.stepsText}>Steps Taken: {steps}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  stepsText: { fontSize: 18, color: '#4caf50' },
});