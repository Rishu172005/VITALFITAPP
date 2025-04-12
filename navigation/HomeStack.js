// filepath: d:\6th\project\Vital\VitalfitApp\navigation\HomeStack.js
import DashboardScreen from '../screens/DashboardScreen';
import StepsTracker from '../screens/Trackers/StepsTracker';
import WaterTracker from '../screens/Trackers/WaterTracker';
import SleepTracker from '../screens/Trackers/SleepTracker';
import FoodTracker from '../screens/Trackers/FoodTracker';
import WorkoutTracker from '../screens/Trackers/WorkoutTracker';

<Stack.Screen  name="Dashboard"  component={DashboardScreen}  options={{ title: 'Dashboard' }} />
<Stack.Screen name="StepsTracker" component={StepsTracker} />
<Stack.Screen name="WaterTracker" component={WaterTracker} />
<Stack.Screen name="SleepTracker" component={SleepTracker} />
<Stack.Screen name="FoodTracker" component={FoodTracker} />
<Stack.Screen name="WorkoutTracker" component={WorkoutTracker} />