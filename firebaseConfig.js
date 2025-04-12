// filepath: d:\6th\project\Vital\VitalfitApp\firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',//AIzaSyDqYaU1WoRMHnLMz6xpmQ_lbGIGppwzaFc
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',//vitalfit-a7d90
  storageBucket: 'YOUR_STORAGE_BUCKET',//vitalfit-a7d90.firebasestorage.app
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',//62380388690
  appId: 'YOUR_APP_ID',//1:62380388690:android:17e83406748e00d5a00a8b

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);