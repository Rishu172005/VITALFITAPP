import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { auth } from '../config/firebase';
export const logDailyData = async (userId, date, dataType, value) => {
  try {
    const docRef = doc(db, 'users', userId, 'dailyLogs', date);
    await setDoc(docRef, { [dataType]: value }, { merge: true });
  } catch (error) {
    console.error('Error saving data:', error);
  }
};
