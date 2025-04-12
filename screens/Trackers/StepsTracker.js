import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Pedometer } from '@react-native-community/pedometer';

export default function StepsTracker() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState(false);
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    Pedometer.isStepCountingAvailableAsync()
      .then((result) => setIsPedometerAvailable(result))
      .catch(() => Alert.alert('Error', 'Pedometer is not available on this device.'));

    const subscription = Pedometer.watchStepCount((result) => setSteps(result.steps));

    return () => subscription && subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Steps Tracker</Text>
      {isPedometerAvailable ? (
        <Text style={styles.stepsText}>Steps Taken: {steps}</Text>
      ) : (
        <Text style={styles.errorText}>Pedometer is not available on this device.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  stepsText: { fontSize: 18, color: '#4caf50' },
  errorText: { fontSize: 18, color: '#d9534f' },
});