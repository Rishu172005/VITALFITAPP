// filepath: d:\6th\project\Vital\VitalfitApp\firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDqYaU1WoRMHnLMz6xpmQ_lbGIGppwzaFc',
  authDomain: 'vitalfit.firebaseapp.com',
  projectId: 'vitalfit-a7d90',
  storageBucket: 'vitalfit-a7d90.firebasestorage.app',
  messagingSenderId: '62380388690',
  appId: '1:62380388690:android:17e83406748e00d5a00a8b',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db };
