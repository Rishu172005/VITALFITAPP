// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqYaU1WoRMHnLMz6xpmQ_lbGIGppwzaFc',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJvitalfit-a7d90ECT_ID',
  storageBucket: 'vitalfit-a7d90.firebasestorage.app',
  messagingSenderId: '62380388690',
  appId: '1:62380388690:android:17e83406748e00d5a00a8b',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
