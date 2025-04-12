// screens/TrackerUploader.js
import React from 'react';
import { View, Button, Alert } from 'react-native';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const TrackerUploader = ({ userId = 'testUser123' }) => {
  const uploadTrackers = async () => {
    try {
      await Promise.all([
        setDoc(doc(db, 'users', userId, 'trackers', 'steps'), { steps: 1000 }),
        setDoc(doc(db, 'users', userId, 'trackers', 'water'), { cups: 5 }),
        setDoc(doc(db, 'users', userId, 'trackers', 'sleep'), { hours: 7 }),
        setDoc(doc(db, 'users', userId, 'trackers', 'food'), { calories: 2000 }),
        setDoc(doc(db, 'users', userId, 'trackers', 'workout'), {
          type: 'Running',
          duration: 30
        })
      ]);

      Alert.alert('Success', 'All tracker data uploaded!');
    } catch (error) {
      console.error('Error uploading tracker data:', error);
      Alert.alert('Error', 'Something went wrong while uploading data.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Upload Tracker Data" onPress={uploadTrackers} />
    </View>
  );
};

export default TrackerUploader;
