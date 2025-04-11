// HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hi Hiro 👋</Text>
      <Text style={styles.subtitle}>Let's crush your fitness goals today!</Text>

      <View style={styles.progressCard}>
        <Text style={styles.cardTitle}>Today's Progress</Text>
        <Text style={styles.progressText}>Workout Completed: 30%</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '30%' }]} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Workout Categories</Text>
      <View style={styles.categoryRow}>
        {['Yoga', 'Cardio', 'Strength'].map((cat) => (
          <TouchableOpacity key={cat} style={styles.categoryCard}>
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Recommended Workouts</Text>
      <View style={styles.recommendCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.recommendImage}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.recommendTitle}>Full Body HIIT</Text>
          <Text style={styles.recommendSub}>20 mins • Beginner</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  greeting: { fontSize: 26, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  progressCard: { backgroundColor: '#f0f0f0', borderRadius: 12, padding: 16, marginBottom: 24 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  progressText: { fontSize: 14, marginBottom: 6 },
  progressBar: { height: 10, backgroundColor: '#ccc', borderRadius: 5 },
  progressFill: { height: '100%', backgroundColor: '#4CAF50', borderRadius: 5 },
  sectionTitle: { fontSize: 20, fontWeight: '600', marginBottom: 12 },
  categoryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  categoryCard: { backgroundColor: '#E0F2F1', padding: 20, borderRadius: 10, flex: 1, alignItems: 'center', marginHorizontal: 5 },
  categoryText: { fontSize: 16, fontWeight: '500' },
  recommendCard: { flexDirection: 'row', alignItems: 'center', padding: 12, backgroundColor: '#f7f7f7', borderRadius: 10 },
  recommendImage: { width: 80, height: 80, borderRadius: 10, marginRight: 12 },
  recommendTitle: { fontSize: 16, fontWeight: '600' },
  recommendSub: { fontSize: 14, color: '#777' },
});
