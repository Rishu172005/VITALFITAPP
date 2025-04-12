import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { logDailyData } from '../services/firestoreService';

const WaterTracker = ({ userId, date }) => {
  const [water, setWater] = useState('');

  return (
    <View>
      <Text>Enter Water (ml):</Text>
      <TextInput
        keyboardType="numeric"
        value={water}
        onChangeText={setWater}
      />
      <Button title="Save Water" onPress={() => logDailyData(userId, date, 'water', parseInt(water))} />
    </View>
  );
};

export default WaterTracker;
