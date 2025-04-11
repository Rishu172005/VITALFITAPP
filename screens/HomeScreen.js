import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [userName, setUserName] = useState('Hiro');
  const [progress, setProgress] = useState(50); // Example: 50% progress
  const [categories, setCategories] = useState([]);
  const [recommendedWorkouts, setRecommendedWorkouts] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    // Fetch workout categories
    setCategories([
      { id: '1', name: 'Yoga' },
      { id: '2', name: 'Cardio' },
      { id: '3', name: 'Strength' },
    ]);

    // Fetch recommended workouts
    setRecommendedWorkouts([
      { id: '1', title: 'Morning Yoga Flow', duration: '20 mins' },
      { id: '2', title: 'HIIT Cardio Blast', duration: '15 mins' },
      { id: '3', title: 'Full Body Strength', duration: '30 mins' },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      {/* Welcome Section */}
      <Text style={styles.welcomeText}>Hi {userName} 👋</Text>
      <Text style={styles.subText}>Welcome back! Let's crush your fitness goals today.</Text>

      {/* Progress Card */}
      <View style={styles.progressCard}>
        <Text style={styles.progressText}>Your Progress</Text>
        <Text style={styles.progressValue}>{progress}% Completed</Text>
      </View>

      {/* Workout Categories */}
      <Text style={styles.sectionTitle}>Workout Categories</Text>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Recommended Workouts */}
      <Text style={styles.sectionTitle}>Recommended Workouts</Text>
      <FlatList
        data={recommendedWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.workoutCard}>
            <Text style={styles.workoutTitle}>{item.title}</Text>
            <Text style={styles.workoutDuration}>{item.duration}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  welcomeText: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subText: { fontSize: 16, color: '#666', marginBottom: 16 },
  progressCard: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  progressText: { fontSize: 18, fontWeight: 'bold' },
  progressValue: { fontSize: 16, color: '#4caf50', marginTop: 8 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 16 },
  categoryCard: {
    backgroundColor: '#e0f7fa',
    padding: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  categoryText: { fontSize: 16, fontWeight: 'bold', color: '#00796b' },
  workoutCard: {
    backgroundColor: '#fce4ec',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  workoutTitle: { fontSize: 16, fontWeight: 'bold' },
  workoutDuration: { fontSize: 14, color: '#d81b60', marginTop: 4 },
});