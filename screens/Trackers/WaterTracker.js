import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WaterTracker() {
  const [cups, setCups] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Tracker</Text>
      <Text style={styles.cupsText}>Cups of Water: {cups}</Text>
      <Button title="Add a Cup" onPress={() => setCups(cups + 1)} />
      <Button title="Reset" onPress={() => setCups(0)} color="#d9534f" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  cupsText: { fontSize: 18, marginBottom: 16 },
});