import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

useEffect(() => {
  const fetchWorkoutDetails = async (workoutId) => {
    const workoutDoc = await getDoc(doc(db, 'recommendedWorkouts', workoutId));
    if (workoutDoc.exists()) {
      console.log('Workout Details:', workoutDoc.data());
    }
  };

  fetchWorkoutDetails('workout-id'); // Replace 'workout-id' with the actual ID
}, []);