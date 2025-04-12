import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { getAuth } from 'firebase/auth';

export default function WaterTracker() {
  const [cups, setCups] = useState(0);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error('User not logged in');
      return;
    }

    const waterDoc = doc(db, 'users', user.uid, 'trackers', 'water');

    // Listen for real-time updates
    const unsubscribe = onSnapshot(waterDoc, (docSnapshot) => {
      if (docSnapshot.exists()) {
        setCups(docSnapshot.data().cups || 0);
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const addCup = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error('User not logged in');
      return;
    }

    const waterDoc = doc(db, 'users', user.uid, 'trackers', 'water');
    const newCups = cups + 1;
    setCups(newCups);

    // Save to Firestore
    await setDoc(waterDoc, { cups: newCups }, { merge: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Tracker</Text>
      <Text style={styles.cupsText}>Cups of Water: {cups}</Text>
      <Button title="Add a Cup" onPress={addCup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  cupsText: { fontSize: 18, marginBottom: 16 },
});