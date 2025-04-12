import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { logDailyData } from '../services/firestoreService';

const StepsTracker = ({ userId, date }) => {
  const [steps, setSteps] = useState('');

  return (
    <View>
      <Text>Enter Steps:</Text>
      <TextInput
        keyboardType="numeric"
        value={steps}
        onChangeText={setSteps}
      />
      <Button title="Save Steps" onPress={() => logDailyData(userId, date, 'steps', parseInt(steps))} />
    </View>
  );
};

export default StepsTracker;
