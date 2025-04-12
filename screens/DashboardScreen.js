import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function DashboardScreen({ navigation }) {
  const [userName, setUserName] = useState('User');
  const [progress, setProgress] = useState(0);
  const [recentWorkouts, setRecentWorkouts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        try {
          const userDoc = await getDocs(collection(db, 'users'));
          if (userDoc.exists()) {
            setUserName(userDoc.data().name);
            setProgress(userDoc.data().progress);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    const fetchRecentWorkouts = async () => {
      try {
        const workoutsSnapshot = await getDocs(collection(db, 'recentWorkouts'));
        const workoutsData = workoutsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecentWorkouts(workoutsData);
      } catch (error) {
        console.error('Error fetching recent workouts:', error);
      }
    };

    fetchUserData();
    fetchRecentWorkouts();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigation.navigate('SignIn'); // Navigate back to SignInScreen
    } catch (error) {
      Alert.alert('Error', 'Failed to log out.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi {userName} 👋</Text>
      <Text style={styles.subText}>Welcome to your dashboard!</Text>

      <View style={styles.progressCard}>
        <Text style={styles.progressText}>Your Progress</Text>
        <Text style={styles.progressValue}>{progress}% Completed</Text>
      </View>

      <Text style={styles.sectionTitle}>Quick Navigation</Text>
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('WorkoutCategories')}
        >
          <Text style={styles.navButtonText}>Workout Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('RecommendedWorkouts')}
        >
          <Text style={styles.navButtonText}>Recommended Workouts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('StepsTracker')}
        >
          <Text style={styles.navButtonText}>Steps Tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('WaterTracker')}
        >
          <Text style={styles.navButtonText}>Water Tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('SleepTracker')}
        >
          <Text style={styles.navButtonText}>Sleep Tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('FoodTracker')}
        >
          <Text style={styles.navButtonText}>Food Tracker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('WorkoutTracker')}
        >
          <Text style={styles.navButtonText}>Workout Tracker</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Recent Workouts</Text>
      <FlatList
        data={recentWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.workoutCard}>
            <Text style={styles.workoutTitle}>{item.title}</Text>
            <Text style={styles.workoutDuration}>Duration: {item.duration}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No recent workouts available</Text>}
      />

      <Button title="Logout" onPress={handleLogout} color="#d9534f" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  greeting: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
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
  navigationButtons: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  navButton: {
    backgroundColor: '#4caf50',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    width: '48%',
  },
  navButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  workoutCard: {
    backgroundColor: '#e0f7fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  workoutTitle: { fontSize: 16, fontWeight: 'bold' },
  workoutDuration: { fontSize: 14, color: '#00796b', marginTop: 4 },
});