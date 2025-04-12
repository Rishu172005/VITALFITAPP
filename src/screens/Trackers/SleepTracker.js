import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SleepTracker() {
  const [hours, setHours] = useState('');

  const handleSave = () => {
    alert(`You logged ${hours} hours of sleep.`);
    setHours('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleep Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter hours slept"
        keyboardType="numeric"
        value={hours}
        onChangeText={setHours}
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