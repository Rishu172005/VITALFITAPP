import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function WorkoutTracker() {
  const [workout, setWorkout] = useState('');
  const [duration, setDuration] = useState('');

  const handleSave = () => {
    alert(`You logged a ${workout} workout for ${duration} minutes.`);
    setWorkout('');
    setDuration('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Workout Type (e.g., Running)"
        value={workout}
        onChangeText={setWorkout}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (minutes)"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    width: '80%',
    borderRadius: 4,
  },
});