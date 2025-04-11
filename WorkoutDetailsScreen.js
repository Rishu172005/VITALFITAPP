import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkoutDetailsScreen({ route }) {
  const { title, description, duration } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.duration}>Duration: {duration}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  description: { fontSize: 16, color: '#666', marginBottom: 16 },
  duration: { fontSize: 16, color: '#4caf50' },
});