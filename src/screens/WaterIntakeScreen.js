import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';

const WaterIntakeScreen = () => {
  const [intake, setIntake] = useState(0);
  const [loading, setLoading] = useState(true);
  const user = getAuth().currentUser;

  const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"

  const fetchWaterIntake = async () => {
    if (!user) return;
    const docRef = doc(db, 'users', user.uid, 'waterIntake', today);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setIntake(docSnap.data().total || 0);
    }
    setLoading(false);
  };

  const updateWater = async (amount) => {
    if (!user) return;
    const docRef = doc(db, 'users', user.uid, 'waterIntake', today);
    const newTotal = intake + amount;
    await setDoc(docRef, { total: newTotal }, { merge: true });
    setIntake(newTotal);
  };

  const resetWater = async () => {
    if (!user) return;
    const docRef = doc(db, 'users', user.uid, 'waterIntake', today);
    await setDoc(docRef, { total: 0 }, { merge: true });
    setIntake(0);
  };

  useEffect(() => {
    fetchWaterIntake();
  }, []);

  if (loading) {
    return <Text style={styles.text}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Water Intake Tracker</Text>
      <Text style={styles.intake}>{intake} ml today</Text>

      <View style={styles.buttons}>
        <Button title="+250 ml" onPress={() => updateWater(250)} />
        <Button title="Reset" color="red" onPress={resetWater} />
      </View>
    </View>
  );
};

export default WaterIntakeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  intake: {
    fontSize: 32,
    marginVertical: 20,
    color: '#007AFF',
  },
  buttons: {
    flexDirection: 'row',
    gap: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});
