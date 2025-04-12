import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { logDailyData } from '../services/firestoreService';

const CalorieTracker = ({ userId, date }) => {
  const [calories, setCalories] = useState('');

  return (
    <View>
      <Text>Enter Calories:</Text>
      <TextInput
        keyboardType="numeric"
        value={calories}
        onChangeText={setCalories}
      />
      <Button title="Save Calories" onPress={() => logDailyData(userId, date, 'calories', parseInt(calories))} />
    </View>
  );
};

export default CalorieTracker;
