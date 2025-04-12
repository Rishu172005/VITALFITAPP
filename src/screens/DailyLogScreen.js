import React from 'react';
import { View, ScrollView } from 'react-native';
import StepsTracker from '../components/StepsTracker';
import WaterTracker from '../components/WaterTracker';
import CalorieTracker from '../components/CalorieTracker';

const DailyLogScreen = ({ userId }) => {
  const today = new Date().toISOString().split('T')[0]; // e.g., '2025-04-13'

  return (
    <ScrollView>
      <StepsTracker userId={userId} date={today} />
      <WaterTracker userId={userId} date={today} />
      <CalorieTracker userId={userId} date={today} />
    </ScrollView>
  );
};

export default DailyLogScreen;
