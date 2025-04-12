import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function HomeScreen({ navigation }) {
  const [userName, setUserName] = useState('Hiro');
  const [progress, setProgress] = useState(0);
  const [categories, setCategories] = useState([]);
  const [recommendedWorkouts, setRecommendedWorkouts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingWorkouts, setLoadingWorkouts] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const categoriesSnapshot = await getDocs(collection(db, 'categories'));
      const categoriesData = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoriesData);

      const workoutsSnapshot = await getDocs(collection(db, 'recommendedWorkouts'));
      const workoutsData = workoutsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecommendedWorkouts(workoutsData);
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserName(userDoc.data().name);
            setProgress(userDoc.data().progress);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesSnapshot = await getDocs(collection(db, 'categories'));
      const categoriesData = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoriesData);
    };

    const fetchWorkouts = async () => {
      const workoutsSnapshot = await getDocs(collection(db, 'recommendedWorkouts'));
      const workoutsData = workoutsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecommendedWorkouts(workoutsData);
    };

    fetchCategories();
    fetchWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Text style={styles.welcomeText}>Hi {userName} 👋</Text>
      <Text style={styles.subText}>Welcome back! Let's crush your fitness goals today.</Text>

      <View style={styles.progressCard}>
        <Text style={styles.progressText}>Your Progress</Text>
        <Text style={styles.progressValue}>{progress}% Completed</Text>
      </View>

      <Text style={styles.sectionTitle}>Workout Categories</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() =>
                navigation.navigate('WorkoutDetails', {
                  title: item.name,
                  description: item.description || 'No description available.',
                })
              }
            >
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          refreshing={refreshing}
          onRefresh={onRefresh}
          showsHorizontalScrollIndicator={false}
        />
      )}

      <Text style={styles.sectionTitle}>Recommended Workouts</Text>
      {loadingWorkouts ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={recommendedWorkouts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.workoutCard}
              onPress={() =>
                navigation.navigate('WorkoutDetails', {
                  title: item.title,
                  description: item.description,
                  duration: item.duration,
                })
              }
            >
              <Text style={styles.workoutTitle}>{item.title}</Text>
              <Text style={styles.workoutDuration}>{item.duration}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text>No recommended workouts available</Text>}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      )}
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